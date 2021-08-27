import { FC, useState } from 'react';
import styled from 'styled-components';

export const MarketplaceAppContainer = styled.div`
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

        border-bottom: 2px dashed rgb(230, 230, 230);
    }

    div.subtitle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 30px 0 15px 0;
        
        h3 {
            font-size: 24px;
            font-weight: bold;
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
        font-weight: bold;
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

        div.node-links {
            padding: 30px 0;

            div.node {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                border-bottom: 2px dashed rgb(230, 230, 230);
                padding: 10px 0;

                div.node-column {
                    padding: 10px 0;
                    width: calc(100% / 3);

                    &.full {
                        width: 100%;
                    }

                    p {
                        font-size: 12px;
                        font-weight: bold;
                        padding: 0 0 5px 0;
                    }

                    h4 {
                        font-size: 18px;
                    }
                }
            }
        }

        div.request {
            div.request-button {
                display: flex;
                justify-content: flex-end;

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
                    height: 50px;
                    font-size: 24px;
                    font-weight: 400;
                    color: white;
                    cursor: pointer;
                    border-radius: 5px;

                    text-decoration: none;
                }
            }
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
            width: 100%;
            max-width: 1200px;
            background: white;
            box-shadow: 0 0 45px rgba(0, 0, 0, 0.25);
            padding: 30px;
        }

        div.node {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            border-bottom: 2px dashed rgb(230, 230, 230);
            padding: 10px 0;

            div.node-column {
                padding: 10px 0;
                width: calc(100% / 3);

                &.full {
                    width: 100%;
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

            a.manage-button {
                background: hsla(202, 100%, 84%, 1);
                background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
                background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
                background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
                filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );
        
                display: flex;
                align-items: center;
                justify-content: center;
                width: 240px;
                height: 50px;
                font-size: 24px;
                font-weight: 400;
                color: white;
                cursor: pointer;
                border-radius: 5px;

                text-decoration: none;
            }
        }
    }
`;

export const MarketplaceApp: FC = () => {
    const [popup, togglePopup] = useState(false);

    return(
        <MarketplaceAppContainer>
            <div className="title">
                <img src="/image/amplify.png"/>

                <h3>
                    Amplify Main Network
                    <a className="network-link">(https://amp-gw.online)</a>
                </h3>

                <a className="edit-button" onClick={e => togglePopup(!popup)}>
                    Manage Network
                </a>
            </div>

            <div className={`manage-network-popup ${popup ? 'active' : ''}`}>
                <div className="manage-network-wrap">
                    <h3>Manage Network</h3>

                    <div className="node">
                        <div className="node-column">
                            <p>Node URL</p>
                            <h4>192.168.0.1</h4>
                        </div>
                        <div className="node-column">
                            <p>Tokens Received</p>
                            <h4>1,000,000 AMP</h4>
                        </div>
                        <div className="node-column">
                            <p>Date Joined</p>
                            <h4>August 1st, 2021</h4>
                        </div>
                        <div className="node-column full">
                            <p>Node Arweave Address</p>
                            <h4>dow7mxks0QGGV7zOmHEE1OOi5LyfHpcrDH9n0UPw9eY</h4>
                        </div>
                        <div className="node-column full options">
                            <a className="option">
                                Quarantine Node
                            </a>
                            <a className="option">
                                Release Node
                            </a>
                            <a className="option">
                                Remove Node
                            </a>
                        </div>
                    </div>

                    <div className="edit">
                        <p>Top up Epoch Pool</p>
                        <input type="number" placeholder="#" min={0}/>

                        <p>Change Epoch (in blocks)</p>
                        <input type="number" placeholder="#" min={0}/>

                        <p>Change Epoch Distribution (in AMP)</p>
                        <input type="number" placeholder="#" min={0}/>
                    </div>


                    <div className="manage-buttons">
                        <a className="manage-link" onClick={e => togglePopup(false)}>
                            Cancel
                        </a>
                        <a className="manage-button">
                            Update
                        </a>
                    </div>

                </div>
            </div>

            <div className="subtitle">
                <h3>100 AMP will be Distributed in 100 Blocks</h3>
            </div>
            <div className="text">
                <p>
                    This is the Amplify Main Network. Need to figure out a good description.
                </p>
            </div>
            <div className="text">
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

                <div className="node-links">
                    <h3>Active Nodes</h3>

                    <div className="node">
                        <div className="node-column">
                            <p>Node URL</p>
                            <h4>192.168.0.1</h4>
                        </div>
                        <div className="node-column">
                            <p>Tokens Received</p>
                            <h4>1,000,000 AMP</h4>
                        </div>
                        <div className="node-column">
                            <p>Date Joined</p>
                            <h4>August 1st, 2021</h4>
                        </div>
                        <div className="node-column full">
                            <p>Node Arweave Address</p>
                            <h4>dow7mxks0QGGV7zOmHEE1OOi5LyfHpcrDH9n0UPw9eY</h4>
                        </div>
                    </div>

                    <div className="node">
                        <div className="node-column">
                            <p>Node URL</p>
                            <h4>192.168.0.1</h4>
                        </div>
                        <div className="node-column">
                            <p>Tokens Received</p>
                            <h4>1,000,000 AMP</h4>
                        </div>
                        <div className="node-column">
                            <p>Date Joined</p>
                            <h4>August 1st, 2021</h4>
                        </div>
                        <div className="node-column full">
                            <p>Node Arweave Address</p>
                            <h4>dow7mxks0QGGV7zOmHEE1OOi5LyfHpcrDH9n0UPw9eY</h4>
                        </div>
                    </div>
                </div>

                <div className="request">
                    <h3>Request To Join</h3>

                    <p>Node URL</p>
                    <input type="text" placeholder="192.168.0.1"/>

                    <p>
                        Wallet Address
                        <a className="mini-button">
                            Click to use ArConnect
                        </a>
                    </p>
                    <input type="text" placeholder="Arweave Address"/>

                    <div className="request-button">
                        <a className="button">
                            Join
                        </a>
                    </div>
                </div>
            </div>
        </MarketplaceAppContainer>
    )
}