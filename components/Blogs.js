import { Fade } from "react-awesome-reveal";
import React from 'react'
import Link from "next/link";


const BlogArray = [
    {
        Id: '1',
        bImg:"/images/blog-1.jpg",
        title: 'How to build a product — a full guide to the product development process',
        subTitle: 'Development',
        description: 'Hard work and dedication of the Oru Studio team help our clients secure new successful investment deals.',
        duration: 1000,
    },
    {
        Id: '2',
        bImg:"/images/blog-2.jpg",
        title: 'How to build a product — a full guide to the product development process',
        subTitle: 'Web Design',
        description: 'Hard work and dedication of the Oru Studio team help our clients secure new successful investment deals.',
        duration: 1200,
    },
    {
        Id: '3',
        bImg:"/images/blog-3.jpg",
        title: 'How to build a product — a full guide to the product development process',
        subTitle: 'App Development',
        description: 'Hard work and dedication of the Oru Studio team help our clients secure new successful investment deals.',
        duration: 1400,
    }
]

const Blogs = () => {

    return (
        <div>
            <div className="blog-area section-padding">
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
                                        <h3>The Oru Studio blog is a treasure trove of our best technical tips and expert knowledge. Here you will discover all the valuable secrets and trends of the IT industry.</h3>
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
