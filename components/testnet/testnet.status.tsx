import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GoAlert } from 'react-icons/go';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { get } from 'superagent';

export const URL = `https://testnet.amplify.host`;

export const TestnetStatusContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 30px 15px;

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
        font-size: 32px;

        &.error {
            color: #C53232;
        }

        &.loading {
            color: #C4C4C4;
        }

        &.online {
            color: #47D249;
        }

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
    const [status, setStatus] = useState('Loading');

    useEffect(() => {
        (async () => {
            try {
                const payload = await get(URL);
                setStatus('Online');
            } catch (error) {
                setStatus('Error');
            }
        })();
    }, []);

    return(
        <TestnetStatusContainer>
            <h2>Network Status</h2>
            {
                status === 'Loading' ?
                (
                    <div className="status loading">
                        <AiOutlineLoading3Quarters className="rotate"/>
                        <p>Loading</p>
                    </div>
                ) : ''
            }

            {
                status === 'Error' ?
                (
                    <div className="status error">
                        <GoAlert/>
                        <p>Unavailable</p>
                    </div>
                ) : ''
            }

            {
                status === 'Online' ?
                (
                    <div className="status online">
                        <IoMdCheckmarkCircle/>
                        <p>Online</p>
                    </div>
                ) : ''
            }
        </TestnetStatusContainer>
    )
}