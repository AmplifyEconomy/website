import { FC, useLayoutEffect } from 'react';
import { Metadata } from '../../components/shared/shared.metadata';
import { AppContainer } from '../../theme/Theme.page';
import { Arconnect } from '../../components/shared/shared.arconnect';
import { MarketplaceDisclaimer } from '../../components/marketplace/marketplace.disclaimer';
import { MarketplaceCreate } from '../../components/marketplace/marketplace.create';

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
        <Metadata title={`Amplify | Create A Network`} />
        <MarketplaceDisclaimer/>

        <div className="white-wrap">
            <Arconnect/>
            <MarketplaceCreate/>
        </div>
      </AppContainer>
    )
  }
  
  export default Marketplace;