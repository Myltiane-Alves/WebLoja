import styled from "styled-components";

export const Container = styled.section`
  /* background-color: red; */
  padding-top: 50px;
  padding-bottom: 50px;
  height: auto;
  .cardsProduct {

    height: auto;
    .product {
      /* height: 700px; */
      background-color: #fff;
      padding: 20px;
      position: relative;
      border-radius: 10px;
      box-shadow:  rgba(3, 0, 71 / 9%) 0 1px 3px;
      margin: 10px;
      border: 1px solid #e6e6e6;
      .content {
        span {
          background-color: #e94560;
          position: absolute;
          top: 0;
          left: 0;
          padding: 3px 10px;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          border-radius: 50px;
          margin: 10px;
        }

        .productLike {
          flex-direction: column;
          position: absolute;
          top: 0;
          right: 0;
          margin: 10px;
          transition: 0.5s;
          label {
            background-color: #0f3460;
            padding: 5px 10px;
            font-size: 22px;
            color: #fff;
            border-radius: 50px;
          }
          .heart {
            font-size: 32px;
            color: red;
            margin: 10px 3px;
          }
        }
      }
      .productDetails {
        flex-direction: column;
        /* background-color: green; */
        h3 {
          font-size: 28px;
          line-height: 32px;
          font-weight: 500;
          color: #0f3460;
        }
        .rate {
          .star {
            color: #ffcd4e;
            font-size: 20px;
            margin: 0 3px;
          }
        }
        .price {

          margin: 0px ;
          width: 250px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #e94560;
          h4 {
            font-size: 24px;
            font-weight: 700;
            line-height: 18px;
            margin: 0;
          }
          button {
            background: none;
            color: #e94560;
            font-size: 25px;
            transition: 0.5s;
            border: 1px solid rgb(3 0 71 / 9%);
            width: 40px;
            height: 40px;
            border-radius: 5px;
          }
        }
      }
    }
  }
`;
