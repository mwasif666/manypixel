import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({});
  const [billingCycle, setBillingCycle] = useState("MONTHLY");
  const [plans, setPlans] = useState({});

  const currency = {
    usd: 0,
    aed: 1,
  };

  const currencyCheck = useCallback(() => {
    return currency.usd === 0; // Default to USD
  }, []);

  const getPrice = useCallback((base, discount) => {
    const amount = parseFloat(base) || 0;
    const disc = parseFloat(discount) || 0;
    if (disc > 0) {
      return (amount * (1 - disc / 100)).toFixed(2);
    }
    return amount.toFixed(2);
  }, []);

  const getTotal = useCallback((base, discount, multiplier) => {
    const price = parseFloat(getPrice(base, discount));
    return price * multiplier;
  }, [getPrice]);

  const makeData = useCallback((selectedPackage) => {
    if (!selectedPackage) return;

    const isUSD = currencyCheck();

    const newPlans = {
      yearly: {
        price: getPrice(
          isUSD ? selectedPackage.y_dol : selectedPackage.y_aed,
          isUSD ? selectedPackage.y_dol_discount : selectedPackage.y_aed_discount
        ),
        total: getTotal(
          isUSD ? selectedPackage.y_dol : selectedPackage.y_aed,
          isUSD ? selectedPackage.y_dol_discount : selectedPackage.y_aed_discount,
          12
        ),
        label: "Billed yearly",
        save: isUSD
          ? `SAVE ${selectedPackage.y_dol_discount || 0}%`
          : `SAVE ${selectedPackage.y_aed_discount || 0}%`,
      },
      quarterly: {
        price: getPrice(
          isUSD ? selectedPackage.quar_dol : selectedPackage.quar_aed,
          isUSD ? selectedPackage.quar_dol_discount : selectedPackage.quar_aed_discount
        ),
        total: getTotal(
          isUSD ? selectedPackage.quar_dol : selectedPackage.quar_aed,
          isUSD ? selectedPackage.quar_dol_discount : selectedPackage.quar_aed_discount,
          3
        ),
        label: "Billed quarterly",
        save: isUSD
          ? `SAVE ${selectedPackage.quar_dol_discount || 0}%`
          : `SAVE ${selectedPackage.quar_aed_discount || 0}%`,
      },
      monthly: {
        price: getPrice(
          isUSD ? selectedPackage.mon_dol : selectedPackage.mon_aed,
          isUSD ? selectedPackage.mon_dol_discount : selectedPackage.mon_aed_discount
        ),
        total: getTotal(
          isUSD ? selectedPackage.mon_dol : selectedPackage.mon_aed,
          isUSD ? selectedPackage.mon_dol_discount : selectedPackage.mon_aed_discount,
          1
        ),
        label: "Billed monthly",
        save: isUSD
          ? `SAVE ${selectedPackage.mon_dol_discount || 0}%`
          : `SAVE ${selectedPackage.mon_aed_discount || 0}%`,
      },
    };

    setPlans(newPlans);
  }, [currencyCheck, getPrice, getTotal]);

  const getPackageData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://manypixel.innovationpixel.com/packages_api");
      if (response.data.data) {
        setPackages(response.data.data);
        const initialPackage = response.data.data[0];
        setSelectedPackage(initialPackage);
        makeData(initialPackage);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to get package!");
    } finally {
      setLoading(false);
    }
  }, [makeData]);

  useEffect(() => {
    getPackageData();
  }, [getPackageData]);

  useEffect(() => {
    makeData(selectedPackage);
  }, [selectedPackage, billingCycle, makeData]);

  const contextValue = {
    packages,
    loading,
    selectedPackage,
    setSelectedPackage,
    billingCycle,
    setBillingCycle,
    plans,
    currency: currencyCheck() ? "USD" : "AED",
    isUSD: currencyCheck(),
    getPrice,
    getTotal,
  };

  return (
    <PricingContext.Provider value={contextValue}>
      {children}
    </PricingContext.Provider>
  );
};