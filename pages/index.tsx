import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { IndexTitle } from '../components/index/index.title';
import { IndexMining } from '../components/index/index.mining';

export const Index: FC = () => {
  return (
    <AppContainer>
      <Metadata />
      <IndexTitle />
      <IndexMining />
    </AppContainer>
  )
}

export default Index;