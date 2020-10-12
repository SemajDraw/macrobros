import React from "react";
import Pagination from 'react-bootstrap/Pagination'

const PaginationBar = (props) => {

    let active = props.blogs.pageNumber;
    let items = [];
    props.blogs.previousPageNumber !== null ?
        items.push(<Pagination.Prev key={0} onClick={() => props.nextPage(props.blogs.previousPageNumber)}/>) :
        items.push(<Pagination.Prev key={0}/>);
    for (let i = 1; i <= props.blogs.totalPages; i++) {
        items.push(
            <Pagination.Item key={i} active={i === active} onClick={() => props.nextPage(i)}>{i}</Pagination.Item>
        );
    }
    props.blogs.nextPageNumber !== null ?
        items.push(<Pagination.Next key={-1} onClick={() => props.nextPage(props.blogs.nextPageNumber)}/>) :
        items.push(<Pagination.Next key={-1}/>);
    return items;
};

export default PaginationBar;