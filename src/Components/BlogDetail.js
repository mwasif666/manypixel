import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./BlogDetail.module.css";

const BlogDetail = () => {
  // In a real app, you would fetch this data from an API based on the ID
  const blogPosts = {
    1: {
      id: 1,
      title: "The Best Social Media Design Tools to Use in 2025",
      category: "Social media design",
      date: "May 25, 2025",
      readTime: "9 min",
      image:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/65bbd4f925237f2caeb9a4f2_b9tfY9LSJCC1VILhto3Q.avif",
      longDescription: `
        <p>In the ever-evolving world of social media, having the right design tools can make all the difference in creating engaging content that stands out. As we move through 2025, several tools have emerged as essential for social media designers and marketers alike.</p>
        
        <h3>1. Canva Pro</h3>
        <p>Canva continues to dominate with its user-friendly interface and vast template library. The 2025 version includes AI-powered design suggestions and automated resizing for different platforms.</p>
        
        <h3>2. Adobe Express</h3>
        <p>Adobe's answer to quick social media design now includes seamless integration with Creative Cloud assets and advanced animation features previously only available in After Effects.</p>
        
        <h3>3. Figma for Teams</h3>
        <p>While traditionally a UI/UX tool, Figma's collaborative features make it perfect for social media teams working remotely. New template kits specifically for social posts have been added.</p>
        
        <h3>4. VistaCreate</h3>
        <p>This underdog has gained popularity with its unique AI background generator and smart cropping tools that automatically optimize images for each social platform.</p>
        
        <p>When choosing tools, consider your team's skill level, the volume of content you produce, and whether you need advanced features like animation or team collaboration. Many of these tools offer free versions or trials, so experiment to find what works best for your workflow.</p>
      `,
    },
    2: {
      id: 2,
      title: "Web Design vs Graphic Design: What Makes Them Different?",
      category: "Web design",
      date: "July 20, 2025",
      readTime: "5 min",
      image:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/687cab7f38a7f95e58273b81_LA25.46%20(2).jpg",
      longDescription: `
        <p>While web design and graphic design share some similarities, they serve different purposes and require different skill sets. Understanding these differences is crucial when planning your design projects or career path.</p>
        
        <h3>Key Differences</h3>
        <p><strong>Medium:</strong> Graphic design typically creates static visuals (logos, posters, print ads), while web design creates interactive digital experiences.</p>
        <p><strong>Tools:</strong> Graphic designers often use Photoshop and Illustrator, while web designers work with code editors and prototyping tools like Figma.</p>
        <p><strong>Skills:</strong> Web designers need understanding of HTML/CSS, UX principles, and responsive design. Graphic designers focus more on typography, color theory, and composition.</p>
        
        <h3>When You Need Each</h3>
        <p>Choose a graphic designer when you need:</p>
        <ul>
          <li>Brand identity (logo, business cards)</li>
          <li>Print materials (brochures, packaging)</li>
          <li>Static social media graphics</li>
        </ul>
        
        <p>Choose a web designer when you need:</p>
        <ul>
          <li>Website or web application</li>
          <li>Interactive elements</li>
          <li>User flows and navigation</li>
        </ul>
        
        <p>Many designers today develop skills in both areas, creating a hybrid "digital designer" role that's increasingly in demand.</p>
      `,
    },
    3: {
      id: 3,
      title: "The 30 Most Popular Fonts in Graphic Design",
      category: "Brand Design",
      date: "July 9, 2025",
      readTime: "8 min",
      image:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b06f327f40b748e9e73a_648f16bdcf6680e8f94ad9ff_GuMD7dy6T8yxmutaGcyl.avif",
      longDescription: `
        <p>Typography is a powerful design element that can convey mood, establish hierarchy, and reinforce brand identity. Here are the 30 fonts that professional designers are using most in 2025:</p>
        
        <h3>Classic Serifs</h3>
        <ol>
          <li><strong>Garamond</strong> - Timeless elegance for print</li>
          <li><strong>Baskerville</strong> - High-contrast transitional serif</li>
          <li><strong>Didot</strong> - Luxury and fashion brands</li>
        </ol>
        
        <h3>Modern Sans-Serifs</h3>
        <ol start="4">
          <li><strong>Helvetica Now</strong> - The updated classic</li>
          <li><strong>Inter</strong> - The open-source favorite</li>
          <li><strong>Neue Haas Grotesk</strong> - Helvetica's predecessor</li>
        </ol>
        
        <h3>Display Fonts</h3>
        <ol start="20">
          <li><strong>GT Super</strong> - Editorial elegance</li>
          <li><strong>Whyte Inktrap</strong> - Friendly tech vibe</li>
          <li><strong>Degular</strong> - Geometric and versatile</li>
        </ol>
        
        <p>When selecting fonts, consider:</p>
        <ul>
          <li>Legibility at different sizes</li>
          <li>Language support if needed</li>
          <li>Licensing restrictions</li>
          <li>How it pairs with your other brand fonts</li>
        </ul>
        
        <p>Many of these fonts are available through Adobe Fonts, Google Fonts, or direct from foundries. Always check licensing before using commercial fonts in client work.</p>
      `,
    },
    4: {
      id: 4,
      title: "20 Iconic Product Design Examples",
      category: "Product design",
      date: "July 8, 2025",
      readTime: "10 min",
      image:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b15f9e6814146495c051_SqbKkwDZQu2TB2XwPxRI.avif",
      longDescription: `
        <p>Great product design balances form and function to create objects that are both beautiful and practical. These 20 iconic designs have influenced generations of designers:</p>
        
        <h3>Technology</h3>
        <ol>
          <li><strong>iPhone (2007)</strong> - Revolutionized smartphone design</li>
          <li><strong>Braun T3 Radio (1958)</strong> - Dieter Rams' minimalist classic</li>
          <li><strong>Dyson Airblade (2006)</strong> - Innovative hand dryer</li>
        </ol>
        
        <h3>Furniture</h3>
        <ol start="10">
          <li><strong>Eames Lounge Chair (1956)</strong> - Mid-century modern icon</li>
          <li><strong>PH Artichoke Lamp (1958)</strong> - Sculptural lighting</li>
          <li><strong>Barcelona Chair (1929)</strong> - Timeless elegance</li>
        </ol>
        
        <h3>Everyday Objects</h3>
        <ol start="16">
          <li><strong>Paper Clip (1899)</strong> - Simple perfection</li>
          <li><strong>Zippo Lighter (1932)</strong> - Durable and distinctive</li>
          <li><strong>Swiss Army Knife (1891)</strong> - Multi-functional design</li>
        </ol>
        
        <p>What makes these designs special:</p>
        <ul>
          <li>They solve problems elegantly</li>
          <li>Their forms follow their functions</li>
          <li>They stand the test of time</li>
          <li>Many use sustainable materials</li>
        </ul>
        
        <p>When designing products today, consider how your work might achieve similar longevity and impact. Focus on user needs first, and let beauty emerge from functionality.</p>
      `,
    },
  };

  const { id } = useParams();
  const blog = blogPosts[id];

  if (!blog) {
    return <div className={styles.notFound}>Blog post not found</div>;
  }

  return (
    <div className={styles.blogDetail}>
      <div className={`container ${styles.blogContainer}`}>
        <Link to="/blog" className={styles.backButton}>
          ← Back to Blog
        </Link>

        <div className={styles.blogHeader}>
          <div className={styles.blogMeta}>
            <span className={styles.blogCategory}>{blog.category}</span>
            <span className={styles.blogDate}>{blog.date}</span>
            <span className={styles.readTime}>{blog.readTime} read</span>
          </div>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
        </div>

        <div className={styles.blogImageContainer}>
          <img src={blog.image} alt={blog.title} className={styles.blogImage} />
        </div>

        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: blog.longDescription }}
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
