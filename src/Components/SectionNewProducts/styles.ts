import styled from "styled-components";

export const Container = styled.section`
  background-color: #f6f9fc;
  /* width: 100%; */
  padding: 50px ;
  .containerContent{
    margin: auto;
    background-color: #fff;
    header {
      background-color: #f6f9fc;
      display: flex;
      justify-content: space-between;
      .containerTextLeft {
        display: flex;
        h2 {
          color: #e94560;
          margin: 0;
        }
      }
      .containerTextRight {
        span {
          color: #e94560;
        }
      }
    }
    .containerProduct {
      background-color: #fff;
      flex-direction: column;

      .contentProdruct {
        width: 150px;
        padding: 5px;
        position: relative;
        border-radius: 8px;
        box-shadow: rgb(3 0 71 / 9%) 0 1 3;
        margin: 10px;
        /* background-color: blue */
        flex-direction: column;
        h4 {
          font-size: 16px;
          font-weight: 500;
          color: #000;
          margin: 0px;
          /* text-align: center; */
        }
        p {
          font-size: 12px;
          font-weight: 500;
          color: #e94560;
          margin: 0px;
          /* text-align: center; */
        }
        .containerImg {
          width: 182px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      @media (min-width: 768px) {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 30px;
          width: 80%;
      }
    }
  }
`;