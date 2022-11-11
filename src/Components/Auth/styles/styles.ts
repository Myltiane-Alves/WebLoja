import styled from "styled-components";

export const Container = styled.section`
    min-height: 300px;
    .contactForm {
        flex-direction: column;
        padding: 40px;
        display: flex;
        align-items: center;
        header {
            text-align-last: center;
            a {
                align-self: flex-end;
                cursor: pointer;
                img {
                    width: 50%;
                }
            }
            p {
                font-size: 16px;
                color: #e94560;
                font-weight: 500;
                text-transform: uppercase;
            }
        }
        form {
            flex-direction: column;
            padding: 20px;
            h2 {
                font-size: 32px;
                font-weight: 600;
                line-height: 40px;
                color: #0f3460;
                text-transform: uppercase
            }
            .fields {
                width: 100%;
                .field {
                    flex-direction: column;
                    padding-bottom: 16px;
                    input {
                        font-size: 20px;
                        font-weight: 500;
                        outline: none;
                        line-height: 32px;
                        border: none;
                        border: 1px solid #0f3460;
                        border-radius: 20px;
                        padding: 10px;

                        width: 250px;
                        background-color: transparent;
                        transition: all 0.3s ease-in-out;
                    }
                    input:focus {
                        background-color: #ededed33;
                    }
                    input::placeholder {
                        color: #0f3460;
                    }
                }
            }
            .containerBtn {
                flex-direction: column;
                .btn {
                    border: none;
                    border-radius: 20px;
                    transition: 0.5s ease-in-out;
                    background-color: #0f3460;
                    width: 100%;
                    max-width: 150px;
                    height: 40px;
                    margin: auto;
                    cursor: pointer;
                    color: #fff;
                    font-size: 16px;
                    line-height: 32px;
                    font-weight: 600;
                }
                .btn:hover {
                    background-color: #0f3460ad;
                    border: 1px solid #FFFAFA;
                    transition: all 0.5s ease-in-out;
                    color: #FFFAFA;
                }
                span {
                    padding-top: 20px;
                    padding-bottom: 20px;
                    font-size: 16px;
                    line-height: 36px;
                    display: block;
                    color: #0f3460;
                }
                a {
                    font-size: 16px;
                    color: #0f3460;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    border: 1px solid #FFFAFA;
                    border-radius: 3px;
                    width: 100px;
                    transition: 0.5s ease-in-out;
                }
                a:hover {
                 color: #0f3460ad;
                 border: none;
                 background-color: transparent;
                }
            }
        }
    }

    @media (min-width: 768px) {
        .contactForm {
            padding: 50px;
            header {
                display: block;
                a {
                    cursor: pointer;
                    align-items: center;
                    img {
                        width: 50%;
                    }
                }
            }
            form {
                h1 {
                font-size: 40px;
                text-align: initial;
                }
                div {
                    input {
                        width: 80%;
                    }
                }
                .container-btn {
                text-align: left;
                }
            }
        }

    }

  @media (min-width: 1280px) {
    .contactForm {
      form {
        .container-btn {
          span {
            font-size: 20px;
          }
          .btn {
            font-size: 20px;
            line-height: 36px;
          }
        }
      }
      padding-bottom: 50px;
    }

  }
`;
