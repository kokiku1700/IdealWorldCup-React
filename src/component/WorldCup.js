import { useEffect, useState } from "react";
import styled from "styled-components";

const WorldCup = ({ arr }) => {
    const [list, setList] = useState([]);
    const [viewImg, setViewImg] = useState([]);
    const [winner, setWinner] = useState([]);
    const [count, setCount] = useState(2);
    
    useEffect(() => {
        arr.sort(() => Math.random() - 0.5);    
        setList(arr);
        setViewImg([arr[0], arr[1]]);
    }, [])

    const onClickImg = ( i ) => {
        setWinner([...winner, arr[i === 0 ? count - 2 : count - 1]]);
        setViewImg([arr[count], arr[count + 1]]);
        setCount(count + 2);
        console.log(winner)
    }

    return (
        <div>
            <StyledPH1>음식 이상형 월드컵 ({count} / {list.length})</StyledPH1>
            <StyledDiv>
                {viewImg.map((e, idx) => (
                    <StyledImg src={e.src} alt="" key={e.id} onClick={() => onClickImg(idx)} />
                ))}
            </StyledDiv>
        </div>
        
    );
};

const StyledPH1 = styled.h1`
    text-align: center;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`

const StyledImg = styled.img`
    width: 40vw;
    height: 30vw;
    margin: 0% 1%
`

export default WorldCup;