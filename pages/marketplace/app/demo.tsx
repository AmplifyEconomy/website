import { FC } from 'react';
import { Metadata } from '../../../components/shared/shared.metadata';
import { AppContainer } from '../../../theme/Theme.page';
import { Arconnect } from '../../../components/shared/shared.arconnect';
import { MarketplaceDisclaimer } from '../../../components/marketplace/marketplace.disclaimer';
import { MarketplaceApp } from '../../../components/marketplace/marketplace.app';

export const Marketplace: FC = () => {
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