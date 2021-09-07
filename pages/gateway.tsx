import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { Title } from '../components/shared/shared.title';
import { GatewayURL } from '../components/gateway/gateway.url';
import { GatewayStatus } from '../components/gateway/gateway.status';
import { GatewayAKT } from '../components/gateway/gateway.akt';
import { GatewayCluster } from '../components/gateway/gateway.cluster';

export const Gateway: FC = () => {
  return (
    <AppContainer>
      <Metadata title={`Amplify | Gateway`} />
      <Title image="/image/amplify.white.png" title="Amplify" subTitle="Gateway Cluster and Network" />
      <GatewayURL/>
      <GatewayStatus/>
      <GatewayAKT/>
    </AppContainer>
  )
}

export default Gateway;