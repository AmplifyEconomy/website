import { FC } from 'react';
import { Metadata } from '../../components/shared/shared.metadata';
import { AppContainer } from '../../theme/Theme.page';
import { Arconnect } from '../../components/shared/shared.arconnect';
import { MarketplaceDisclaimer } from '../../components/marketplace/marketplace.disclaimer';
import { MarketplaceCreate } from '../../components/marketplace/marketplace.create';

export const Marketplace: FC = () => {
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