import styled from "styled-components";

export const Container = styled.section`
  background-color: #f6f9fc;
  padding: 50px 0;
  display: flex;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    .contentImg {
      img {
        width: 100%;
      }
    }
    @media(max-width: 768px) {
      display: grid;
      grid-template-columns: 2fr;
    }
  }
`;
