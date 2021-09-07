import { useRouter } from 'next/router';
import { FC, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Metadata } from '../../../components/shared/shared.metadata';
import { AppContainer } from '../../../theme/Theme.page';
import { Arconnect } from '../../../components/shared/shared.arconnect';
import { MarketplaceDisclaimer } from '../../../components/marketplace/marketplace.disclaimer';
import { MarketplaceApp } from '../../../components/marketplace/marketplace.app';
import { setName } from '../../../redux/redux.marketplace';

declare const window;

export const MarketplaceState = state => ({

});

export interface MarketplaceI {
  setName(state: string): void;
}

export const MarketplaceComponent: FC<MarketplaceI> = ({ setName }) => {
  const router = useRouter();
  const { name } = router.query;

  useLayoutEffect(() => {
    setName(name as string);

    window.addEventListener('arweaveWalletLoaded', () => {
      window.dispatchEvent(new CustomEvent('loadWallet'));
    });

    if (window.arweaveWallet) {
      window.dispatchEvent(new CustomEvent('loadWallet'));
    }
  }, []);

    return (
      <AppContainer>
        <Metadata title={name as string} />
        <MarketplaceDisclaimer/>

        <div className="white-wrap">
          <Arconnect/>  
          <MarketplaceApp/>
        </div>
      </AppContainer>
    )
  }

  export const Marketplace = connect(MarketplaceState, { setName })(MarketplaceComponent);
  
  export default Marketplace;