import Moment from "react-moment";
import { Link } from "react-router-dom";
import React from "react";
import { animated, useSprings } from 'react-spring';
import './ClappedBlogs.scss';
import Fade from "react-reveal/Fade";
import { formatPageHeading } from "../../../../utils/stringUtils";

export const ClappedBlogs = ({ blogs }) => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.02];
    const trans = (x, y, s) => `perspective(100px) scale(${ s })`;
    const [springs, set] = useSprings(blogs.length, () => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    let blogPostMarkup = blogs.map((blogPost, i) => {
        return (
            <animated.div key={ i }
                          className="blog-card card"
                          onMouseMove={ ({ clientX: x, clientY: y }) =>
                              set(index => {
                                  if (index !== i) return;
                                  return { xys: calc(x, y) };
                              })
                          }
                          onMouseLeave={ () => set({ xys: [0, 0, 1] }) }
                          style={ {
                              transform: springs[i].xys.interpolate(trans)
                          } }>
                <Link className='text-truncate stretched-link' to={ `/blog/${ blogPost.slug }` }>
                    <div className="card-body">
                        <h3 className="card-title title mb-0 text-dark">{ blogPost.title }</h3>
                        <div className="mb-1 text-muted">
                            <Moment format="MMM D, YYYY">{ blogPost.dateCreated }</Moment>
                        </div>
                        <strong className="d-inline-block mt-2 text-primary title">
                            { formatPageHeading(blogPost.category) }
                        </strong>
                    </div>
                </Link>
            </animated.div>
        );
    });

    let blogPostGrid = [];
    for (let i = 0; i < blogPostMarkup.length; i++) {
        blogPostGrid.push(
            <Fade key={ i } bottom cascade>
                <div className='row mb-3'>
                    <div className='col-md-12'>
                        { blogPostMarkup[i] }
                    </div>
                </div>
            </Fade>
        )
    }
    return blogPostGrid;
};

export default ClappedBlogs;