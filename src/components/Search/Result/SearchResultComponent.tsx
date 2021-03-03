import "./style.scss";
import {SearchItemComponent} from "../Item/SearchItemComponent";
import {Result} from "../../../models/Result";
import React from "react";
interface Prop {
    results: Result[]
}

export const SearchResultComponent:React.FC<Prop> = ({results}) => {
    return (
        <div className="search-result">
            {results.map((item:Result) => {
                return  <SearchItemComponent item={item} key={item.id}/>
            })}
        </div>
    )
}