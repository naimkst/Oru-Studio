import { Fade } from "react-awesome-reveal";
import React from 'react'
import Link from "next/link";


const BlogArray = [
    {
        Id: '1',
        bImg:"/images/blog-1.jpg",
        title: 'How to Build a Product: A Complete Guide to the Development Process',
        subTitle: 'Development',
        description: 'Hard work and dedication of the Oru Studio team help our clients secure new successful investment deals.',
        duration: 1000,
    },
    {
        Id: '2',
        bImg:"/images/blog-2.jpg",
        title: 'The Ultimate Guide to Building a Product: Step-by-Step Through the Development Process',
        subTitle: 'Web Design',
        description: 'The hard work and dedication of the Oru Studio team enable clients to secure successful new investments..',
        duration: 1200,
    },
    {
        Id: '3',
        bImg:"/images/blog-3.jpg",
        title: 'Building a Product: A Comprehensive Walkthrough of the Development Journey',
        subTitle: 'App Development',
        description: 'This guide takes you step-by-step through the entire product development process, from initial concept to launch',
        duration: 1400,
    }
]

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
                                        <Link className="btn-style-1" href={'/'}>
                                            <span className='main-text'>Latest News</span>
                                            <span className='hover-text'>Latest News</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="blog-text">
                                        <h3>The Oru Studio blog shares expert tips, industry trends, and valuable technical knowledge for you.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center mt-none-30">
                            {BlogArray.map((blog, index) => (
                                <div className={"col-xl-4 col-lg-6 col-md-6 col-12 mt-30"} key={index}>
                                    <Fade direction="up" triggerOnce="false" duration={blog.duration} delay={9}>
                                        <div className="blog-item">
                                            <div className="blog-img">
                                                <img src={blog.bImg} alt="" />
                                            </div>
                                            <div className="blog-content">
                                                <h2><Link href={'/'}>{blog.title}</Link></h2>
                                                <p>{blog.description}</p>
                                                <span>{blog.subTitle}</span>
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
