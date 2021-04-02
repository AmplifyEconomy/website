import { FC } from 'react';
import styled from 'styled-components';

export const GatewayTitleContainer = styled.div`
    background: hsla(200, 100%, 84%, 1);
    background: linear-gradient(315deg, hsla(200, 100%, 84%, 1) 0%, hsla(248, 98%, 84%, 1) 100%);

    div.wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 768px;
        margin: auto;
        min-height: 240px;
        padding-top: 50px;
    }

    img.logo {
        filter: blur(1px);
        height: 128px;
        margin: 0 30px 0 0;
    }

    div.text {
        color: white;

        h1 {
            font-size: 42px;
            font-weight: 400;
            padding: 0 0 15px 0;
        }

        h2 {
            font-size: 24px;
        }
    }

    @media (max-width: 640px) {
        div.wrap {
            width: 100%;
            flex-direction: column;
            padding: 0 0 60px 0;
    
            img.logo {
                height: 92px;
                margin: 15px;
            }
    
            div.text {
                width: 100%;
    
                h1, h2 {
                    text-align: center;
                }
    
                h1 {
                    font-size: 32px;
                }
                h2 {
                    font-size: 18px;
                }
            }
        }
    }
`;

export const GatewayTitle: FC = () => {
    return(
        <GatewayTitleContainer>
            <div className="wrap">
                <img src="/image/amplify.white.png" className="logo" />
                <div className="text">
                    <h1>Gateway</h1>
                    <h2>The Official Amplify Gateway</h2>
                </div>
            </div>
        </GatewayTitleContainer>
    )
}