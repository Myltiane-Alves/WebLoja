import styled from "styled-components";

export const Container = styled.section`
  background-color: #0f3460;
  .containerIcon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #fff;
    }
    p {
      font-size: 16px;
      color: #fff;

    }
    .icon {
      color: #fff;
      font-size: 32px;
    }
  }
  .containerInput {
    width: 100%;
    padding-left: 25px;
    form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .field {
        width: 100%;
        input {
          width: 100%;
          height: 50px;
          /* border: none; */
          border-radius: 5px;
          padding: 0 20px;
          font-size: 16px;
          color: #111;
          margin-bottom: 20px;
          margin-top: 20px;
        }
        button {

          width: 50%;
          height: 50px;
          background-color: #f7f7f7;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          color: #111;
          margin-bottom: 20px;
          margin-top: 20px;
          :hover {
            background-color: #dfd7d7;
          }
        }
      }
    }
  }
`;
