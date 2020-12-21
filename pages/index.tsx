import { FC } from 'react';
import { AppContainer } from '../theme/Theme.page';
import { IndexTitle } from '../components/index/Index.title';
import { IndexMining } from '../components/index/Index.mining';

export const Index:FC = () => {
  return (
    <AppContainer>
      <IndexTitle />
      <IndexMining />
    </AppContainer>
  )
}

export default Index;