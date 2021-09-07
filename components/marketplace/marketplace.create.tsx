import { FC, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setCreateInput } from '../../redux/redux.app';
import { arweave, Contract } from '../../arweave';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Checkbox } from '../shared/shared.checkbox';
import { Button } from '../shared/shared.button';

declare const window;

export const MarketplaceCreateContainer = styled.div`
    h2 {
        font-size: 32px;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 30px;
    }

    p {
        font-size: 16px;
        font-weight: bold;
        padding: 10px 30px;
    }

    input, textarea {
        margin: 0 30px 15px 30px;
        width: calc(100% - 60px);
        height: 60px;
        border: 2px solid #B9B1FE;
        border-radius: 5px;
        font-size: 18px;
        padding: 0 15px;
        outline: none;
    }

    textarea {
        padding: 15px;
        font-family: inherit;
        min-height: 180px;
    }

    div.traits {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 15px 15px 30px 15px;
        margin: 15px 0 15px 0;

        border-top: 2px dashed rgb(230, 230, 230);
        border-bottom: 2px dashed rgb(230, 230, 230);
    
        p {
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 0.5px;
            padding: 30px 30px 15px 30px;
            width: 100%;
        }

    }

    div.create-button {
        display: flex;
        justify-content: flex-end;
        padding: 30px;
    }

    div.loading {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1111;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.4);
        color: white;
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

export const MarketplaceCreateState = state => ({
    name: state.app.create.name,
    url: state.app.create.url,
    description: state.app.create.description,
    consensus: state.app.create.consensus,
    network: state.app.create.network,
    networkAppName: state.app.create.networkAppName,
    networkId: state.app.create.networkId,
    token: state.app.create.token,
    pool: state.app.create.pool,
    epoch: state.app.create.epoch,
    distribution: state.app.create.distribution,
    nodes: state.app.create.nodes,
})

export interface MarketplaceCreateI {
    name: string;
    url: string;
    description: string;
    consensus: string;
    network: string;
    networkAppName: string;
    networkId: string;
    token: string;
    pool: number;
    epoch: number;
    distribution: number;
    nodes: number;

    setCreateInput(state: { key: string, value: string }): void;
}

export const MarketplaceCreateComponent: FC<MarketplaceCreateI> = ({ name, url, description, consensus, network, networkAppName, networkId, token, pool, epoch, distribution, nodes, setCreateInput }) => {
    const [loading, setLoading] = useState(false);
    
    return(
        <MarketplaceCreateContainer>
            <h2>Create A New Network</h2>
            
            <p>Network Name</p>
            <input type="text" placeholder="Name of Network..." value={name} onChange={e => setCreateInput({ key: 'name', value: e.target.value })}/>

            <p>Network URL</p>
            <input type="text" placeholder="A valid TLD..." value={url} onChange={e => setCreateInput({ key: 'url', value: e.target.value })}/>

            <p>Description</p>

            <textarea placeholder="Description of Network" value={description} onChange={e => setCreateInput({ key: 'description', value: e.target.value })}></textarea>

            <div className="traits">
                <p>Consensus Type</p>

                <Checkbox label="Approval Based" active={true}/>
                <Checkbox label="Quorum (Experimental)" active={false} disabled={true}/>

                <p>Network Type</p>

                <Checkbox label="Full Node" active={network === 'full'} onClick={e => setCreateInput({ key: 'network', value: 'full' })}/>
                <Checkbox label="App Node" active={network === 'app'} onClick={e => setCreateInput({ key: 'network', value: 'app' })}/>
                <Checkbox label="Custom Node" active={network === 'custom'} disabled={true}/>

                {
                    network === 'app' ?
                    <>
                        <p>App Name</p>
                        <input type="text" placeholder="App Name Tag" value={networkAppName} onChange={e => setCreateInput({ key: 'networkAppName', value: e.target.value })}/>
                        
                        <p>Contract ID</p>
                        <input type="text" placeholder="Contract TX ID" value={networkId} onChange={e => setCreateInput({ key: 'networkId', value: e.target.value })}/>
                    </>
                    :
                    ''
                }

                <p>Token Distribution</p>

                <Checkbox label="AMP" active={true}/>
                <Checkbox label="AR" active={false} disabled={true}/>
                <Checkbox label="PST" active={false} disabled={true}/>
                <Checkbox label="Custom" active={false} disabled={true}/>
            </div>

            <p>Initial Pool (in AMP)</p>
            <input type="number" placeholder="#" min={0} value={pool} onChange={e => setCreateInput({ key: 'pool', value: e.target.value })}/>

            <p>Epoch (in blocks)</p>
            <input type="number" placeholder="#" min={0} value={epoch} onChange={e => setCreateInput({ key: 'epoch', value: e.target.value })}/>

            <p>Epoch Distribution (in AMP)</p>
            <input type="number" placeholder="#" min={0} value={distribution} onChange={e => setCreateInput({ key: 'distribution', value: e.target.value })}/>

            <p>Maximum Nodes</p>
            <input type="number" placeholder="#" min={1} value={nodes} onChange={e => setCreateInput({ key: 'nodes', value: e.target.value })}/>

            <div className="create-button">
                <Button
                    label="Create"
                    width={240}
                    height={50}
                    onClick={async e => {
                        setLoading(true);

                        const tx = await arweave.createTransaction({ data: ` ` });

                        tx.addTag(`App-Name`, `SmartWeaveAction`);
                        tx.addTag(`App-Version`, `0.3.0`);
                        tx.addTag(`Contract`, Contract);
                        tx.addTag(
                            `Input`,
                            JSON.stringify({
                                function: 'create',
                                name,
                                url,
                                description,
                                consensus,
                                network,
                                networkAppName,
                                networkId,
                                token,
                                pool,
                                epoch,
                                distribution,
                                nodes
                            })
                        );

                        await arweave.transactions.sign(tx);
                        await arweave.transactions.post(tx);

                        setTimeout(() => {
                            window.location.href = '/marketplace';
                        }, 5000);
                    }}
                />
            </div>

            <div className={`loading ${loading ? 'active' : ''}`}>
                <AiOutlineLoading3Quarters className="icon"/>
                <h3>Creating New Network... Please wait...</h3>
                <h4>Redirects to Marketplace on completion</h4>
            </div>
        </MarketplaceCreateContainer>
    )
}

export const MarketplaceCreate = connect(MarketplaceCreateState, { setCreateInput })(MarketplaceCreateComponent);