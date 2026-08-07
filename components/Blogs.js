import { Fade } from "react-awesome-reveal";
import React from 'react'
import Link from "next/link";
import { featuredBlogPosts } from "../data/siteContent";

const Blogs = () => {

    return (
        <div>
            <div className="blog-area section-padding pt-0">
                <div className="container">
                    <div className="blog-wrap">
                        <div className="blog-top">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-top-img">
                                        <Link className="btn-style-1" href={'/blog'}>
                                            <span className='main-text'>Shopify Resources</span>
                                            <span className='hover-text'>Shopify Resources</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="blog-text">
                                        <h3>Original Shopify guides, ecommerce tutorials, app development notes, and case studies for merchants and founders.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center mt-none-30">
                            {featuredBlogPosts.map((blog, index) => (
                                <div className={"col-xl-4 col-lg-6 col-md-6 col-12 mt-30"} key={index}>
                                    <Fade direction="up" triggerOnce={false} duration={1000 + index * 200} delay={9}>
                                        <div className="blog-item">
                                            <div className="blog-img">
                                                <img src={blog.thumbnail} alt={blog.title} />
                                            </div>
                                            <div className="blog-content">
                                                <h2><Link href={`/blog/${blog.slug}`}>{blog.title}</Link></h2>
                                                <p>{blog.description}</p>
                                                <span>{blog.category}</span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
