import { readContract } from 'smartweave';
import Link from 'next/link';
import { FC, useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { arweave, Contract } from '../../arweave';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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

    div.loading {
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 420px;
        font-size: 32px;

        &.active {
            display: flex;
        }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .icon {
            animation: rotate 1s infinite;
        }

        h3 {
            padding: 30px;
        }
    }
`;

export const MarketplaceResultsState = state => ({
    input: state.app.search.input
})

export interface MarketplaceResultsI {
    input: string;
}

export const MarketplaceResultsComponent: FC<MarketplaceResultsI> = ({ input }) => {
    const [loading, setLoading] = useState(false);
    const [networks, setNetworks] = useState({} as any);

    async function loadNetworks() {
        setLoading(true);

        if (arweave) {      
            const contract = await readContract(arweave, Contract);
            setNetworks(contract.networks);
            setLoading(false);
        } else {
            setTimeout(() => {
                loadNetworks();
            }, 1000);
        }
    }

    useLayoutEffect(() => {
        loadNetworks();
    }, []);

    return(
        <MarketplaceResultsContainer>
            {
            Object
            .keys(networks)
            .filter(key => {
                const network = networks[key];

                if (input.length === 0) {
                    return true;
                }

                if (key.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
                    return true;
                }

                if (network.url.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
                    return true;
                }

                return false;
            })
            .map(key => {
                const network = networks[key];

                return(
                <a className="result">
                    <div className="image">
                        <img src="/image/amplify.png"/>
                    </div>
                    <div className="text">
                        <h3>
                            {key}
                            <a className="network-link" href={network.url} target={network.url}>({network.url})</a>
                        </h3>
                        <div className="traits">
                            <div className="trait">
                                <p>Consensus Type</p>
                                <h4>Approval Based</h4>
                            </div>
                            <div className="trait">
                                <p>Network Type</p>
                                <h4>{network.network.toUpperCase()} Node</h4>
                            </div>
                            <div className="trait">
                                <p>Token Distribution</p>
                                <h4>AMP</h4>
                            </div>
                            <div className="trait">
                                <p>Epoch</p>
                                <h4>{network.epoch} Blocks</h4>
                            </div>
                            <div className="trait">
                                <p>Epoch Distribution Value</p>
                                <h4>{network.distribution} AMP</h4>
                            </div>
                            <div className="trait">
                                <p>Node Pool</p>
                                <h4>{Object.keys(network.nodes).length}/{network.maxNodes}</h4>
                            </div>
                        </div>

                        <p>
                            {network.description}
                        </p>

                        <div className="button">
                            <Link href={`/marketplace/app/${key}`}>
                                <a className="button">
                                    View Network
                                </a>
                            </Link>
                        </div>
                    </div>
                </a>
                )
            })
            }

            <div className={`loading ${(loading && Object.keys(networks).length === 0) ? 'active' : ''}`}>
                <AiOutlineLoading3Quarters className="icon"/>
                <h3>Loading Networks...</h3>
            </div>
            <div className={`loading ${(!loading && Object.keys(networks).length === 0) ? 'active' : ''}`}>
                <h3>No Amplify networks have been created yet</h3>
            </div>
        </MarketplaceResultsContainer>
    )
}

export const MarketplaceResults = connect(MarketplaceResultsState)(MarketplaceResultsComponent);