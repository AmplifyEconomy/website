import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { MarketplaceSearch } from '../components/marketplace/marketplace.search';
import { MarketplaceDisclaimer } from '../components/marketplace/marketplace.disclaimer';
import { MarketplaceOptions } from '../components/marketplace/marketplace.options';
import { MarketplaceResults } from '../components/marketplace/marketplace.results';

export const Marketplace: FC = () => {
    return (
      <AppContainer>
        <Metadata title={`Amplify | Marketplace`} />
        <MarketplaceDisclaimer/>

        <div className="white-wrap">
          <MarketplaceSearch/>
          <MarketplaceOptions/>
          <MarketplaceResults/>
        </div>        
      </AppContainer>
    )
  }
  
  export default Marketplace;