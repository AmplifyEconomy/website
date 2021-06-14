import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { Title } from '../components/shared/shared.title';
import { TestnetConnect } from '../components/testnet/testnet.connect';
import { TestnetStatus } from '../components/testnet/testnet.status';
import { TestnetFaucet } from '../components/testnet/testnet.faucet';

export const Testnet: FC = () => {
    return (
      <AppContainer>
        <Metadata title={`Amplify | Testnet`} />
        <Title image="/image/arweave.white.png" title="Testnet" subTitle="For Arweave using Testweave" />
        <TestnetConnect/>
        <TestnetStatus/>
        <TestnetFaucet/>
      </AppContainer>
    )
}
  
  export default Testnet;