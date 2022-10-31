import styled from "styled-components";

export const Container = styled.footer`
  background-color: #e0e0e0;
  padding: 16px;
  .box-1 {
    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #111;
    }
    p {
      font-size: 16px;
      color: #111;
    }
    .containerIcons {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */
      width: 100%;
      margin-top: 20px;
      img {
        width: 40px;
      }
      span {
        font-size: 16px;
        color: #111;
      }
    }
  }
  .box {
    h4 {
      font-size: 24px;
      font-weight: 700;
      color: #111;
    }
    ul {
      margin: 0;
      padding: 0;

      li {

        list-style: none;
        font-size: 16px;
        color: #111;
        text-align: left;
      }
    }
  }

`;
