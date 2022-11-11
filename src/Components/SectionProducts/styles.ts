import styled from "styled-components";

export const Container = styled.section`
    /* background-color: #f6f9fc; */
    background-color: #fff;
    height: auto;
    padding: 10px;
    flex-direction: column;
    .containerCart {
        flex-direction: column;
        /* background-color: #FFF; */
        /* padding: 20px; */
        position: relative;
        border-radius: 8px;
        /* box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px; */
        margin: 10px;
        .containerImg {

            img {
                width: 100%;
            }
        }
        .detailsCard {
            h2 {
                font-size: 32px;
                font-weight: 600;
                line-height: 24px;
                color: #e94560;
            }
            .productPrice {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4 {
                    font-size: 22px;
                    line-height: 20px;
                    color: #e94560;
                }
                span {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 20px;
                    color: #0f3460;
                }
            }
            .containerButton {
                padding-top: 20px;

                div {
                    p {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #e94560;
                    }
                }
                p {
                    font-size: 16px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #e94560;
                }
                .sizeButtons {

                    display: flex;
                    justify-content: space-between;
                    button {
                        background-color: #edf2f7;
                        border-radius: 8px;
                        border: 1px solid transparent;
                        padding: 0.6em 1.2em;
                        font-size: 16px;
                        font-weight: 600;
                        color: #0f3460;
                        text-transform: uppercase;
                        cursor: pointer;
                        transition: border-color 0.25s;
                    }
                    button:hover {
                        border-color: #646cff;
                    }
                    button:focus,
                    button:focus-visible {
                        outline: 4px auto -webkit-focus-ring-color;
                    }
                }
                .contentButton {
                    padding-top: 20px;
                    flex-direction: column;
                    div{
                        padding-top: 10px;
                        button {
                            width: 100%;
                            height: 50px;
                            background-color: #0f3460;
                            border-radius: 8px;
                            border: none;
                            font-size: 20px;
                            color: #fff;
                        }
                        .btnFavorite {
                            border: solid 1px #0f3460;
                            color: #0f3460;
                            background-color: transparent;
                        }
                    }
                }
            }
            .description {
                p {
                    font-size: 16px;
                    line-height: 25px;
                    color: #4b566b;
                }
            }
        }

    }
    @media (min-width: 768px) {
        padding: 20px;

    }
    @media (min-width: 1200px) {
        padding: 50px;

    }
`;
