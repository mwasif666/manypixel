import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./BlogDetail.module.css";
import axios from "axios";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    url: "",
    category: "",
    short_description: "",
    long_description: "",
    encoded_name: "",
    created_at: "",
    image_alt_text: "",
    meta_title: "",
    meta_description: "",
    id: "",
    comments: [],
    tags: [],
    sub_category: "",
  });
  const [loading, setLoading] = useState(true);

  const getBlogDetail = async () => {
    try {
      const response = await axios.get(
        `https://manypixel.innovationpixel.com/blogs-list-api/${slug}`
      );
      if (response?.data?.data?.[0]) {
        const blogData = response.data.data[0];
        setBlog({
          title: blogData.title || "",
          url: blogData.url || "",
          short_description: blogData.short_description || "",
          long_description:
            blogData.long_description || blogData.short_description || "",
          encoded_name: blogData.encoded_name || "",
          created_at: blogData.created_at || "",
          image_alt_text: blogData.image_alt_text || "",
          meta_title: blogData.meta_title || "",
          meta_description: blogData.meta_description || "",
          id: blogData.id || "",
          comments: blogData.comments || [],
          tags: blogData.tags || [],
          sub_category: blogData.sub_category || "",
          category: blogData.category || "",
        });
      }
    } catch (error) {
      toast.error("Failed to fetch blog details. Please try again.");
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [slug]);

  if (!blog) {
    return <div className={styles.notFound}>Blog post not found</div>;
  }

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.blogDetail}>
      <div className={`container ${styles.blogContainer}`}>
        <Link to="/blog" className={styles.backButton}>
          ← Back to Blog
        </Link>

        <div className={styles.blogHeader}>
          <div className={styles.blogMeta}>
            <span className={styles.blogCategory}>
              {blog.category.toLocaleUpperCase()}
            </span>
            <span className={styles.blogDate}>{blog.date}</span>
            <span className={styles.readTime}>{blog.readTime} read</span>
          </div>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
        </div>

        <div className={styles.blogImageContainer}>
          <img
            src={`https://manypixel.innovationpixel.com/storage/app/public/blogs/${blog.encoded_name}`}
            alt={blog.image_alt_text}
            className={styles.blogImage}
          />
        </div>

        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: blog.long_description }}
        />

        <div className={styles.blogFooter}>
          <Link to="/" className={styles.backButton}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
