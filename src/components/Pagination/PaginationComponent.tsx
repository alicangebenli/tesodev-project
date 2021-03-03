import './style.scss';
import {useState} from "react";
export type pageType = {
    current: number,
    total: number
}
interface Prop {
    data: pageType,
    changePage: (page: number) => void
}

export const PaginationComponent: React.FC<Prop> = ({data, changePage}) => {
    const [currentPage, setCurrentPage] = useState(data.current);
    const handleChangePage = (i: number) => {
        if (i === 0) {
            i = 1;

            if (currentPage === 1) {
                i = data.total;
            }
        }


        changePage(i);
        setCurrentPage(i);
    }

    const pageList = [];

    for (let i = 1; i <= data.total; i++) {
        pageList.push(<button key={i} className={i === currentPage ? "pagination-list-item current" : "pagination-list-item"} onClick={() => {
            handleChangePage(i)
        }}>{i}</button>)
    }

    return (
        <div className="pagination">
            <div className="pagination-list">
                <a className="pagination-list-item next" onClick={() => {
                    handleChangePage((currentPage - 1 + data.total) % data.total)
                }}>Previous</a>

                {pageList}

                <a className="pagination-list-item next" onClick={() => {
                    handleChangePage((currentPage + 1) % data.total);
                }}>Next</a>
            </div>
        </div>
    )
}