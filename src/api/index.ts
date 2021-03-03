import axios from "axios";
import {Result} from "../models/Result";

export const results = async (text: string): Promise<Array<any>> => {
    let data = await (await axios.get('data.json')).data;
    let result = [];

    for (let i = 0; i < text.length; i++) {
        let searchData = data;

        if (result.length > 0) {
            searchData = result;
        }

        result = searchData.filter((item: Result) => {
            if (item.title[i] !== null && item.title[i] !== undefined) {
                return item.title[i].toLowerCase() === text[i].toLowerCase()
            }
            return false;
        })
    }

    return result;
};
