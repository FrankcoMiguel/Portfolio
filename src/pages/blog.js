import React from 'react'
import Layout from '../components/Layout'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ProfilePicture from '../images/profile-picture.svg'
import BlogCard from '../components/BlogCard'
import '../styles/blog.scss'

import FirstBlogBackground from '../images/first-blog-background.png'
import SecondBlogBackground from '../images/second-blog-background.png'
import ThirdBlogBackground from '../images/third-blog-background.png'
import FourthBlogBackground from '../images/fourth-blog-background.png'
import FifthBlogBackground from '../images/fifth-blog-background.png'
import SixthBlogBackground from '../images/sixth-blog-background.png'




export default function About() {
    return (
        <Layout>
            <div className="BlogContainer">
                <div>
                    <h1 className="BlogTitle">Latest posts</h1>
                    <ul className="BlogTags">
                        <li className="BlogTag">javascript</li>
                        <li className="BlogTag">sass</li>
                        <li className="BlogTag">oracle apex</li>
                        <li className="BlogTag">android</li>
                        <li className="BlogTag">sql</li>    
                    </ul>
                </div>
                <Row className="BlogList">
                    <BlogCard background={FirstBlogBackground} title="Lorem ipsum" paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
                    <BlogCard background={SecondBlogBackground} title="Lorem ipsum" paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
                    <BlogCard background={ThirdBlogBackground} title="Lorem ipsum" paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
                    <BlogCard background={FourthBlogBackground} title="Lorem ipsum" paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
                    <BlogCard background={FifthBlogBackground} title="Lorem ipsum" paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
                    <BlogCard background={SixthBlogBackground} title="Lorem ipsum" paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
                </Row>
                <Row className="BlogPagination">
                    <ul className="PaginationList">
                        <li className="PaginationSelected">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>

                    <ul className="PaginationControls">
                        <li className="PaginationButton"><span className="Previous"></span></li>
                        <li className="PaginationButton"><span className="Next"></span></li>
                    </ul>
                    
                </Row>
            </div>
        </Layout>
    )
}