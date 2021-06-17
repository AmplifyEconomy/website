import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { Title } from '../components/shared/shared.title';
import { DaomainThesis } from '../components/daomains/daomains.thesis';

export const Roadmap: FC = () => {
    return (
      <AppContainer>
        <Metadata title={`Amplify | DAOmains`} />
        <Title image="/image/amplify.white.png" title="DAOmains" subTitle="Redefining ownership of TLDs with DAOs" />
        <DaomainThesis/>
      </AppContainer>
    )
}
  
  export default Roadmap;