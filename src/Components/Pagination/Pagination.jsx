import React from "react";
import cl from "./Pagination.module.css";

const Pagination = ({ itemsPerPage, onPaginate, currentPage, totalPages }) => {
    const pagesNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
        pagesNumbers.push(i);
    }

    return (
        <div className={cl.pagination}>
            <ul className={cl.pageNumbers}>
                {pagesNumbers.map(number => (
                    <li className={cl.pageItem} key={number}>
                        <a className={cl.pageLink} onClick={() => onPaginate(number)} href="!#">{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;