import styled from "styled-components";

const WorldCup = ({ imgArr, ideal, setIdeal }) => {

    return (
        <div>
            {imgArr.map(e => (
                <StyledImg src={e.src} alt="" key={e.id} />
            ))}
        </div>
    );
};

const StyledImg = styled.img`
    width: 40vw;
    height: 30vw;
`

export default WorldCup;