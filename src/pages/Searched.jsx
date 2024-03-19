import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Grid, SecondCard} from "../components/Style.jsx";

export const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams()
    const getSearched = async (name) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=20f6e5d8fa4a472c8a26388757f8ba70&query=${name}`);
        const data = await response.json();
        return setSearchedRecipes(data.results);
    };
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
    return (
        <>
            <Grid>
                {searchedRecipes.map((recipe) => {
                    return (
                        <SecondCard key={recipe.id}> {/* Adding a unique key prop to each Card component */}
                            <img src={recipe.image} alt=""/>
                            <h4>{recipe.title}</h4>
                        </SecondCard>
                    );
                })}
            </Grid>
        </>
    )

}