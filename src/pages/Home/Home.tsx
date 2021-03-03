import React, {useContext, useEffect, useState} from "react";
import "./style.scss";
import {SearchInputComponent} from "../../components/Search/Input/SearchInputComponent";
import {SearchResultComponent} from "../../components/Search/Result/SearchResultComponent";
import {SearchButtonComponent} from "../../components/Search/Button/SearchButtonComponent";
import * as api from "../../api/index"
import {Link} from "react-router-dom";
import {ResultContext} from "../../App";
import {Result} from "../../models/Result";

export const Home = () => {
    const {changeResult}: any = useContext(ResultContext);
    const [showResult, setShowResult] = useState<Result[]>([])
    const [searchResultVisibility, setSearchResultVisibility] = useState(false)
    const handleChangeText = async (text: string) => {
        let res = await api.results(text);
        changeResult(res);
        setShowResult(res.slice(0, 3));
    }

    useEffect(() => {
        if (showResult.length !== 0) {
            setSearchResultVisibility(true);
        } else {
            setSearchResultVisibility(false);
        }
    }, [showResult]);

    useEffect(() => {
        setSearchResultVisibility(false)
    }, []);

    return (
        <div className="home">
            <div className="sections">
                <div className="left-section">
                    <div className="logo">
                        <img alt="logo" className="logo-image" src="./logo.jpg"/>
                    </div>
                    <SearchInputComponent changeText={handleChangeText}/>
                </div>
                <div className="right-section">
                    <SearchButtonComponent/>
                </div>
            </div>

            <div className="list" style={{visibility: searchResultVisibility ? "visible" : "hidden"}}>
                <SearchResultComponent results={showResult}/>
                <Link to="/search" className={"show-more"}>
                    Show More
                </Link>
            </div>
        </div>
    )
}