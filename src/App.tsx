import React, {useState} from 'react';
import './App.css';
import {Home} from "./pages/Home/Home";
import {Search} from "./pages/Search/Search";
import {BrowserRouter, Route} from "react-router-dom";
import {Result} from "./models/Result";

export const ResultContext = React.createContext({});

function App() {
    const [result, setResult] = useState<Result[]>([]);
    const changeResult = (results : Result[]) => {
        setResult(results)
    }
    return (
        <ResultContext.Provider value={{result, changeResult}}>
            <div className="App">
                <BrowserRouter>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/search'} exact component={Search}/>
                </BrowserRouter>
            </div>
        </ResultContext.Provider>
    );
}

export default App;
