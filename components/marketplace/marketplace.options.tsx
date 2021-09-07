import { FC } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setSearchToggle } from '../../redux/redux.app';
import { Checkbox } from '../shared/shared.checkbox';

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

            <Checkbox label="Approval Based" active={true}/>
            <Checkbox label="Quorum (Experimental)" active={false} disabled={true}/>

            <p>Network Type</p>

            <Checkbox label="Full Node" active={network.full} onClick={e => setSearchToggle({ section: 'network', key: 'full', value: !network.full})}/>
            <Checkbox label="App Node" active={network.app} onClick={e => setSearchToggle({ section: 'network', key: 'app', value: !network.app})}/>
            <Checkbox label="Custom Node" active={network.custom} disabled={true}/>

            <p>Token Distribution</p>

            <Checkbox label="AMP" active={true}/>
            <Checkbox label="AR" active={false} disabled={true}/>
            <Checkbox label="PST" active={false} disabled={true}/>
            <Checkbox label="Custom" active={false} disabled={true}/>
        </MarketplaceOptionsContainer>
    );
}

export const MarketplaceOptions = connect(MarketplaceOptionsState, { setSearchToggle })(MarketplaceOptionsComponent)