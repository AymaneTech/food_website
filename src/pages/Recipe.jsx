import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, DetailWrapper, Info} from "../components/Style.jsx";
import {BiSitemap} from "react-icons/bi";

export const Recipe = () => {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions")
    let params = useParams()
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=20f6e5d8fa4a472c8a26388757f8ba70`);
        const detailsData = await data.json();
        setDetails(detailsData);
        console.log(detailsData)
    }
    useEffect(() => {
        fetchDetails()
    }, [params.name]);
    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt=""/>
            </div>
            <Info>
                <Button className={activeTab === 'instructions' && 'active'}
                        onClick={() => setActiveTab("instructions")}>Instructions</Button>
                <Button className={activeTab === 'ingredients' && 'active'}
                        onClick={() => setActiveTab("ingredients")}>Ingredients</Button>

                {activeTab === "instructions" ? (
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                    </div>
                ): (
                    "test"
                )}
            </Info>
        </DetailWrapper>
    )
}

