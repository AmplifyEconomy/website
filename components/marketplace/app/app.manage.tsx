import { FC, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { arweave, Contract } from '../../../arweave';

export const AppManageContainer = styled.div`
    input {
        font-size: 18px;
        width: 100%;
        height: 60px;
        padding: 0 15px;
        margin: 0 0 30px 0;
        border: 2px solid #B9B1FE;
        border-radius: 5px;
        outline: none;
    }

    div.tabs {
        display: flex;
        align-items: center;
        padding: 15px 0;

        a.tab {
            background: hsla(202, 100%, 84%, 1);
            background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );
    
            display: flex;
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 40px;
            font-size: 18px;
            font-weight: 700;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            margin: 0 15px 0 0;

            text-decoration: none;

            opacity: 0.5;
            &.active {
                opacity: 1;
            }
        }
    }

    div.tab-content {
        display: none;
        &.active {
            display: block;
        }
    }

    div.manage-network-popup {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.25);
        z-index: 1111;

        display: none;
        align-items: center;
        justify-content: center;

        &.active { display: flex; }

        div.manage-network-wrap {
            position: relative;
            width: 100%;
            max-width: 1200px;
            max-height: 80vh;
            overflow: auto;
            background: white;
            box-shadow: 0 0 45px rgba(0, 0, 0, 0.25);
            padding: 30px;
        }

        div.node {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            border-bottom: 2px dashed rgb(230, 230, 230);
            padding: 5px 0;

            div.node-column {
                padding: 10px 0;
                width: 35%;

                &.full {
                    width: 65%;
                }

                p {
                    font-size: 12px;
                    font-weight: bold;
                    padding: 0 0 5px 0;
                }

                h4 {
                    font-size: 18px;
                }

                &.options {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;

                    a.option {
                        font-size: 18px;
                        color: #B9B1FE;
                        text-decoration: underline;
                        padding: 15px;
                        cursor: pointer;
                    }
                }
            }
        }

        div.edit {
            padding: 45px 0 0 0;

            input {
                height: 50px;
                font-size: 16px;
            }
        }

        div.manage-buttons {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 30px 0 0 0;

            a.manage-link {
                font-size: 24px;
                color: #B9B1FE;
                text-decoration: underline;
                padding: 15px;
                margin: 0 15px 0 0;
                cursor: pointer;
            }
        }
    }

    div.empty-context {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 180px;
    }

    h3.pool {
        font-weight: bold;
        text-align: center;
        padding: 45px 0;
    }

    a.delete-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 240px;
        height: 60px;
        background: red;
        color: white;
        margin: 15px auto;
        font-size: 24px;
        font-weight: bold;
        border-radius: 9px;
    }

    div.edit-button-wrap {
        display: flex;
        justify-content: flex-end;

        a.edit-button {
            background: hsla(202, 100%, 84%, 1);
            background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
            filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );
    
            display: flex;
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
        background: rgba(0, 0, 0, 0.5);
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

export interface AppManageI {
    popup: boolean;
    name: string;
    networks: any;
    setPopup(state: boolean): void;
}

export const AppManage: FC<AppManageI> = ({ popup, name, networks, setPopup }) => {
    const [tab, setTab] = useState(0);
    const [topup, setTopup] = useState(0);
    const [loading, setLoading] = useState(false);

    if (!networks[name]) {
        return (<AppManageContainer/>)
    }

    return(
        <AppManageContainer>
            <div className={`manage-network-popup ${popup ? 'active' : ''}`}>
                <div className="manage-network-wrap">
                    <div className={`loading ${loading ? 'active' : ''}`}>
                        <AiOutlineLoading3Quarters className="icon"/>
                        <h3>Processing Action... Please Wait...</h3>
                    </div>

                    <h3>Manage Network</h3>

                    <div className="tabs">
                        <a className={`tab ${tab === 0 ? 'active' : ''}`} onClick={e => setTab(0)}>
                            Active Nodes
                        </a>
                        <a className={`tab ${tab === 1 ? 'active' : ''}`} onClick={e => setTab(1)}>
                            Pending Nodes
                        </a>
                        <a className={`tab ${tab === 2 ? 'active' : ''}`} onClick={e => setTab(2)}>
                            Top up Pool
                        </a>
                        <a className={`tab ${tab === 3 ? 'active' : ''}`} onClick={e => setTab(3)}>
                            Delete Network
                        </a>
                    </div>

                    <div className={`tab-content ${tab === 0 ? 'active' : ''}`}>
                        {
                            Object.keys(networks[name].nodes).length === 0 ?
                            <div className="empty-context">
                                <h3>No Active Nodes</h3>
                            </div> : ''
                        }

                        {
                            Object.keys(networks[name].nodes).map(key => {
                                const node = networks[name].nodes[key];

                                return(
                                <div className="node">
                                    <div className="node-column">
                                        <p>Node URL</p>
                                        <h4>{node.url}</h4>
                                    </div>
                                    <div className="node-column full">
                                        <p>Node Arweave Address</p>
                                        <h4>{key}</h4>
                                    </div>
                                    <div className="node-column full options">
                                        <a className="option" onClick={async e => {
                                            setLoading(true);

                                            const tx = await arweave.createTransaction({ data: ` ` });
                        
                                            tx.addTag(`App-Name`, `SmartWeaveAction`);
                                            tx.addTag(`App-Version`, `0.3.0`);
                                            tx.addTag(`Contract`, Contract);
                                            tx.addTag(
                                                `Input`,
                                                JSON.stringify({
                                                    function: 'quarantine',
                                                    name,
                                                    address: key
                                                })
                                            );
                        
                                            await arweave.transactions.sign(tx);
                                            await arweave.transactions.post(tx);

                                            setLoading(false);
                                        }}>
                                            Quarantine Node
                                        </a>
                                        <a className="option" onClick={async e => {
                                            setLoading(true);

                                            const tx = await arweave.createTransaction({ data: ` ` });
                        
                                            tx.addTag(`App-Name`, `SmartWeaveAction`);
                                            tx.addTag(`App-Version`, `0.3.0`);
                                            tx.addTag(`Contract`, Contract);
                                            tx.addTag(
                                                `Input`,
                                                JSON.stringify({
                                                    function: 'remove',
                                                    name,
                                                    address: key
                                                })
                                            );
                        
                                            await arweave.transactions.sign(tx);
                                            await arweave.transactions.post(tx);

                                            setLoading(false);
                                        }}>
                                            Remove Node
                                        </a>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>

                    <div className={`tab-content ${tab === 1 ? 'active' : ''}`}>
                        {
                            Object.keys(networks[name].pendingNodes).length === 0 ?
                            <div className="empty-context">
                                <h3>No Pending Nodes</h3>
                            </div> : ''
                        }

                        {
                            Object.keys(networks[name].pendingNodes).map(key => {
                                const node = networks[name].pendingNodes[key];

                                return(
                                <div className="node">
                                    <div className="node-column">
                                        <p>Node URL</p>
                                        <h4>{node.url}</h4>
                                    </div>
                                    <div className="node-column full">
                                        <p>Node Arweave Address</p>
                                        <h4>{key}</h4>
                                    </div>
                                    <div className="node-column full options">
                                        <a className="option" onClick={async e => {
                                            setLoading(true);

                                            const tx = await arweave.createTransaction({ data: ` ` });
                        
                                            tx.addTag(`App-Name`, `SmartWeaveAction`);
                                            tx.addTag(`App-Version`, `0.3.0`);
                                            tx.addTag(`Contract`, Contract);
                                            tx.addTag(
                                                `Input`,
                                                JSON.stringify({
                                                    function: 'reject',
                                                    name,
                                                    address: key
                                                })
                                            );
                        
                                            await arweave.transactions.sign(tx);
                                            await arweave.transactions.post(tx);

                                            setLoading(false);
                                        }}>
                                            Reject Node
                                        </a>
                                        <a className="option" onClick={async e => {
                                            setLoading(true);

                                            const tx = await arweave.createTransaction({ data: ` ` });
                        
                                            tx.addTag(`App-Name`, `SmartWeaveAction`);
                                            tx.addTag(`App-Version`, `0.3.0`);
                                            tx.addTag(`Contract`, Contract);
                                            tx.addTag(
                                                `Input`,
                                                JSON.stringify({
                                                    function: 'approve',
                                                    name,
                                                    address: key
                                                })
                                            );
                        
                                            await arweave.transactions.sign(tx);
                                            await arweave.transactions.post(tx);

                                            setLoading(false);
                                        }}>
                                            Approve Node
                                        </a>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>

                    <div className={`tab-content ${tab === 2 ? 'active' : ''}`}>
                        <h3 className="pool">Current Pool Funds: {networks[name].pool} AMP</h3>

                        <div className="edit">
                            <p>Top up Pool</p>
                            <input type="number" placeholder="#" min={0} value={topup} onChange={e => setTopup(parseFloat(e.target.value))}/>
                        </div>
                        <div className="edit-button-wrap">
                            <a className="edit-button" onClick={async e => {
                                setLoading(true);

                                const tx = await arweave.createTransaction({ data: ` ` });
            
                                tx.addTag(`App-Name`, `SmartWeaveAction`);
                                tx.addTag(`App-Version`, `0.3.0`);
                                tx.addTag(`Contract`, Contract);
                                tx.addTag(
                                    `Input`,
                                    JSON.stringify({
                                        function: 'topup',
                                        name,
                                        pool: topup,
                                    })
                                );
            
                                await arweave.transactions.sign(tx);
                                await arweave.transactions.post(tx);

                                setLoading(false);
                            }}>Top Up</a>
                        </div>
                    </div>

                    <div className={`tab-content ${tab === 3 ? 'active' : ''}`}>
                        <h3 className="pool">This action is not reversible.</h3>
                        <a className="delete-button" onClick={async e => {
                            setLoading(true);

                            const tx = await arweave.createTransaction({ data: ` ` });
        
                            tx.addTag(`App-Name`, `SmartWeaveAction`);
                            tx.addTag(`App-Version`, `0.3.0`);
                            tx.addTag(`Contract`, Contract);
                            tx.addTag(
                                `Input`,
                                JSON.stringify({
                                    function: 'delete',
                                    name,
                                })
                            );
        
                            await arweave.transactions.sign(tx);
                            await arweave.transactions.post(tx);

                            setLoading(false);
                        }}>
                            Delete
                        </a>
                    </div>

                    <div className="manage-buttons">
                        <a className="manage-link" onClick={e => setPopup(false)}>
                            Close
                        </a>
                    </div>

                </div>
            </div>
        </AppManageContainer>
    )
}