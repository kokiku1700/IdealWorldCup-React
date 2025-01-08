import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";


const Main = () => {
    const [object, setObject] = useState("food");

    const onChangeSelect = (e) => {
        setObject(e.target.value);
    }

    return (
        <MainPage>
            <h1>이상형 월드컵 32강</h1>
            <StyledImg src={require(`../img/${object}.jpg`)}></StyledImg>
            <StyledSelect onChange={onChangeSelect}>
                <option value="food">음식</option>
                <option value="animation">애니</option>
                <option value="sport">스포츠</option>
            </StyledSelect>
            <StyledLink to={`/${object}`}>시작하기</StyledLink>
        </MainPage>
    );
};

const StyledLink = styled(Link)`
    padding: 1%;
    background: yellow;
    width: 10%;
    margin: 3% auto;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
`;

const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const StyledImg = styled.img`
    width: 30%;
    height: 20vw;
    margin: 0 auto;
`

const StyledSelect = styled.select`
    width: 10%;
    margin: 2% auto;
    padding: 1%;
`

export default Main;