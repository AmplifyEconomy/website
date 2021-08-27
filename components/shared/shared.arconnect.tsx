import { FC } from 'react';
import styled from 'styled-components';

export const ArconnectContainer = styled.div`
    width: 100%;

    div.title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 15px 0;
        border-bottom: 2px dashed rgb(230, 230, 230);

        img {
            height: 42px;
            margin: 0 15px 0 0;
        }

        h2 {
            font-size: 18px;
            font-weight: 300;
            letter-spacing: 1px;
            padding: 5px 0 0 0;
        }
    }

    div.links {
        display: flex;
        align-items: center;
        border-bottom: 2px dashed rgb(230, 230, 230);

        a.link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 70px;
            cursor: pointer;
            color: #B9B1FE;

            &:first-of-type {
                border-right: 2px dashed rgb(230, 230, 230);
            }
            
            img {
                height: 42px;
                margin: 0 15px 0 0;
            }

            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
    }
`;

export const Arconnect: FC = () => {
    return(
        <ArconnectContainer>
            <div className="title">
                <img src="/image/arconnect.png"/>
                <h2>Use this dApp with ArConnect</h2>
            </div>
            <div className="links">
                <a className="link" href="https://addons.mozilla.org/en-US/firefox/addon/arconnect/" target="arfirefox">
                    <img src="/image/firefox.png"/>
                    Download for Firefox
                </a>
                <a className="link" href="https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap" target="archrome">
                    <img src="/image/chrome.png"/>
                    Download for Chrome
                </a>
            </div>
        </ArconnectContainer>
    )
}