import capitalizeFirstLetter from "../../../../services/capitalizeFirstLetter";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import React from "react";
import './blogGridBuilder.scss';

export default (blogs) => {
    let blogPostMarkup = blogs.map((blogPost) => {
        return (
            <div className="card mb-5">
                <img className="card-img-top" src={blogPost.thumbnail} alt={blogPost.thumbnailAlt}/>
                <div className="card-body">
                    <strong className="d-inline-block mb-2 text-primary title">
                        {capitalizeFirstLetter(blogPost.category)}
                    </strong>
                    <h3 className="card-title title mb-0 text-dark">{blogPost.title}</h3>
                    <div className="mb-1 text-muted">
                        <Moment format="Do MMMM YYYY">{blogPost.dateCreated}</Moment>
                    </div>
                    <p className="excerpt card-text mb-3">{blogPost.excerpt}</p>
                    <Link className='text-truncate stretched-link' to={`/blog/${blogPost.slug}`}>Continue
                        reading...</Link>
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