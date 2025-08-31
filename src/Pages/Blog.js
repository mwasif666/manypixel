import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/Blog.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const Blog = () => {
  const [blogs, setBlogs] = useState([]); 
  const [loading, setLoading] = useState(true);

  const getBlogDetail = async () => {
    try {
      const response = await axios.get(
        `https://manypixel.innovationpixel.com/blogs-list-api`
      );
      if (response?.data?.data?.length > 0) {
        setBlogs(response.data.data); 
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
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return <div className={styles.notFound}>No blog posts found</div>;
  }

  const featuredBlog = blogs[0]; 
  const otherBlogs = blogs.slice(1); 
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
            {featuredBlog && (
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
                            <div className={styles.textSizeTiny}>
                              {featuredBlog.date}
                            </div>
                          </div>
                          <div className={styles.blogDate}>
                            <div className={styles.readtimeWrapper}>
                              <div className={styles.textSizeTiny}>
                                {featuredBlog.readTime
                                  ? featuredBlog.readTime.split(" ")[0]
                                  : "5"}
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
            )}

            <div className={styles.divider}></div>

            <div className={styles.blogHomeWrapper}>
              <div className={`row ${styles.twelveColGrid}`}>
                {otherBlogs.map((blog) => (
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
                          <div className={styles.readtimeWrapper}>
                            <div className={styles.textSizeTiny}>
                              {blog.readTime
                                ? blog.readTime.split(" ")[0]
                                : "5"}
                            </div>
                            <div className={styles.textSizeTiny}>min</div>
                          </div>
                        </div>
                      </div>
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
  