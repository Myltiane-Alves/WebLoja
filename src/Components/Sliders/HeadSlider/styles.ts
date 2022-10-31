import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  height: 120vh;

  .swiper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    height: 550px;
    /* display: flex; */
    flex-direction: column-reverse;
    @media (max-width: 768px) {
      height: 600px !important;
      display: flex;
    }

  }

  .swiper-slide {
    font-size: 18px;
    color: #fff;
    padding: 40px 60px;
  }

  ul {
    li {
      font-size: 50px;
      background-color: #ec6178;
    }
  }

.container {
  width: fit-content;
  /* height: fit-content; */
  /* display: flex; */
  flex-direction: column-reverse;
  justify-content: space-between;
  .content {
    width: 70%;
    /* background-color: yellow; */
    h1 {
      font-size: 32px;
      line-height: 40px;
      font-weight: 600;
      color: #0f3460;
    }

    p {
      font-size: 22px;
      line-height: 30px;
      font-weight: 300;
      color: #4b566b;
    }
    .colection {
      background: #ec6178;
      height: 50px;
      width: 200px;
      border-radius: 5px;
      border: none;
      a {
        color: #fff;
        font-size: 20px;
        line-height: 50px;
        font-weight: 300;
      }
    }
  }
  .slideRight {
    width: 50%;
    img {
      width: 80%;

    }
  }
}
  @media (max-width: 768px) {
    .swiper {
      height: 350px;
      /* height: 250px; */
    }

  }
`;
