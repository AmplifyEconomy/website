import { FC, useLayoutEffect } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { Arconnect } from '../components/shared/shared.arconnect';
import { MarketplaceSearch } from '../components/marketplace/marketplace.search';
import { MarketplaceDisclaimer } from '../components/marketplace/marketplace.disclaimer';
import { MarketplaceOptions } from '../components/marketplace/marketplace.options';
import { MarketplaceResults } from '../components/marketplace/marketplace.results';

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
        <Metadata title={`Amplify | Marketplace`} />
        <MarketplaceDisclaimer/>

        <div className="white-wrap">
          <MarketplaceSearch/>
          <Arconnect/>
          <MarketplaceOptions/>
          <MarketplaceResults/>
        </div>        
      </AppContainer>
    )
  }
  
  export default Marketplace;