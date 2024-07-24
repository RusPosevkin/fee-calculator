import styled from "styled-components";

export const ItemCard = styled.li`
  text-indent: 0;
  list-style-type: none;
  padding: 10px;
  border: 3px dashed salmon;
  position: relative;
  min-width: 350px;
  max-width: 650px;
  box-sizing: content-box;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

export const ItemList = styled.ul`
  padding: 0;
  display: flex;
  gap: 20px;
  min-width: 400px;
  flex-wrap: wrap;
`;

export const EmptyList = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightcoral;
  color: white;
  width: 250px;
  height: 150px;
  border-radius: 30px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

export const Price = styled.p`
  color: green;
`;

export const Title = styled.h3`
  font-size: 24px;
  text-transform: capitalize;
`;

export const EndDate = styled.p`
  color: red;
`;

export const LastDayLabel = styled.span`
  margin-left: 10px;
  background-color: salmon;
  color: white;
  padding: 3px 10px;
  position: absolute;
  right: 10px;
  top: 10px;
`;
