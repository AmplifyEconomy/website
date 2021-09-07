import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

export const GatewayAKTContainer = styled.div`
    background: white;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 45px 0;
    min-height: 480px;

    img {
        display: block;
        margin: auto;
        border-radius: 50%;
        width: 128px;
    }

    h3 {
        font-size: 32px;
        text-align: center;
        padding: 30px 0;
    }

`;

export const GatewayAKT: FC = () => {
    return(
        <GatewayAKTContainer>
            <img src="/image/akash.jpg"/>
            <h3>Gateway Cluster will be relaunching on Akash Network</h3>
        </GatewayAKTContainer>
    )
}