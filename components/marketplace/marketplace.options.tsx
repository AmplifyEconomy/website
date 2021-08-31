import { FC } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setSearchToggle } from '../../redux/redux.app';

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

export const MarketplaceOptionsState = state => ({
  consensus: {
    approval: state.app.search.consensus.approval,
    quorum: state.app.search.consensus.quorum,
  },
  network: {
    full: state.app.search.network.full,
    app: state.app.search.network.app,
    custom: state.app.search.network.custom,
  },
  token: {
    amp: state.app.search.token.amp,
    ar: state.app.search.token.ar,
    pst: state.app.search.token.pst,
    custom: state.app.search.token.custom,
  },
})

export interface MarketplaceOptionsI {
  consensus: {
    approval: boolean,
    quorum: boolean,
  },
  network: {
    full: boolean,
    app: boolean,
    custom: boolean,
  },
  token: {
    amp: boolean,
    ar: boolean,
    pst: boolean,
    custom: boolean,
  },

  setSearchToggle(state: { section: string, key: string, value: boolean, }): void;
}

export const MarketplaceOptionsComponent: FC<MarketplaceOptionsI> = ({ consensus, network, token, setSearchToggle }) => {
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

            <a className="option" onClick={e => setSearchToggle({ section: 'network', key: 'full', value: !network.full})}>
              <div className={`cb ${network.full ? 'active' : ''}`}></div>
              Full Node  
            </a>
            <a className="option" onClick={e => setSearchToggle({ section: 'network', key: 'app', value: !network.app})}>
              <div className={`cb ${network.app ? 'active' : ''}`}></div>
              App Node  
            </a>
            <a className="option inactive">
              <div className={`cb ${network.custom ? 'active' : ''}`}></div>
              Custom Node  
            </a>

            <p>Token Distribution</p>

            <a className="option" onClick={e => setSearchToggle({ section: 'token', key: 'amp', value: !token.amp})}>
              <div className={`cb ${token.amp ? 'active' : ''}`}></div>
              AMP  
            </a>
            <a className="option" onClick={e => setSearchToggle({ section: 'token', key: 'ar', value: !token.ar})}>
              <div className={`cb ${token.ar ? 'active' : ''}`}></div>
              AR  
            </a>
            <a className="option inactive">
              <div className={`cb ${token.pst ? 'active' : ''}`}></div>
              PST  
            </a>
            <a className="option inactive">
              <div className={`cb ${token.custom ? 'active' : ''}`}></div>
              Custom  
            </a>
        </MarketplaceOptionsContainer>
    );
}

export const MarketplaceOptions = connect(MarketplaceOptionsState, { setSearchToggle })(MarketplaceOptionsComponent)