import { FC, useLayoutEffect } from 'react';
import { Metadata } from '../../../components/shared/shared.metadata';
import { AppContainer } from '../../../theme/Theme.page';
import { Arconnect } from '../../../components/shared/shared.arconnect';
import { MarketplaceDisclaimer } from '../../../components/marketplace/marketplace.disclaimer';
import { MarketplaceApp } from '../../../components/marketplace/marketplace.app';

declare const window;

export const Marketplace: FC = () => {
  useLayoutEffect(() => {
    window.addEventListener('arweaveWalletLoaded', () => {
      window.dispatchEvent(new CustomEvent('loadWallet'));
    });

    if (window.arweaveWallet) {
      window.dispatchEvent(new CustomEvent('loadWallet'));
    }
  }, []);

    return (
      <AppContainer>
        <Metadata title={`Amplify Main Network`} />
        <MarketplaceDisclaimer/>

        <div className="white-wrap">
          <Arconnect/>  
          <MarketplaceApp/>
        </div>
      </AppContainer>
    )
  }
  
  export default Marketplace;