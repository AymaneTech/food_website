import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BiSitemap} from "react-icons/bi";
import {Grid, SecondCard} from "../components/Style.jsx";


export const Cuisine = () => {
    const [cuisines, setCuisines] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        const cachedData = localStorage.getItem(name);
        if (cachedData) return setCuisines(JSON.parse(cachedData));
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=20f6e5d8fa4a472c8a26388757f8ba70&cuisine=${name}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            localStorage.setItem(name, JSON.stringify(data.results));
            return setCuisines(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <Grid>
            {cuisines.map((cuisine) => (
                <SecondCard key={cuisine.id}>
                    <img src={cuisine.image} alt={cuisine.title}/>
                    <h4>{cuisine.title}</h4>
                </SecondCard>
            ))}

        </Grid>
    )
}
