import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

export const MarketplaceResultsContainer = styled.div`
    width: 100%;

    a.result {
        display: flex;
        width: 100%;
        border-bottom: 2px dashed rgb(230, 230, 230);
        
        &:last-of-type {
            border-bottom: none;
        }

        div.image {
            width: 120px;
            padding: 30px;

            img {
                width: 100%;
            }
        }

        div.text {
            padding: 30px 0;
            width: calc(100% - 120px);

            h3 {
                font-size: 24px;
                letter-spacing: 0.5px;
                font-weight: 300;
                padding: 0 0 15px 0;
            }

            a.network-link {
                font-size: 18px;
                font-weight: bold;
                color: #B9B1FE;
                cursor: pointer;
                padding: 0 0 0 15px;
            }

            div.traits {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                padding: 0 0 30px 0;

                div.trait {
                    padding: 15px 0;
                    width: calc(100% / 3);

                    p {
                        font-size: 14px;
                        font-weight: bold;
                        padding: 0 0 10px 0;
                    }

                    h4 {
                        font-size: 18px;
                    }
                }
            }

            div.button {
                display: flex;
                justify-content: flex-end;
                padding: 30px 30px 0 30px;

                a.button {
                    background: hsla(202, 100%, 84%, 1);
                    background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
                    background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
                    background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
                    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );
            
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 240px;
                    height: 40px;
                    font-size: 18px;
                    font-weight: 600;
                    color: white;
                    cursor: pointer;
                    border-radius: 5px;

                    text-decoration: none;
                }
            }
        }
    }
`;

export const MarketplaceResults: FC = () => {
    return(
        <MarketplaceResultsContainer>
            <a className="result">
                <div className="image">
                    <img src="/image/amplify.png"/>
                </div>
                <div className="text">
                    <h3>
                        Amplify Main Network
                        <a className="network-link">(https://amp-gw.online)</a>
                    </h3>
                    <div className="traits">
                        <div className="trait">
                            <p>Consensus Type</p>
                            <h4>Approval Based</h4>
                        </div>
                        <div className="trait">
                            <p>Network Type</p>
                            <h4>Full Node</h4>
                        </div>
                        <div className="trait">
                            <p>Token Distribution</p>
                            <h4>AMP</h4>
                        </div>
                        <div className="trait">
                            <p>Epoch</p>
                            <h4>100 Blocks</h4>
                        </div>
                        <div className="trait">
                            <p>Epoch Distribution Value</p>
                            <h4>100 AMP</h4>
                        </div>
                        <div className="trait">
                            <p>Node Pool</p>
                            <h4>9/10</h4>
                        </div>
                    </div>

                    <p>
                        This is the Amplify Main Network. Need to figure out a good description.
                    </p>

                    <div className="button">
                        <Link href="/marketplace/app/demo">
                            <a className="button">
                                View Network
                            </a>
                        </Link>
                    </div>
                </div>
            </a>

            <a className="result">
                <div className="image">
                    <img src="/image/amplify.png"/>
                </div>
                <div className="text">
                    <h3>
                        Amplify Test Network
                        <a className="network-link">(https://testnet.amp-gw.online)</a>
                    </h3>
                    <div className="traits">
                        <div className="trait">
                            <p>Consensus Type</p>
                            <h4>Approval Based</h4>
                        </div>
                        <div className="trait">
                            <p>Network Type</p>
                            <h4>Full Node</h4>
                        </div>
                        <div className="trait">
                            <p>Token Distribution</p>
                            <h4>AMP</h4>
                        </div>
                        <div className="trait">
                            <p>Epoch</p>
                            <h4>100 Blocks</h4>
                        </div>
                        <div className="trait">
                            <p>Epoch Distribution Value</p>
                            <h4>100 AMP</h4>
                        </div>
                        <div className="trait">
                            <p>Node Pool</p>
                            <h4>9/10</h4>
                        </div>
                    </div>

                    <p>
                        This is the Amplify Test Network. Need to figure out a good description.
                    </p>

                    <div className="button">
                        <Link href="/marketplace/app/demo">
                            <a className="button">
                                View Network
                            </a>
                        </Link>
                    </div>
                </div>
            </a>
            <a className="result">
                <div className="image">
                    <img src="/image/arweave.png"/>
                </div>
                <div className="text">
                    <h3>
                        Arweave Main Network
                        <a className="network-link">(https://arweave.net)</a>
                    </h3>
                    <div className="traits">
                        <div className="trait">
                            <p>Consensus Type</p>
                            <h4>Approval Based</h4>
                        </div>
                        <div className="trait">
                            <p>Network Type</p>
                            <h4>Full Node</h4>
                        </div>
                        <div className="trait">
                            <p>Token Distribution</p>
                            <h4>AR</h4>
                        </div>
                        <div className="trait">
                            <p>Epoch</p>
                            <h4>100 Blocks</h4>
                        </div>
                        <div className="trait">
                            <p>Epoch Distribution Value</p>
                            <h4>100 AR</h4>
                        </div>
                        <div className="trait">
                            <p>Node Pool</p>
                            <h4>9/10</h4>
                        </div>
                    </div>

                    <p>
                        This is the Amplify Main Network. Need to figure out a good description.
                    </p>

                    <div className="button">
                        <Link href="/marketplace/app/demo">
                            <a className="button">
                                View Network
                            </a>
                        </Link>
                    </div>
                </div>
            </a>
        </MarketplaceResultsContainer>
    )
}