import {Card, Gradient, Wrapper} from "./Style.jsx";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Veggie = () => {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);
    const getVeggie = async () => {
        let check = localStorage.getItem("veggie");
        if (!check) {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=20f6e5d8fa4a472c8a26388757f8ba70&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            check = data.recipes;
        }
        setVeggie(JSON.parse(check));
    }

    return (<>
        <Wrapper>
            <h3>Popular Veggies</h3>
            <Splide options={{
                perPage: 3, arrows: false, pagination: false, drag: "free", gap: "5rem"
            }}>
                {veggie.map((recipe) => {
                    return (<SplideSlide key={recipe.id}>
                        <Card key={recipe.id}>
                            <Link to={"/recipe/" + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}/>
                                <Gradient/>
                            </Link>
                        </Card>
                    </SplideSlide>)
                })}
            </Splide>
        </Wrapper>
    </>)
}
export default Veggie