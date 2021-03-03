import "./style.scss"
import {SearchInputComponent} from "../../components/Search/Input/SearchInputComponent";
import {SearchButtonComponent} from "../../components/Search/Button/SearchButtonComponent";
import {SearchItemListComponent} from "../../components/Search/ItemList/SearchItemListComponent";
import {Link, Redirect} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {ResultContext} from "../../App";

export const Search = () => {
    const perPage = 5;
    const {result, changeResult}: any = useContext(ResultContext);
    const [showResult, setShowResult] = useState<any>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);
    const handleChangePage = (page: number) => {
        setCurrentPage(page)
    }

    const orderBy = (type: string, typeName: string) => {
        changeResult(result.sort(function (a: any, b: any) {
            if (type === "na" || type === "ya") {
                if (a[typeName] < b[typeName]) {
                    return -1;
                }
                if (a[typeName] > b[typeName]) {
                    return 1;
                }

            } else if (type === "nd" || type === "yd") {
                if (a[typeName] < b[typeName]) {
                    return -1;
                }
                if (a[typeName] > b[typeName]) {
                    return 1;
                }
            }

            return 0;
        }))
        setShowResult(result.slice((currentPage - 1) * perPage, ((currentPage - 1) * perPage) + perPage));
    }

    useEffect(() => {
        setShowResult(result.slice((currentPage - 1) * perPage, ((currentPage - 1) * perPage) + perPage));
        setTotalPage(Math.ceil(result.length / perPage))
    }, [currentPage, result]);

    if (result.length === 0) {
        return <Redirect to="/"/>
    }

    return (
        <div className="single">
            <div className="sections">
                <div className="left-section">
                    <div className="logo">
                        <Link to="/">
                            <img alt="logo" className="logo-image" src="./logo.jpg"/>
                        </Link>
                    </div>
                </div>
                <div className="right-section">
                    <div className="content">
                        <SearchInputComponent changeText={() => {
                            console.log('asd')
                        }}/>
                    </div>
                    <SearchButtonComponent/>
                </div>
            </div>
            <div className="list">
                <div className="order-by">
                    <div className="icon">
                        <img src="./orderby.png" alt=""/>
                    </div>
                    <div className="text">
                        Order By

                        <div className="orderby-type">
                            <ul>
                                <li onClick={() => {
                                    orderBy("na", "title")
                                }}>Name Ascending
                                </li>
                                <li onClick={() => {
                                    orderBy("nd", "title")
                                }}>Name Descending
                                </li>
                                <li onClick={() => {
                                    orderBy("ya", "createdAt")
                                }}>Year Ascending
                                </li>
                                <li onClick={() => {
                                    orderBy("yd", "createdAt")
                                }}>Year Descending
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <SearchItemListComponent setCurrentPage={handleChangePage} perPage={perPage} showResult={showResult}
                                         currentPage={currentPage} totalPage={totalPage}/>
            </div>
        </div>
    )
};