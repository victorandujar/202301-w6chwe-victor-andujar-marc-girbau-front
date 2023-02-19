import styled from "styled-components";

const RobotListStyled = styled.ul`
  display: grid;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
  }

  li {
    width: 300px;
    display: flex;
    align-items: center;
  }
`;

export default RobotListStyled;
