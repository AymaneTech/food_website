import Home from "./Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Cuisine} from "./Cuisine.jsx";
import {Searched} from "./Searched.jsx";
import {Recipe} from "./Recipe.jsx";

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cuisine/:type" element={<Cuisine/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/recipe/:name" element={<Recipe/>}/>
        </Routes>
    )
}

export default Pages
