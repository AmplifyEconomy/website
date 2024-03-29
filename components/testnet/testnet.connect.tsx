import { FC } from 'react';
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

export const TestnetConnectContainer = styled.div`
    background: white;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 30px;

    display: flex;
    align-items: center;
    font-size: 24px;

    h2 {
        font-size: 32px;
        font-weight: 300;
        width: 320px;
    }

    .hl {
        width: calc(100% - 320px);
        text-align: center;
    }

    @media (max-width: 768px) {
        display: block;
        font-size: 18px;
        padding: 30px 0;

        h2 {
            text-align: center;
            font-size: 24px;
            width: 100%;
        }

        .hl {
            margin: 15px !important;
            width: calc(100% - 60px);
            text-align: center !important;
        }
    }
`;

export const ConnectURL = `https://testnet.amplify.host`;

export const TestnetConnect: FC = () => {
    return(
        <TestnetConnectContainer>
            <h2>Connect URL</h2>
            <SyntaxHighlighter className="hl" style={style}>{ConnectURL}</SyntaxHighlighter>
        </TestnetConnectContainer>
    )
}