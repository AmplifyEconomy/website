import { FC } from 'react';
import styled from 'styled-components';

import { setPopup } from '../../../redux/redux.app';

import { connect } from 'react-redux';

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

export const AppManageState = state => ({
    popup: state.app.popup,
})

export interface AppManageI {
    popup: boolean;
    setPopup(state: boolean): void;
}

export const AppManageComponent: FC<AppManageI> = ({ popup, setPopup }) => {
    return(
        <AppManageContainer>
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
                        <a className="manage-link" onClick={e => setPopup(false)}>
                            Cancel
                        </a>
                        <a className="manage-button">
                            Update
                        </a>
                    </div>

                </div>
            </div>
        </AppManageContainer>
    )
}

export const AppManage = connect(AppManageState, { setPopup })(AppManageComponent);