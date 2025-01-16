import { useEffect, useState } from "react";
import styled from "styled-components";

const WorldCup = ({ arr }) => {
    const [list, setList] = useState([]);
    const [viewImg, setViewImg] = useState([]);
    const [winner, setWinner] = useState([]);
    const [aa, setAa] = useState([]);
    const [count, setCount] = useState(2);
    const [floor, setFloor] = useState(8);

    useEffect(() => {
        arr.sort(() => Math.random() - 0.5);    
        setList(arr);
        setViewImg([arr[0], arr[1]]);
    }, []);

    
    const onClickImg = ( i ) => {
        if ( floor === count ) {
            setFloor(floor / 2);
            setCount(2);
            setList([...winner]);
            setViewImg([winner[0], winner[1]]);
            setWinner([]);
        } else {
            setViewImg([list[count], list[count + 1]]);
            setCount(count + 2);
        }
        console.log(floor)

        setWinner([...winner, list[i === 0 ? count - 2 : count - 1]]);
    };

    return (
        <div>
            <StyledPH1>aa ({count} / {floor})</StyledPH1>
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
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledImg = styled.img`
    width: 40vw;
    height: 30vw;
    margin: 0% 1%
`;

export default WorldCup;