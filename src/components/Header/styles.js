import styled from "styled-components";

export const HeaderPokemon = styled.header`
  display: flex;
  justify-content: space-around;
  height: 10vh;
  align-items: center;
  box-shadow: 0px 4px 16px grey;
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
`;
export const HeaderLinks = styled.div`
  font-size: 25px;
  line-height: 29px;
  margin-right: 100px;
  > img {
    margin-left: 80px;
    width: 160px;
  }
`;

export const HeaderA = styled.a`
  font-size: 25px;

  line-height: 29px;
  margin-right: 100px;
`;
