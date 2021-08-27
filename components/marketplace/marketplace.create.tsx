import { FC } from 'react';
import styled from 'styled-components';

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
    
        a.option {
            display: flex;
            align-items: center;
            width: 50%;
            height: 40px;
            padding: 0 30px;
            cursor: pointer;
    
            &:hover {
                div.cb {
                    background: rgba(185, 177, 254, 0.5);
                }
            }
    
            div.cb {
                border: 3px solid #B9B1FE;
                margin: 0 15px 0 0;
                width: 20px;
                height: 20px;
    
                &.active {
                    background: #B9B1FE;
                }
            }
    
            &.inactive {
              opacity: 0.25;
            }
        }
    }

    div.create-button {
        display: flex;
        justify-content: flex-end;
        padding: 30px;

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
`;

export const MarketplaceCreate: FC = () => {
    return(
        <MarketplaceCreateContainer>
            <h2>Create A New Network</h2>
            
            <p>Network Name</p>
            <input type="text" placeholder="Name of Network..."/>

            <p>Network URL</p>
            <input type="text" placeholder="A valid TLD..."/>

            <p>Description</p>

            <textarea placeholder="Description of Network"></textarea>

            <div className="traits">
                <p>Consensus Type</p>

                <a className="option">
                    <div className="cb active"></div>
                    Approval Based  
                </a>

                <a className="option inactive">
                    <div className="cb"></div>
                    Quorum (Experimental)
                </a>

                <p>Network Type</p>

                <a className="option">
                    <div className="cb active"></div>
                    Full Node  
                </a>
                <a className="option">
                    <div className="cb"></div>
                    App Node  
                </a>
                <a className="option">
                    <div className="cb"></div>
                    Custom Node  
                </a>

                <p>Token Distribution</p>

                <a className="option">
                    <div className="cb active"></div>
                    AMP  
                </a>
                <a className="option">
                    <div className="cb"></div>
                    AR  
                </a>
                <a className="option">
                    <div className="cb"></div>
                    PST  
                </a>
                <a className="option">
                    <div className="cb"></div>
                    Custom  
                </a>
            </div>

            <p>Initial Pool (in AMP)</p>
            <input type="number" placeholder="#" min={0}/>

            <p>Epoch (in blocks)</p>
            <input type="number" placeholder="#" min={0}/>

            <p>Epoch Distribution (in AMP)</p>
            <input type="number" placeholder="#" min={0}/>

            <p>Maximum Nodes</p>
            <input type="number" placeholder="#" min={0}/>

            <div className="create-button">
                <a className="button">Create</a>
            </div>
        </MarketplaceCreateContainer>
    )
}