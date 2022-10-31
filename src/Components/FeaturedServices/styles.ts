import styled from "styled-components";

export const Container = styled.section`
  background-color: #f6f9fc;
  /* padding: 50px; */
  height: auto;
  width: 100%;
  padding-bottom: 30px;
  header {
    h2 {
      font-size: 32px;
      font-weight: 500;
      color: #4b566b;
      line-height: 40px;
    }
  }
  .productCards {
    height: auto;
    width: 100%;
    padding-top: 30px;
    .productCard {
      height: auto;
      /* background-color: red; */

      background: #fff;
      padding: 20px;
      position: relative;
      border-radius: 8px;
      box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
      margin: 10px;
      .imgIcon {
        margin: auto;
        width: 70px;
        height: 70px;
        line-height: 70px;
        margin-bottom: 20px;
        /* background-color: red; */
        img {
          width: 100%;
        }
      }
      h3 {
        font-size: 25px;
        font-weight: 500;
        line-height: 32px;
        color: #1a1a1a;
        text-align: center;
      }
      p {
        font-size: 16px;
        font-weight: 600;
        color: #4b566b;
        text-align: center;
      }
    }
  }
`;
