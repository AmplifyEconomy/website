import { FC } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setPopup } from '../../redux/redux.app';

import { AppNodes } from './app/app.nodes';
import { AppJoin } from './app/app.join';
import { AppManage } from './app/app.manage';

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
`;

export const MarketplaceAppState = state => ({
    popup: state.app.popup,
});

export interface MarketplaceAppI {
    popup: boolean;
    setPopup(state: boolean): void;
}

export const MarketplaceAppComponent: FC<MarketplaceAppI> = ({ popup, setPopup }) => {
    return(
        <MarketplaceAppContainer>
            <div className="title">
                <img src="/image/amplify.png"/>

                <h3>
                    Amplify Main Network
                    <a className="network-link">(https://amp-gw.online)</a>
                </h3>

                <a className="edit-button" onClick={e => setPopup(!popup)}>
                    Manage Network
                </a>
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

                <AppNodes/>
                <AppJoin/>
                <AppManage/>

            </div>
        </MarketplaceAppContainer>
    )
}

export const MarketplaceApp = connect(MarketplaceAppState, { setPopup })(MarketplaceAppComponent);