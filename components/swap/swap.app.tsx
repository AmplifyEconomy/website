import { FC } from 'react';
import styled from 'styled-components';

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
            }
        }
    }

    div.swap {
        display: flex;
        align-items: center;
        width: 100%;
        height: 320px;
        border-bottom: 2px dashed rgb(230, 230, 230);

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