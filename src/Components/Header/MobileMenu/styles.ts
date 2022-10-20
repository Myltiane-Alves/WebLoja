import styled from 'styled-components';
// import { defaultTheme } from 'Global';
export const Container = styled.header`
  /* background: #7159c1; */
  /* height: 130px; */
  background: #f9f9f9;
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    display: flex;
    width: 65vw;
    flex-direction: column;
    padding: 32px 64px 0 32px;
    .logoMenu {
      width: 180px;
      a {
        img {
          width: 100px;
        }
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      li {

        list-style: none;

        text-align: start;
        a {
          font-size: 20px;
          font-weight: 600;
          color: #4b566b;

          text-decoration: none;
          line-height: 32px;
          padding: 0 16px;

        }
        .containerLogin {
          padding-top: 50px;
          button {
            padding: 8px;
            width: 150px;
            background: #213547;
            a {
              font-size: 16px;
              font-weight: 500;
              color: #fff;
            }
          }
        }
      }
    }
    .containerClose {
      button {
        position: absolute;
        top: 30px;
        right: 30px;
        padding: 8px;
        background: #213547;
        .icon {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
        }
      }
    }
  }


`;


export const CloseButton = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    padding: 8px;
    background: red;
    .icon {
      font-size: 32px;
      font-weight: 700;
    }

`;
