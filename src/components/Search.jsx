import {styled} from "styled-components";
import {FaSearch} from "react-icons/fa";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHnadler  = (e) => {
        e.preventDefault();
        navigate("/searched/"+input);
    }
    return (
        <>
            <FormStyle onSubmit={submitHnadler}>
                <div>
                    <FaSearch></FaSearch>
                    <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
                </div>
            </FormStyle>
        </>
    )
};
const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;

    div {
        width: 100%;
    }

    input {
        position: relative;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(100%, -50%);
    }
`;

