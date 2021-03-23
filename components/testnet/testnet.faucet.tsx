import { FC } from 'react';
import styled from 'styled-components';

export const TestnetFaucetContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 45px 15px;

    h2 {
        font-size: 32px;
        font-weight: 300;
        padding: 0 0 45px 0;
    }

    p {
        font-size: 18px;
        padding: 0 0 10px 0;
    }

    input {
        width: calc(100% - 45px);
        height: 50px;
        border-radius: 8px;
        border: 2px solid hsla(200, 100%, 84%, 1);
        padding: 0 15px;
        margin: 0;
        font-size: 18px;
        outline: none;
    }

    div.button-wrap {
        display: flex;
        justify-content: flex-end;
        padding: 15px;

        a.button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(315deg, hsla(200, 100%, 84%, 1) 0%, hsla(248, 98%, 84%, 1) 100%);
            color: white;
            width: 180px;
            height: 50px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 8px;
            opacity: 0.75;
            cursor: pointer;

            transition: opacity 0.25s cubic-bezier(0.25, 1, 0.5, 1);
            &:hover { opacity: 1; }
        }
    }

    @media (max-width: 640px) {
        padding: 30px 0;

        h2 {
            font-size: 24px;
            text-align: center;
        }

        p {
            font-size: 14px;
            margin: 0 15px;
        }

        input {
            margin: 0 15px;
            width: calc(100% - 65px);
        }
    }
`;

export const TestnetFaucet: FC = () => {
    return(
        <TestnetFaucetContainer>
            <h2>Network Faucet</h2>
            <p>
                Arweave Address
            </p>
            <input type="text" placeholder="Address"/>

            <div className="button-wrap">
                <a className="button">
                    Dispense 1 AR
                </a>
            </div>
        </TestnetFaucetContainer>
    )
}