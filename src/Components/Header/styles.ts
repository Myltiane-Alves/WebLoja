import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 130px;
  /* background-color: red; */
`;

export const Nav = styled.div`
  max-width: 1230px;
  padding: 0 2rem;
  height: 130px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  .logoMenu {
    top: 10px;
    a {
      img {
        width: 100px;
      }
    }
  }

  button.mobileMenu {
    display: none;
  }

  @media (max-width: 768px) {
    button.mobileMenu {
      display: flex;
      padding: 16px;
      font-size: 32px;
      color: #6996fa;
      background: transparent;
    }

    nav {
      display: none;
    }
  }

  @media (max-width: 500px) {
    button.mobileMenu {
      color: #6996fa;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      li {

        line-height: 22px;
        list-style: none;
        a {
          font-size: 24px;
          font-weight: 500;
          transition: filter 0.2s;
          color: #4b566b;
          &:hover {
            filter: brightness(0.9);
          }
        }
        .containerLogin {
          .btnLogin {
            padding: 1rem 1.87rem;
            border-radius: 5px;
            line-height: 1.3rem;
            transition: filter 0.2s;
            background-color: #ec6178;
            border: none;
            a {
              font-size: 20px;
              font-weight: 500;
              color: #fff;

            }
            &:hover {
              filter: brightness(0.9);
            }
          }

        }
      }
    }
  }
`;
