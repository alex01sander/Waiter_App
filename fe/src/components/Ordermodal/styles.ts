import styled from "styled-components";

export const Overlay = styled.div`
    left: 0px;
    top: 0px;
    background: rgba(0, 0,0, 0.8);
    backdrop-filter: blur(4.5px);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ModalBody = styled.div`
    width: 400px;
    background: #fff;
    border-radius: 8px;
    padding: 32px;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong{
            font-size: 24px;
        }

        button{
        border: 0;
        background: transparent;
        display: flex;
    }
    }

    .status-container{
        margin-top: 32px;

        small{
            font-size: 14px;
            opacity: 0.8;
        }

        div{
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 8px;
        }
    }


`

    export const OrderDetails = styled.div`

        margin-top: 32px;

        > strong{
            font-weight: 500;
            font-size: 14px;
            opacity: 0.8;
        }

        .order-items{
            margin-top: 16px;

            .item{
                display: flex;

                img{
                border-radius: 6px;
                }

                & + .item{
                    margin-top: 16px;
                }

                .quantity{
                    font-size: 14px;
                    color: #666;
                    display: block;
                    min-width: 20px;
                    margin-left: 12px;
                }

                .product-details{
                   margin-left: 4px;
                    strong{
                        display: block;
                        margin-bottom: 4px;
                    }

                    span{
                        font-size:14px;
                        color: #666;
                    }
                }
            }


        }
    .total{
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin-top: 24px;

        span{
            font-size: 14px;
            font-weight: 500;
            opacity: 0.8;
        }
    }
`
