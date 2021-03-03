import React from "react";
import "./style.scss";
interface Prop {
    changeText: (page: string) => void
}

export const SearchInputComponent:React.FC<Prop> = ({changeText}) => {
    const changedData = (e:React.ChangeEvent<HTMLInputElement>) => {
        changeText(e.target.value);
    }
    return (
        <div className="search">
            <input type="text" className="search-input" onChange={changedData} placeholder="Search anything"/>
        </div>
    )
}