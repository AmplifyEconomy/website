import { FC } from 'react';
import styled from 'styled-components';
import { VscDebugBreakpointData, VscDebugBreakpointDataUnverified } from 'react-icons/vsc';

export const RoadmapItemsContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 30px;

    background: rgba(255, 255, 255, 0.9);

    h3 {
        font-size: 24px;
        text-align: center;
        padding: 0 0 30px 0;
    }

    div.line {
        position: absolute;
        left: 30px;
        top: 30px;
        width: 3px;
        height: calc(100% - 60px);
        background: black;

        div.circle {
            position: absolute;
            left: -15px;
            top: 128px;
            width: 25px;
            height: 25px;
            background: white;
            border: 3px solid black;
            border-radius: 50%;

            &:nth-child(2) {
                top: 390px;
            }
            &:nth-child(3) {
                top: 650px;
            }
            &:nth-child(4) {
                top: 890px;
            }
            &:nth-child(5) {
                top: 1120px;
            }
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    div.item {
        padding: 15px 0px 45px 45px;

        div.point {
            display: flex;
            padding: 10px 0;

            p {
                position: relative;
                top: -6px;
            }
        }

        h4 {
            font-size: 18px;
            font-weight: bold;
            padding: 0 0 15px 0;
        }

        p {
            font-size: 18px;
            line-height: 1.5;
            padding: 0 0 0 10px;

            span.bold {
                font-weight: bold;
                text-decoration: underline;
                padding: 0 5px;
            }
        }

        @media (max-width: 768px) {
            padding: 15px 0;

            p {
                font-size: 16px;
            }
        }
    }
`;

export const RoadmapItems: FC = () => {
    return(
        <RoadmapItemsContainer>
            <h3>Project Goals</h3>

            <div className="line">
                <div className="circle"/>
                <div className="circle"/>
                <div className="circle"/>
                <div className="circle"/>
                <div className="circle"/>
            </div>

            <div className="item">
                <h4>Arweave Testnet</h4>

                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        Amplify deploys the first official Arweave testnet under <span className="bold">testnet.amplify.host</span>
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        Amplify to provide a faucet interface under <span className="bold">faucet.amplify.host</span>
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        The testnet will use Testweave and to have scheduled network resets
                    </p>
                </div>
            </div>

            <div className="item">
                <h4>Gateway Decentralization</h4>

                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        Customized implementation of the Gateway for each app in the Arweave ecosystem
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        Ensure key apps like Verto, ArDrive, ArGo migrate to the decentralized implementation
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        Launch the official v1.0.0 of the Decentralized Gateway
                    </p>
                </div>
            </div>

            <div className="item">
                <h4>Amplify DNS Auction</h4>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        Deploy the new DNS Auction interface under <span className="bold">auction.amplify.host</span>
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        Create a DNS and Token Trading interface <span className="bold">trade.amplify.host</span>
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        Facilitate auction sales on a community driven schedule
                    </p>
                </div>
            </div>

            <div className="item">
                <h4>Amplify Consensus Launch</h4>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p> 
                        Launch the official v1.0.0 of the Amplify Consensus model
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p> 
                        Mint tokens in scheduled epochs based on Gateways staking AMP tokens
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p>
                        Plan to debug and improve consensus and general Gateway source
                    </p>
                </div>
            </div>

            <div className="item">
                <h4>Deploying the ar:// protocol</h4>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p> 
                        Create a Chrome Extension which can leverage the ar:// protocol
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p> 
                        Create a Chromium Fork with native ar:// support
                    </p>
                </div>
                <div className="point">
                    <VscDebugBreakpointData size="18px"/>
                    <p> 
                        Ensure Chromium Fork can also operate as a Gateway
                    </p>
                </div>
            </div>
        </RoadmapItemsContainer>
    )
}