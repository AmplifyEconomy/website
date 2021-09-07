import { FC, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { readContract } from 'smartweave';
import { get } from 'superagent';

import { arweave, Contract } from '../../arweave';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { AppNodes } from './app/app.nodes';
import { AppJoin } from './app/app.join';
import { AppManage } from './app/app.manage';
import { Button } from '../shared/shared.button';


export const MarketplaceAppContainer = styled.div`
    position: relative;
    width: 100%;

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


    div.title {
        position: relative;

        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 100%;
        padding: 30px;

        img {
            width: 90px;
            margin: 0 30px 0 0;
        }

        h3 {
            font-size: 32px;
        }

        a.edit-button {
            position: absolute;
            right: 30px;
            top: 30px;

            background: hsla(202, 100%, 84%, 1);
            background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );
    
            display: none;
            &.active { display: flex; }
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 40px;
            font-size: 18px;
            font-weight: 400;
            color: white;
            cursor: pointer;
            border-radius: 5px;

            text-decoration: none;
        }

        border-bottom: 2px dashed rgb(230, 230, 230);
    }

    div.claim {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 30px 0 15px 0;
        
        h3 {
            font-size: 24px;
            font-weight: bold;
            paddng: 0 0 30px 0;
        }

        border-bottom: 2px dashed rgb(230, 230, 230);
    }

    div.image {
        width: 120px;
        padding: 30px;

        img {
            width: 100%;
        }
    }

    p {
        display: flex;
        align-items: center;

        font-size: 14px;
        padding: 0 0 10px 0;

        a.mini-button {
            background: hsla(202, 100%, 84%, 1);
            background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );
    
            display: flex;
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 24px;
            font-size: 12px;
            font-weight: 700;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            margin: 0 0 0 15px;

            text-decoration: none;
        }
    }

    div.text {
        padding: 30px;
        width: 100%;

        div.traits {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 15px 0;

            border-top: 2px dashed rgb(230, 230, 230);
            border-bottom: 2px dashed rgb(230, 230, 230);

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
    }

    div.loading {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1111;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: white;
        color: black;
        font-size: 24px;

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

        &.active {
            display: flex;
        }
    }
`;

export const MarketplaceAppState = state => ({
    address: state.marketplace.address,
    name: state.marketplace.name,
});

export interface MarketplaceAppI {
    address: string;
    name: string;
}

export const MarketplaceAppComponent: FC<MarketplaceAppI> = ({ address, name }) => {
    const [loading, setLoading] = useState(false);
    const [claim, setClaim] = useState(false);
    const [networks, setNetworks] = useState({} as any);
    const [popup, setPopup] = useState(false);
    const [height, setHeight] = useState(1);

    async function loadNetworks() {
        setLoading(true);

        if (arweave) {      
            const payload = await get(`https://arweave.net/`);
            setHeight(JSON.parse(payload.text).height);

            const contract = await readContract(arweave, Contract);
            setNetworks(contract.networks);
            setLoading(false);
        } else {
            setTimeout(() => {
                loadNetworks();
            }, 1000);
        }
    }

    function retrieveKey(key: string) {
        if (networks[name]) {
            return networks[name][key];
        } else {
            return ``
        }
    }

    function calculateClaim() {
        if (!networks[name]) {
            return 0;
        }

        const epoch = retrieveKey('epoch');
        const distribution = retrieveKey('distribution');
        const node = retrieveKey('nodes')[address];
        const claims = node.claims;
        const nodeHeight = node.startHeight;
        const currentHeight = height;

        const delta = currentHeight - nodeHeight;
        const epochs = Math.floor(delta / parseFloat(epoch));
        const pendingClaims = epochs - parseInt(claims);
        const netDistribution = pendingClaims * parseFloat(distribution);

        return netDistribution.toFixed(4);
    }

    useLayoutEffect(() => {
        loadNetworks();
    }, []);

    return(
        <MarketplaceAppContainer>
            <div className="title">
                <img src="/image/amplify.png"/>

                <h3>
                    {name}
                    <a className="network-link" href={retrieveKey(`url`)} target={retrieveKey(`url`)}>({retrieveKey(`url`)})</a>
                </h3>

                <a className={`edit-button ${retrieveKey(`owner`) === address ? 'active' : ''}`} onClick={e => setPopup(!popup)}>
                    Manage Network
                </a>
            </div>

            {
                retrieveKey('nodes')[address] ?
                <div className="claim">
                    <h3>A {calculateClaim()} AMP Distribution is available for your node</h3>
                    <Button
                        label="Claim"
                        width={240}
                        height={50}
                        onClick={async e => {
                            setLoading(true);
                            setClaim(true);

                            const tx = await arweave.createTransaction({ data: ` ` });
    
                            tx.addTag(`App-Name`, `SmartWeaveAction`);
                            tx.addTag(`App-Version`, `0.3.0`);
                            tx.addTag(`Contract`, Contract);
                            tx.addTag(
                                `Claim`,
                                JSON.stringify({
                                    function: 'claim',
                                    name,
                                })
                            );
        
                            await arweave.transactions.sign(tx);
                            await arweave.transactions.post(tx);
    
                            setTimeout(() => {
                                window.location.reload();
                            }, 5000);
                        }}
                    />
                </div>
                : ''
            }
            
            <div className="text">
                <p>{retrieveKey('description')}</p>
            </div>
            <div className="text">
                <div className="traits">
                    <div className="trait">
                        <p>Consensus Type</p>
                        <h4>Approval Based</h4>
                    </div>
                    <div className="trait">
                        <p>Network Type</p>
                        <h4>{retrieveKey('network').toUpperCase()} Node</h4>
                    </div>
                    <div className="trait">
                        <p>Token Distribution</p>
                        <h4>AMP</h4>
                    </div>
                    <div className="trait">
                        <p>Epoch</p>
                        <h4>{retrieveKey('epoch')} Blocks</h4>
                    </div>
                    <div className="trait">
                        <p>Epoch Distribution Value</p>
                        <h4>{retrieveKey('distribution')} AMP</h4>
                    </div>
                    <div className="trait">
                        <p>Node Pool</p>
                        <h4>{Object.keys(retrieveKey('nodes')).length}/{retrieveKey('maxNodes')}</h4>
                    </div>
                </div>

                <AppNodes nodes={retrieveKey('nodes') || {}}/>
                <AppJoin/>
                <AppManage name={name} popup={popup} setPopup={setPopup} networks={networks}/>
            </div>

            <div className={`loading ${loading ? 'active' : ''}`}>
                <AiOutlineLoading3Quarters className="icon"/>
                <h3>
                    {claim ? `Processing Claim Please Wait...` : `Loading Network Please Wait...`}
                </h3>
            </div>
        </MarketplaceAppContainer>
    )
}

export const MarketplaceApp = connect(MarketplaceAppState)(MarketplaceAppComponent);