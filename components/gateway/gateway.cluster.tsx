import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from 'superagent';
import { GoAlert } from 'react-icons/go';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoMdCheckmarkCircle } from 'react-icons/io';

export const n1 = `https://gateway-n1.amplify.host`;
export const n2 = `https://gateway-n2.amplify.host`;
export const n3 = `https://gateway-n3.amplify.host`;

export const GatewayClusterContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 60px 15px;

    border-top: 2px dashed rgb(230, 230, 230);

    h2 {
        font-size: 42px;
        font-weight: 300;
        padding: 0 0 30px 0;
    }

    div.card {
        display: flex;
        background: rgb(245, 245, 245);
        border-radius: 8px;
        width: 100%;
        height: 120px;
        margin: 30px 0;
        padding: 15px;

        div.image {
            position: relative;
            width: 120px;
            padding: 15px;

            img {
                width: 90px;
                height: 90px;
            }

            img.docker {
                position: absolute;
                right: 15px;
                bottom: -15px;
                height: 80px;
            }
        }

        div.text {
            width: calc(100% - 420px);
            padding: 15px;
            font-weight: 300;

            h3 {
                font-size: 24px;
                padding: 0 0 15px 0;
            }

            h4 {
                font-size: 18px;
                padding: 0 0 10px 0;
                &.bold {
                    font-weight: 500;
                }
            }
        }

        div.status {
            display: flex;
            align-items: center;
            width: 300px;
            height: 100%;
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
    }
`;

export const GatewayCluster: FC = () => {
    const [gw1, setgw1] = useState('Loading');
    const [gw2, setgw2] = useState('Loading');
    const [gw3, setgw3] = useState('Loading');

    useEffect(() => {
        (async () => {
            try {
                const payload = await get(n1);
                setgw1('Online');
            } catch (error) {
                setgw1('Error');
            }

            try {
                const payload = await get(n2);
                setgw2('Online');
            } catch (error) {
                setgw2('Error');
            }
        })();
    }, []);

    return(
        <GatewayClusterContainer>
            <h2>Gateway Cluster</h2>

            <div className="card">
                <div className="image">
                    <img src="/image/ubuntu.png"/>
                </div>
                <div className="text">
                    <h3>Gateway #1</h3>
                    <h4>Ubuntu 20.04 Focal</h4>
                    <h4 className="bold">{n1}</h4>
                </div>

                {gw1 === 'Loading' ?
                (<div className="status loading">
                    <AiOutlineLoading3Quarters className="rotate"/>
                    <p>Loading</p>
                </div>
                ) : ''}

                {gw1 === 'Error' ?
                (<div className="status error">
                    <GoAlert/>
                    <p>Unavailable</p>
                </div>) : ''}

                {gw1 === 'Online' ?
                (<div className="status online">
                        <IoMdCheckmarkCircle/>
                        <p>Online</p>
                    </div>
                ) : ''}
            </div>

            <div className="card">
                <div className="image">
                    <img src="/image/ubuntu.png"/>
                </div>
                <div className="text">
                    <h3>Gateway #2</h3>
                    <h4>Ubuntu 20.04 Focal</h4>
                    <h4 className="bold">{n2}</h4>
                </div>

                {gw2 === 'Loading' ?
                (<div className="status loading">
                    <AiOutlineLoading3Quarters className="rotate"/>
                    <p>Loading</p>
                </div>
                ) : ''}

                {gw2 === 'Error' ?
                (<div className="status error">
                    <GoAlert/>
                    <p>Unavailable</p>
                </div>) : ''}

                {gw2 === 'Online' ?
                (<div className="status online">
                        <IoMdCheckmarkCircle/>
                        <p>Online</p>
                    </div>
                ) : ''}
            </div>

            <div className="card">
                <div className="image">
                    <img src="/image/ubuntu.png"/>
                    <img src="/image/docker.png" className="docker"/>
                </div>
                <div className="text">
                    <h3>Gateway #3</h3>
                    <h4>Ubuntu 20.04 + Docker Compose</h4>
                    <h4 className="bold">{n3}</h4>
                </div>

                <div className="status loading">
                    <p>Coming Soon!</p>
                </div>
            </div>
        </GatewayClusterContainer>
    );
}