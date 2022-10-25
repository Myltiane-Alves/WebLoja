import styled from "styled-components";

export const Container = styled.aside`
  flex-direction: column;
  width: 23%;
  height: 510px;
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  background-color:  #fff;
  padding: 15px 0;
  border-radius: 5px;
  margin-top: 5px;
  .box {
    display: flex;
    padding: 0 20px;
    img {
      width: 30px;
      height: 30px;
      margin-top: 10px;
      object-fit: contain;
    }
    span {
      margin: 10px 20px;
      font-size: 20px;
      text-transform: capitalize;
      color: #4b566b;
    }
  }
`;
