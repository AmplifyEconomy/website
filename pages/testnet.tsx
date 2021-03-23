import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { TestnetTitle } from '../components/testnet/testnet.title';
import { TestnetConnect } from '../components/testnet/testnet.connect';
import { TestnetStatus } from '../components/testnet/testnet.status';
import { TestnetFaucet } from '../components/testnet/testnet.faucet';

export const Testnet: FC = () => {
    return (
      <AppContainer>
        <Metadata title={`Amplify | Testnet`} />
        <TestnetTitle/>
        <TestnetConnect/>
        <TestnetStatus/>
        <TestnetFaucet/>
      </AppContainer>
    )
}
  
  export default Testnet;