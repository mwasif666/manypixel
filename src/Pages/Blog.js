import React from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredBlog = {
    id: 1,
    title: "The Best Social Media Design Tools to Use in 2025",
    description:
      "Whether you're a seasoned designer, or complete rookie - these social media design tools will have you creating stunning graphics in minutes!",
    category: "Social media design",
    date: "May 25, 2025",
    readTime: "9 min",
    image:
      "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/65bbd4f925237f2caeb9a4f2_b9tfY9LSJCC1VILhto3Q.avif",
  };

  const blogs = [
    {
      id: 2,
      title: "Web Design vs Graphic Design: What Makes Them Different?",
      category: "Web design",
      date: "July 20, 2025",
      readTime: "5 min",
      image:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/687cab7f38a7f95e58273b81_LA25.46%20(2).jpg",
      longDescription:
        "In this comprehensive guide, we explore the key differences between web design and graphic design. Web design focuses on creating functional, interactive experiences for websites and apps, while graphic design is more about visual communication through static images. We'll cover the different skill sets required, tools used, and career paths for each discipline. You'll learn when you need a web designer versus a graphic designer for your projects.",
    },
    {
      id: 3,
      title: "The 30 Most Popular Fonts in Graphic Design",
      category: "Brand Design",
      date: "July 9, 2025",
      readTime: "8 min",
      image:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b06f327f40b748e9e73a_648f16bdcf6680e8f94ad9ff_GuMD7dy6T8yxmutaGcyl.avif",
      longDescription:
        "Typography is a crucial element in design, and choosing the right font can make or break your project. In this article, we showcase the 30 most popular fonts used by professional graphic designers today. From timeless classics like Helvetica and Garamond to modern favorites like Montserrat and Poppins, we'll explain the characteristics of each font, their best use cases, and how to pair them effectively. Plus, we'll share tips on font licensing and where to download these fonts legally.",
    },
    {
      id: 4,
      title: "20 Iconic Product Design Examples",
      category: "Product design",
      date: "July 8, 2025",
      readTime: "10 min",
      image:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b15f9e6814146495c051_SqbKkwDZQu2TB2XwPxRI.avif",
      longDescription:
        "Great product design combines aesthetics, functionality, and user experience. In this inspiring collection, we present 20 iconic product designs that have stood the test of time. From the revolutionary iPhone to the classic Coca-Cola bottle, these designs have influenced generations of designers. For each product, we analyze what makes it special, the design principles behind it, and lessons you can apply to your own design work. Whether you're a product designer or just appreciate good design, this article will give you new appreciation for everyday objects.",
    },
  ];

  return (
    <div className={styles.blogHome}>
      <div className={`container-lg ${styles.paddingGlobal}`}>
        <div className={styles.scopeDec1}></div>
        <div className={styles.scopeDec2}></div>
        <div className={styles.scopeDec3}></div>
        <div className={styles.scopeDec4}></div>
        <div className={styles.paddingSectionBlogHome}>
          <div className={styles.blogHomeComponent}>
            <div className={styles.workPageHeadingWrapper}>
              <h1>The ManyPixels Design Blog</h1>
              <p className={styles.textSizeLarge}>
                Stay in the loop with the latest tips and trends on graphic
                design and digital marketing
              </p>
            </div>

            {/* Featured Blog */}
            <div className={styles.blogList}>
              <div className={styles.blogItem}>
                <Link
                  to={`/blog/${featuredBlog.id}`}
                  className={styles.blogHomeLink}
                >
                  <div className={`row ${styles.twelveColGrid}`}>
                    <div className={`col-md-6 ${styles.blogHomeItemHover}`}>
                      <img
                        src={featuredBlog.image}
                        loading="lazy"
                        alt={featuredBlog.title}
                        className={styles.blogCatThumbImage}
                      />
                      <div className={styles.blogHomeDecText}>READ BLOG</div>
                      <div className={styles.blogHomeGrad}></div>
                    </div>
                    <div
                      className={`col-md-6 ${styles.blogHomeFeaturesTextWrapper}`}
                    >
                      <h1>{featuredBlog.title}</h1>
                      <p
                        className={`${styles.textSizeSmall} ${styles.textColorGrey}`}
                      >
                        {featuredBlog.description}
                      </p>
                      <div className={styles.blogHomeFeaturesBottom}>
                        <div className={styles.tag}>
                          {featuredBlog.category}
                        </div>
                        <div className={styles.blogDate}>
                          <img
                            src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647dbf24a198882745119e42_Group%204833.svg"
                            loading="lazy"
                            alt=""
                            className={styles.blogHomeIcon}
                          />
                          <div className={styles.textSizeTiny}>
                            {featuredBlog.date}
                          </div>
                        </div>
                        <div className={styles.blogDate}>
                          <img
                            src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64a5f934a4914750bdf90e3b_arrow%20(1).svg"
                            loading="lazy"
                            alt=""
                            className={styles.blogHomeIcon}
                          />
                          <div className={styles.readtimeWrapper}>
                            <div className={styles.textSizeTiny}>
                              {featuredBlog.readTime.split(" ")[0]}
                            </div>
                            <div className={styles.textSizeTiny}>min</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className={styles.divider}></div>

            {/* Blog Grid */}
            <div className={styles.blogHomeWrapper}>
              <div className={`row ${styles.twelveColGrid}`}>
                {blogs.map((blog) => (
                  <div key={blog.id} className="col-md-4 mb-4">
                    <Link
                      to={`/blog/${blog.id}`}
                      className={styles.blogHomeItem}
                    >
                      <div className={styles.blogHomeItemHover}>
                        <img
                          src={blog.image}
                          loading="lazy"
                          alt={blog.title}
                          className={styles.blogHomeItemThumb}
                        />
                        <div className={styles.blogHomeDecText}>READ BLOG</div>
                        <div className={styles.blogHomeGrad}></div>
                      </div>
                      <h2 className={styles.headingStyleH5}>{blog.title}</h2>
                      <div className={styles.blogBottom}>
                        <div className={styles.tag}>{blog.category}</div>
                        <div className={styles.blogDate}>
                          <img
                            src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64a5f934a4914750bdf90e3b_arrow%20(1).svg"
                            loading="lazy"
                            alt=""
                            className={styles.blogHomeIcon}
                          />
                          <div className={styles.readtimeWrapper}>
                            <div className={styles.textSizeTiny}>
                              {blog.readTime.split(" ")[0]}
                            </div>
                            <div className={styles.textSizeTiny}>min</div>
                          </div>
                        </div>
                      </div>
                      {/* <div className={styles.blogRank}>{blog.date}</div> */}
                    </Link>
                  </div>
                ))}
              </div>

              <div className={styles.pagination}>
                <button
                  className={`btn ${styles.button} ${styles.isSecondary} ${styles.pag}`}
                >
                  VIEW more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
