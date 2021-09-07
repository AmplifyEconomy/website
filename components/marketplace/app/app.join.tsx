import { FC, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { arweave, Contract } from '../../../arweave';
import { setJoinUrl, setJoinAddress } from '../../../redux/redux.app';

export const AppJoinContainer = styled.div`
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

export const AppJoinState = state => ({
    url: state.app.join.url,
    name: state.marketplace.name,
})

export interface AppJoinI {
    url: string;
    name: string;
    setJoinUrl(state: string): void;
}

export const AppJoinComponent: FC<AppJoinI> = ({ url, name, setJoinUrl }) => {
    const [loading, setLoading] = useState(false);

    return(
        <AppJoinContainer>
            <div className="request">
                <h3>Request To Join</h3>

                <p>Node URL</p>
                <input type="text" placeholder="192.168.0.1" value={url} onChange={e => setJoinUrl(e.target.value)}/>

                <div className="request-button">
                    <a className="button" onClick={async e => {
                        setLoading(true);

                        const tx = await arweave.createTransaction({ data: ` ` });
    
                        tx.addTag(`App-Name`, `SmartWeaveAction`);
                        tx.addTag(`App-Version`, `0.3.0`);
                        tx.addTag(`Contract`, Contract);
                        tx.addTag(
                            `Input`,
                            JSON.stringify({
                                function: 'join',
                                name,
                                url,
                            })
                        );
    
                        await arweave.transactions.sign(tx);
                        await arweave.transactions.post(tx);

                        setTimeout(() => {
                            window.location.reload();
                        }, 5000);
                    }}>
                        Join
                    </a>
                </div>

                <div className={`loading ${loading ? 'active' : ''}`}>
                    <AiOutlineLoading3Quarters className="icon"/>
                    <h3>Creating join request... Please wait...</h3>
                    <h4>Page will refresh on completion...</h4>
                </div>
            </div>
        </AppJoinContainer>
    )
}

export const AppJoin = connect(AppJoinState, { setJoinUrl, setJoinAddress })(AppJoinComponent);