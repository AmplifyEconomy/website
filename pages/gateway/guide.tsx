import { FC } from 'react';
import { Metadata } from '../../components/shared/shared.metadata';
import { AppContainer } from '../../theme/Theme.page';
import { GatewayGuide } from '../../components/gateway-guide/gateway.guide';

export const GatewayGuidePage: FC = () => {
  return (
    <AppContainer>
      <Metadata title={`Amplify | Gateway Guide`} />
      <GatewayGuide/>
    </AppContainer>
  )
}

export default GatewayGuidePage;