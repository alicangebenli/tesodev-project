import "./style.scss";
import {Result} from "../../../models/Result";
import React from "react";
interface Props {
    item: Result
}


export const SearchItemComponent: React.FC<Props> = ({item}) => {
    return (
        <div className="search-item" id={item.id}>
            <div className="text">
                <div className="title">
                    {item.title}
                </div>
                <div className="user">
                    {item.name} - <span className="date">{item.createdAt}</span>
                </div>
            </div>
        </div>
    )
}