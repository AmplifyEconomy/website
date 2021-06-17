import { FC } from 'react';
import styled from 'styled-components';

export const RoadmapIntroContainer = styled.div`
    width: 100%;
    max-width: 768px;
    margin: auto;
    padding: 30px;
    margin: 90px auto;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 32px;

    h3 {
        font-size: 24px;
        text-align: center;
        padding: 0 0 30px 0;
    }

    p {
        font-size: 18px;
        line-height: 1.75;
        padding: 0 0 30px 0;
    }

    @media (max-width: 640px) {
        width: auto;
        padding: 30px;

        p {
            font-size: 16px;
        }
    }
`;

export const RoadmapIntro: FC = () => {
    return(
        <RoadmapIntroContainer>
            <h3>Our Mission</h3>
            <p>
                Amplify's mission is to provide an easy and accessible way for consumers to
                share and distribute their bandwidth for profit. Amplify also intends to provide
                a new way for people to navigate the internet with Amplify domains and a new
                ar:// protocol. Amplify is currently a Linux service but will evolve into a fully
                featured Chrome extension and eventually a browser.
            </p>
            <p>
                Amplify is heavily invested in the success of the Arweave ecosystem. A lot of Amplify's
                roadmap involves improving the ecosystem for Arweave (ie: deploying a testnet). Amplify
                intends to work with all the apps in the Arweave ecosystem to help them serve content
                as effectively as possible.
            </p>
        </RoadmapIntroContainer>
    )
}