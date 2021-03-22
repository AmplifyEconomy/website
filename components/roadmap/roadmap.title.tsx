import { FC } from 'react';
import styled from 'styled-components';

export const RoadmapTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 768px;
    margin: auto;
    min-height: 240px;

    img.logo {
        filter: blur(1px);
        height: 128px;
        margin: 0 30px 0 0;
    }

    div.text {
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
        width: 100%;
        flex-direction: column;
        padding: 0 0 60px;

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
`;

export const RoadmapTitle: FC = () => {
    return(
        <RoadmapTitleContainer>
            <img src="/image/amplify.png" className="logo" />
            <div className="text">
                <h1>Amplify</h1>
                <h2>Roadmap and Project Goals</h2>
            </div>
        </RoadmapTitleContainer>
    )
}