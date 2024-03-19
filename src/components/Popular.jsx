import {useEffect, useState} from "react";
import "@splidejs/splide/dist/css/splide.min.css"
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Card, Gradient, Wrapper} from "./Style.jsx";
import {Link} from "react-router-dom";

export const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);
    const getPopular = async () => {
        let check = localStorage.getItem("popular");
        if (!check) {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=20f6e5d8fa4a472c8a26388757f8ba70 &number=9`);
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            check = data.recipes;
        }
        setPopular(JSON.parse(check));
    }


    return (<>
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4, arrows: false, pagination: false, drag: "free", gap: "5rem"
            }}>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card key={recipe.id}>
                                <Link to={"recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradient/>
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}

            </Splide>
        </Wrapper>
    </>)
}

export default Popular