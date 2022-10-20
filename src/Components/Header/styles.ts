import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;

`;

export const Nav = styled.nav`
  max-width: 1230px;
  padding: 0 32px;
  height: 130px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  .logoMenu {
    a {
      img {
        width: 180px;
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
      color: #4b566b;
      background: transparent ;
    }

    nav {
      display: none;
    }
  }


  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    li {
      line-height: 22px;
      list-style: none;
      a {
        font-size: 22px;
        font-weight: 600;
        color: #4b566b;
      }
    }
  }

`;
