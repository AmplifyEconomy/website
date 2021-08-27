import { FC } from 'react';
import styled from 'styled-components';

export const MarketplaceOptionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 0 15px 0;
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
`;

export const MarketplaceOptions: FC = () => {
    return (
        <MarketplaceOptionsContainer>
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
              <div className="cb active"></div>
              App Node  
            </a>
            <a className="option">
              <div className="cb active"></div>
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
        </MarketplaceOptionsContainer>
    );
}