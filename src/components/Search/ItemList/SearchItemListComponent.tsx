import "./style.scss";
import {SearchItemComponent} from "../Item/SearchItemComponent"
import {PaginationComponent} from "../../Pagination/PaginationComponent";
import React from "react";
import {Result} from "../../../models/Result";

interface Props {
    perPage: number,
    showResult: Result[],
    currentPage: number,
    totalPage: number,
    setCurrentPage: (page: number) => void
}

export const SearchItemListComponent: React.FC<Props> = ({perPage, showResult, currentPage, totalPage, setCurrentPage}) => {
    const handleChangePage = (page: number) => {
        setCurrentPage(page)
    }
    return (
        <div className="search-item-list">
            {showResult.map((item: Result) => {
                return <SearchItemComponent item={item} key={item.id}/>
            })}
            <PaginationComponent data={{current: currentPage, total: totalPage}} changePage={handleChangePage}/>
        </div>
    )
}