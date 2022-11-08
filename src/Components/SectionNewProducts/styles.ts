import styled from "styled-components";

export const Container = styled.section`
  background-color: #f6f9fc;
  padding: 50px ;
  .containerContent{
    margin: auto;
    background-color: #fff;
    width: 100%;
        header {
            background-color: #f6f9fc;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            .containerTextLeft {
                display: flex;
                align-items: center;
                h2 {
                font-size: 32px;
                color: #e94560;
                line-height: 40px;
                margin: 0;
                }
            }
            .containerTextRight {
            padding: 20px;
            display: flex;
            justify-content: inherit;
                span {
                color: #e94560;
                }
            }
        }
        .containerProduct {
            flex-direction: column;
            padding: 30px;
            width: 100%;

            .contentProdruct {
                width: 200px;
                padding: 5px;
                position: relative;
                border-radius: 8px;
                box-shadow: rgb(3 0 71 / 9%) 0 1 3;
                margin: 10px;
                flex-direction: column;
                h4 {
                    font-size: 20px;
                    font-weight: 500;
                    color: #000;
                    margin: 0px;
                    padding-top: 10px;
                    line-height: 20px;
                }
                p {
                    font-size: 16px;
                    font-weight: 500;
                    color: #e94560;
                    margin: 0px;
                    padding-top: 10px;
                    line-height: 20px;
                }
                .containerImg {
                     width: 182px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    @media (min-width: 768px) {
        .containerContent {
            header {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-content: space-between;
                align-content: center;
                .containerTextRight {
                    justify-content: end;
                }
            }

            .containerProduct {
                padding: 50px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                width: 100%;
            }
        }
    }
`;
