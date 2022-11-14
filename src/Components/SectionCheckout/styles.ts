import styled from "styled-components";

export const Container = styled.section`
    background-color: #f6f9fc;
    /* background-color: #fff; */
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
        .orderComplete {
            /* background-color: #F3F2F2; */
            .formPayment {
                /* background-color: #0f3460; */
                padding-bottom: 20px;


                header {
                    /* background-color: yellow; */
                    h3 {
                        font-size: 28px;
                        line-height: 25px;
                        color: #0f3460;
                    }
                    span {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                        color: #0f3460;
                    }
                    padding-bottom: 20px;
                }
                .paymentForm {
                    /* padding-top: 20px; */
                    padding: 20px;
                    background-color: #f3f2f2;
                    border-radius: 10px;
                    form {
                       .fields {
                        display: flex;
                        flex-direction: column;

                        .field {
                            /* background-color: #fff; */
                            width: 100%;
                            /* padding-bottom: 10px; */
                            padding: 10px;
                            input {
                                width: 270px;
                                min-width: 0px;
                                height: 45px;
                                border-radius: 4px;
                                /* padding: 12px; */
                                background-color: #EEEDED;
                                border: 1px solid #e0e0e0;
                                outline: 2px solid transparent;
                                gap: 4px;

                            }
                        }
                       }
                    }
                }

            }
            .paymentCard {
                background-color: #f3f2f2;
                /* background-color: red; */
                border-radius: 10px;
                header {
                    padding: 10px;
                    h3 {
                        font-size: 28px;
                        line-height: 25px;
                        color: #0f3460;
                    }
                    span {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                        color: #0f3460;
                    }
                    padding-bottom: 20px;
                }
                .containerButton {
                    /* background-color: yellow; */
                    flex-direction: column;
                    display: flex;
                    padding-bottom: 20px;
                    div {
                        padding: 10px;
                        display: flex;
                        button {
                            align-items: center;
                            padding: 16px;
                            gap: 12px;
                            width: 178.67px;
                            height: 51px;
                            background: #EBE5F9;
                            border: 1px solid #8047F8;
                            border-radius: 6px;
                            flex: none;
                            order: 0;
                            flex-grow: 1;
                            text-transform: uppercase;
                        }
                    }
                }
            }
        }
        .cartDetails {
            /* background-color: #FFF; */
            flex-direction: column;
            box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
            background-color: #fff;
            width: 250px;
            border-radius: 8px;
            .cartListProduct {
                /* /* background-color: #FFF; */
                padding: 20px;
                position: relative;
                border-radius: 8px;
                /* box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px; */
                margin: 10px; */
                .containerImg {
                    img {

                    }
                }
                .detailsCard {
                    flex-direction: column;
                    h3{
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #e94560;
                    }
                    h4 {
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #e94560;
                    }
                    span {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 20px;
                        color: #0f3460;
                    }
                    .productPrice {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                }
                .containerButton {

                    flex-direction: column;
                    /* padding-right: 10px; */
                    display: flex;
                    .removeCart {
                        background: none;
                        font-size: 25px;
                        text-align: right;
                        margin-right: 10px;
                    }
                    .contentButton {

                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        /* margin-top: 50px; */
                    }
                }
            }
        }
        hr {
           color: 1px solid #e0e0e0;
        }
        .totalProduct {
            display: flex;
            flex-direction: column;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
            width: 230px;
            padding: 10px 10px 20px 10px;
            h2 {
                font-size: 18px;
                font-weight: 500;
                line-height: 16px;
                color: #e94560;
            }
            .totalPrice {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 220px;
                p {
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 16px;
                    color: #e94560;
                }
                span {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 16px;
                    color: #0f3460;
                }
            }
        }
    }
    @media (min-width: 768px) {
        padding: 20px;
        .containerCart {
            padding: 0;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: space-between;
            .cartDetails {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                width: 435px;
                /* background-color: yellow; */
                .cartListProduct {
                    background-color: #fff;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    padding: 20px 0px 38px 20px;
                    margin: 0px 10px 0px 0px;
                    width: 430px;

                    .containerImg {
                        display: flex;
                        width: 230px;
                    }
                    .detailsCard {
                        display: flex;
                        width: 100%;
                        /* background-color: red; */
                        .containerButton {
                            width: 60%;
                        }
                    }
                    .productPrice {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 150px;
                    }
                }
                .containerButton {
                    padding-top: 20px;
                }
            }
            .totalProduct {
                /* background-color: blue; */
                padding: 10px;
                width: 230px;
                margin-left: 25px;
                .totalPrice {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    p ,span {
                        text-align: left;
                    }
                }
            }
            .orderComplete {

                .formPayment {
                    .paymentForm {
                        form {
                            .fields {
                                display: grid;
                                grid-template-columns: repeat(2, 1fr);

                            }
                        }
                    }
                }
                .paymentCard {
                    .containerButton {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            }
        }
    }
    @media (min-width: 1200px) {
        padding: 50px;
        .containerCart {
            /* padding: 50px; */
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .cartDetails {
                /* width: 550px; */
                width: 100%;
                /* background-color: red; */
                flex-direction: column;
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                .cartListProduct {

                    /* background-color: #0f3460; */
                    .containerImg {

                        img {
                            width: 50%;
                        }
                    }
                    .detailsCard {
                        width: 100%;
                        display: flex;
                        /* flex-direction: row; */
                        align-items: center;
                        /* background-color: aliceblue; */
                        h3 {
                            font-size: 18px;
                            line-height: 30px;
                        }
                        .productPrice {
                            width: 200px;
                            /* background-color: #8047F8; */
                            h4 {
                                font-size: 18px;
                                line-height: 20px;
                            }
                            span {
                                font-size: 18px;
                                line-height: 20px;
                            }
                        }
                        .containerButton {
                            width: 40%;
                            /* background-color: #e94560; */
                            .contentButton {
                                span {
                                    font-size: 22px;
                                }
                            }

                        }
                    }
                }
                .totalProduct {
                    width: 400px;
                    justify-self: end;
                    padding: 30px;
                    h4 {
                        font-size: 22px;
                        line-height: 30px;
                        text-transform: uppercase;
                        margin: 0;
                    }
                    .totalPrice {
                        width: 100%;
                        p {
                            font-size: 22px;
                            line-height: 20px;
                        }
                        span {
                            font-size: 18px;
                        }
                    }
                }
            }
            .orderComplete {
                background-color: #0f3460;
                padding: 10px;
                width: 100%;

                .formPayment {
                    width: 100%;
                    .paymentForm {
                        form {
                            .fields {
                                display: grid;
                                grid-template-columns: repeat(2, 1fr);

                            }
                        }
                    }
                }
                .paymentCard {
                    width: 100%;
                    .containerButton {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            }
        }
    }
`;
