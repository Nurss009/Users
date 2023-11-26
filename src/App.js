import React from "react";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import HomePages from "./Pags/Pages";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<HomePages/>}/>
            </Routes>
        </>
    )
}
export default App