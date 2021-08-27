import { FC } from 'react';
import styled from 'styled-components';

export const SwapVertoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    border-bottom: 2px dashed rgb(230, 230, 230);

    h3 {
        padding: 0 15px;
        font-size: 18px;

        a {
            padding: 0 7.5px;
            color: #B9B1FE;
            font-weight: bold;
        }
    }
`;

export const SwapVerto: FC = () => {
    return(
        <SwapVertoContainer>
            <img src="/image/verto.svg"/>
            <h3>
                Check out
                
                <a href="https://verto.exchange" target="verto">
                    Verto
                </a>

                if you want to swap AMP for PSTs or AR.
            </h3>
        </SwapVertoContainer>
    )
}