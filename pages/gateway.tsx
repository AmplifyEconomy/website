import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { GatewayTitle } from '../components/gateway/gateway.title';
import { GatewayURL } from '../components/gateway/gateway.url';
import { GatewayStatus } from '../components/gateway/gateway.status';

export const Index: FC = () => {
  return (
    <AppContainer>
      <Metadata title={`Amplify | Gateway`} />
      <GatewayTitle/>
      <GatewayURL/>
      <GatewayStatus/>
    </AppContainer>
  )
}

export default Index;