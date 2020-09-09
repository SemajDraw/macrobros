import capitalizeFirstLetter from "../../../services/capitalizeFirstLetter";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import React from "react";
import './blogGridBuilder.scss';

export default (blogs) => {
    let blogPostMarkup = blogs.map((blogPost) => {
        return (
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary title">
                        {capitalizeFirstLetter(blogPost.category)}
                    </strong>
                    <h3 className="title mb-0 text-dark">
                        {blogPost.title}
                    </h3>
                    <div className="mb-1 text-muted">
                        <Moment format="Do MMMM YYYY">{blogPost.dateCreated}</Moment>
                    </div>
                    <p className="excerpt card-text mb-auto">{blogPost.excerpt}</p>
                    <Link className='text-truncate stretched-link' to={`/blog/${blogPost.slug}`}>Continue reading</Link>
                </div>
                <div className='image-container'>
                    <img width='200px' height='250px' className="card-img-right flex-auto d-none d-md-block"
                         src={blogPost.thumbnail} alt=":)"/>
                </div>
            </div>
        );
    });
    let blogPostGrid = [];
    for (let i = 0; i < blogPostMarkup.length; i += 2) {
        blogPostGrid.push(
            <div key={i} className='row mb-2'>
                <div className='col-md-6'>
                    {blogPostMarkup[i]}
                </div>
                <div className='col-md-6'>
                    {blogPostMarkup[i + 1] ? blogPostMarkup[i + 1] : null}
                </div>
            </div>
        )
    }
    return blogPostGrid;
}