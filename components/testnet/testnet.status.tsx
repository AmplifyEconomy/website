import { FC } from 'react';
import styled from 'styled-components';
import { GoAlert } from 'react-icons/go';

export const TestnetStatusContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 45px 15px;

    display: flex;
    align-items: center;

    h2 {
        font-size: 32px;
        font-weight: 300;
        width: 320px;
    }

    div.status {
        display: flex;
        align-items: center;
        width: calc(100% - 320px);
        color: #C53232;
        font-size: 32px;

        p {
            padding: 0 15px;
        }
    }

    @media (max-width: 640px) {
        display: block;
        padding: 30px 0;

        h2 {
            text-align: center;
            font-size: 24px;
            width: 100%;
        }

        div.status {
            display: block;
            width: auto;
            padding: 30px 0;

            font-size: 24px;
            text-align: center;
        }
    }
`;

export const TestnetStatus: FC = () => {
    return(
        <TestnetStatusContainer>
            <h2>Network Status</h2>
            <div className="status">
                <GoAlert/>
                <p>Unavailable</p>
            </div>
        </TestnetStatusContainer>
    )
}