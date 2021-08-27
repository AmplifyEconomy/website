import { FC } from 'react';
import styled from 'styled-components';

export const MarketplaceDisclaimerContainer = styled.div`
    background: white;
    width: 100%;
    max-width: 1200px;
    margin: 90px auto 90px auto;
    padding: 30px;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.25);

    p {
        font-weight: 300;
        font-size: 18px;
        letter-spacing: 1px;
        text-align: center;
        line-height: 1.5;
    }
`;

export const MarketplaceDisclaimer: FC = () => {
    return(
        <MarketplaceDisclaimerContainer>
            <p>
                Please note that all Smartweave interactions on this webpage are for DEMO purposes. Amplify and Akash Smartweave contracts
                and liquidity pools will be operational by early September. These pages are currently for showcase purposes.
            </p>
        </MarketplaceDisclaimerContainer>
    )
}