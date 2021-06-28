import { FC, useState } from 'react';
import styled from 'styled-components';
import { post } from 'superagent';

export const URL = `https://testnet.amplify.host/dispense`;

export const TestnetFaucetContainer = styled.div`
    background: white;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 90px 30px;

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
        font-family: monospace;
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
        align-items: center;
        justify-content: flex-end;
        padding: 15px;

        div.status {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 15px;
            background: #C4C4C4;
            color: white;
            font-size: 18px;
            font-weight: bold;
            width: 240px;
            height: 50px;
            border-radius: 8px;

            &.green {
                background: #47D249;
            }
        }

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

    @media (max-width: 768px) {
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
    const [address, setAddress] = useState('');
    const [dispense, setDispense] = useState('idle');

    return(
        <TestnetFaucetContainer>
            <h2>Network Faucet</h2>
            <p>
                Arweave Address
            </p>
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />

            <div className="button-wrap">

                {
                    dispense === 'loading' ?
                    (
                        <div className="status gray">
                            Dispensing...
                        </div>
                    )
                    : ''
                }
                {
                    dispense === 'error' ?
                    (
                        <div className="status gray">
                            There was an error...
                        </div>
                    )
                    : ''
                }
                {
                    dispense === 'success' ?
                    (
                        <div className="status green">
                            Success!
                        </div>
                    )
                    : ''
                }
                <a
                    className="button"
                    onClick={async e => {
                        try {
                            setDispense('loading');
                            await post(URL).send({ address })
                            setDispense('success');
                        } catch (error) {
                            setDispense('error');
                        }
                        
                    }}
                >
                    Dispense 1 AR
                </a>
            </div>
        </TestnetFaucetContainer>
    )
}