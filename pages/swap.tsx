import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { MarketplaceDisclaimer } from '../components/marketplace/marketplace.disclaimer';
import { Arconnect } from '../components/shared/shared.arconnect';
import { SwapVerto } from '../components/swap/swap.verto';
import { SwapApp } from '../components/swap/swap.app';

export const Swap: FC = () => {
    return (
      <AppContainer>
        <Metadata title={`Amplify | Swap`} />
        <MarketplaceDisclaimer/>

        <div className="white-wrap">
            <Arconnect/>
            <SwapVerto/>
            <SwapApp/>
        </div>        
      </AppContainer>
    )
  }
  
  export default Swap;