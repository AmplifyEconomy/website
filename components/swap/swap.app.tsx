import { FC } from 'react';
import styled from 'styled-components';
import { BsArrowRepeat } from 'react-icons/bs';

export const SwapAppContainer = styled.div`
    width: 100%;
    padding: 0 0 30px 0;

    div.swap-options {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        border-bottom: 2px dashed rgb(230, 230, 230);

        a.swap-option {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 240px;
            height: 40px;
            margin: 15px;

            background: hsla(202, 100%, 84%, 1);
            background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );
    
            font-size: 18px;
            font-weight: 600;
            color: white;
            cursor: pointer;
            border-radius: 5px;

            text-decoration: none;

            opacity: 0.4;
            &.active {
                opacity: 1;
                box-shadow: 0 0 45px rgba(0, 0, 0, 0.25);
            }
        }
    }

    div.swap {
        position: relative;

        display: flex;
        align-items: center;
        width: 100%;
        height: 320px;
        border-bottom: 2px dashed rgb(230, 230, 230);

        .swap-icon {
            position: absolute;
            left: calc(50% - 32px);
            top: calc(50% - 16px);
            font-size: 64px;
            transform: rotate(75deg);
        }

        a.button {
            position: absolute;
            left: calc(50% - 90px);
            top: calc(50% - 80px);
            z-index: 11;

            display: flex;
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 50px;
            border-radius: 5px;

            font-size: 18px;
            font-weight: bold;
            color: white;
            cursor: pointer;

            opacity: 0.5;
            &.active {
                opacity: 1;
                box-shadow: 0 0 45px rgba(0, 0, 0, 0.25);
            }

            &.buy {
                background: hsla(105, 100%, 78%, 1);
                background: linear-gradient(135deg, hsla(105, 100%, 78%, 1) 0%, hsla(108, 100%, 57%, 1) 100%);
                background: -moz-linear-gradient(135deg, hsla(105, 100%, 78%, 1) 0%, hsla(108, 100%, 57%, 1) 100%);
                background: -webkit-linear-gradient(135deg, hsla(105, 100%, 78%, 1) 0%, hsla(108, 100%, 57%, 1) 100%);
                filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ABFF8F", endColorstr="#52FF26", GradientType=1 );
            }

            &.sell {
                top: calc(50% + 60px);

                background: hsla(0, 100%, 84%, 1);
                background: linear-gradient(135deg, hsla(0, 100%, 84%, 1) 0%, hsla(7, 73%, 48%, 1) 100%);
                background: -moz-linear-gradient(135deg, hsla(0, 100%, 84%, 1) 0%, hsla(7, 73%, 48%, 1) 100%);
                background: -webkit-linear-gradient(135deg, hsla(0, 100%, 84%, 1) 0%, hsla(7, 73%, 48%, 1) 100%);
                filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FFAFAF", endColorstr="#D43621", GradientType=1 );
            }
        }

        p.slippage {
            position: absolute;
            right: 15px;
            bottoM: 15px;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 1px;
        }

        div.swap-side {
            position: relative;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;

            &:first-of-type {
                border-right: 2px dashed rgb(230, 230, 230);
            }


            img {
                width: 92px;
                &.border {
                    border-radius: 50%;
                }
            }

            div.input {
                width: 320px;
                padding: 30px;

                h3 {
                    font-size: 24px;
                    font-weight: 300;
                    letter-spacing: 1px;
                    padding: 0 0 10px 0;
                }

                input {
                    width: 100%;
                    height: 40px;
                    border: 2px solid #B9B1FE;
                    border-radius: 5px;
                    font-size: 18px;
                    padding: 0 15px;
                    outline: none;
                }
            }

            div.options {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                padding: 10px;

                display: flex;
                align-items: center;

                a.option {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    padding: 4px;
                    opacity: 0.5;
                    cursor: pointer;

                    &.active {
                        opacity: 1;
                    }

                    img {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }
                }
            }
        }
    }

    div.disclaimer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 90px;
        border-bottom: 2px dashed rgb(230, 230, 230);

        img {
            height: 64px;
            border-radius: 50%;
            margin: 0 15px 0 0;
        }
        
        p {
            font-size: 18px;

            a {
                color: #B9B1FE;
                font-weight: bold;
            }
        }
    }

    a.swap-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 320px;
        height: 60px;
        margin: 30px auto 0 auto;
        box-shadow: 0 0 45px rgba(0, 0, 0, 0.25);

        background: hsla(202, 100%, 84%, 1);
        background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );

        font-size: 24px;
        font-weight: 600;
        color: white;
        cursor: pointer;
        border-radius: 5px;

        text-decoration: none;
    }
`;

export const SwapApp: FC = () => {
    return(
        <SwapAppContainer>
            <div className="swap-options">
                <a className="swap-option active">
                    Swap (Market Order)
                </a>
                <a className="swap-option">
                    Limit Order
                </a>
                <a className="swap-option">
                    Add Liquidity
                </a>
            </div>
            <div className="disclaimer">
                <img src="/image/solana.jpg"/>
                <p>
                    Solana Liquidity Pool will launch
                    upon the release of the <a href="https://github.com/TheLoneRonin/SolarValidator" target="solarvalidator">Solar Validation</a> tool.
                </p>
            </div>
            <div className="swap">
                <BsArrowRepeat className="swap-icon"/>
                <a className="button buy active">
                    Buy AKT
                </a>
                <a className="button sell">
                    Sell AKT
                </a>

                <p className="slippage">Approx Slippage: ~0.1%</p>

                <div className="swap-side">
                    <img src="/image/amplify.png"/>
                    <div className="input">
                        <h3>Amplify</h3>
                        <input type="number" min={0} placeholder="0.0000"/>
                    </div>
                </div>

                <div className="swap-side">
                    <div className="options">
                        <a className="option active">
                            <img src="/image/akash.jpg"/>
                        </a>
                        <a className="option">
                            <img src="/image/solana.jpg"/>
                        </a>
                    </div>

                    <img src="/image/akash.jpg" className="border"/>
                    <div className="input">
                        <h3>Akash</h3>
                        <input type="number" min={0} placeholder="0.0000"/>
                    </div>
                </div>
            </div>

            <a className="swap-button">
                Trade
            </a>
        </SwapAppContainer>
    )
}