import capitalizeFirstLetter from "../../../../services/formatHeader";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import React from "react";
import './BlogGridBuilder.scss';
import Fade from 'react-reveal/Fade';
import {useSprings, animated} from 'react-spring';

export const BlogGridBuilder = ({blogs}) => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.02];
    const trans = (x, y, s) => `perspective(100px) scale(${s})`;
    const [springs, set] = useSprings(blogs.length, () => ({
        xys: [0, 0, 1],
        config: {mass: 5, tension: 350, friction: 40}
    }));


    let blogPostMarkup = blogs.map((blogPost, i) => {
        return (
            <animated.div key={i}
                          className="blog-card card mb-5"
                          onMouseMove={({clientX: x, clientY: y}) =>
                              set(index => {
                                  if (index !== i) return;
                                  return {xys: calc(x, y)};
                              })
                          }
                          onMouseLeave={() => set({xys: [0, 0, 1]})}
                          style={{
                              transform: springs[i].xys.interpolate(trans)
                          }}>
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
            </animated.div>
        );
    });
    let blogPostGrid = [];
    for (let i = 0; i < blogPostMarkup.length; i += 2) {
        blogPostGrid.push(
            <Fade key={i} bottom cascade>
                <div className='row mb-2'>
                    <div className='col-md-6'>
                        {blogPostMarkup[i]}
                    </div>
                    <div className='col-md-6'>
                        {blogPostMarkup[i + 1] ? blogPostMarkup[i + 1] : null}
                    </div>
                </div>
            </Fade>
        )
    }
    return blogPostGrid;
};

export default BlogGridBuilder;