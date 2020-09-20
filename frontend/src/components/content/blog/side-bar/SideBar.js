import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons/faAngleDown";
import './SideBar.scss';
import SearchBar from "./SearchBar";

export class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/blog/search/${this.state.searchValue}`);
    }

    render() {
        return (
            <>
                <SearchBar history={this.props.history}/>

                <div className="col-12 px-0">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="categories-dropdown list-group-item list-group-item-action drop d-flex justify-content-between  my-auto align-items-center"
                           id="list-home-list"
                           data-toggle="collapse" href="#collapseCategories"
                           aria-expanded="false" aria-controls="collapseCategories">
                            Categories
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </a>
                        <div className="collapse" id="collapseCategories" aria-labelledby="collapseCategories">
                            <Link className='list-group-item list-group-item-action p-s text-muted'
                                  to='/blog/category/crypto'>Crypto</Link>
                            <Link className='list-group-item list-group-item-action p-s text-muted'
                                  to='/blog/category/macro'>Macro</Link>
                            <Link className='list-group-item list-group-item-action p-s text-muted'
                                  to='/blog/category/precious-metals'>Precious Metals</Link>
                            <Link className='list-group-item list-group-item-action p-s text-muted'
                                  to='/blog/category/wealth-cycles'>Wealth Cycles</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 px-0 mt-1'>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default SideBar;