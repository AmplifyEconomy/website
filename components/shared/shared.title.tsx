import { FC } from 'react';
import styled from 'styled-components';

export interface TitleInterface {
    image: string;
    title: string;
    subTitle: string;
}

export const TitleContainer = styled.div`
    position: relative;
    background: hsla(200, 100%, 84%, 1);
    background: linear-gradient(315deg, hsla(200, 100%, 84%, 1) 0%, hsla(248, 98%, 84%, 1) 100%);
    overflow: hidden;

    video {
        position: absolute;
        left: 0;
        top: -60%;
        width: 100%;
    }

    div.wrap {
        position: relative;
        z-index: 1;
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

export const Title: FC<TitleInterface> = ({ image, title, subTitle }) => {
    return(
        <TitleContainer>
            <video autoPlay loop muted>
                <source src="/video/gradient.1.mp4" type="video/mp4" />
            </video>

            <div className="wrap">
                <img src={image} className="logo" />
                <div className="text">
                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                </div>
            </div>
        </TitleContainer>
    )
}