import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    /* background-color: red; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
  }
`;

export const Nav = styled.div`
  @media (min-width: 768px) {
    border-top-left-radius: 1rem;
    margin-left: auto;
    display: flex;
    background-color: #fff;
    color: #23272a;
    width: 65vw;
    height: 100vh;
    flex-direction: column;
    padding: 2rem 4rem 0 2rem;
    position: relative;

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
        font-size: 1.1rem;
        list-style: none;
        text-align: start;
        cursor: pointer;
        & + li {
          margin-top: 0.5rem;
        }

        a {
          font-size: 22px;
          font-weight: 600;
          line-height: 32px;
          color: #4b566b;
          padding: 0.5rem;
          display: block;
          /* width: 100%; */
          &:hover {
            text-decoration: underline;
          }
        }
        .containerLogin {
          padding-top: 30px;
          .btnLogin {
            padding: 0.5rem;
            display: block;
            width: 150px;
            font-weight: bold;
            background-color: #ec6178;
            a {
              font-size: 20px;
              color: #fff;
            }
          }
        }
      }
    }
    .containerClose {

      button.btnClose {
        position: absolute;
        top: 30px;
        right: 24px;
        padding: 8px;
        background: #ec6178;
        .icon {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
        }
      }

    }
  }
`;
