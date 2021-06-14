import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { Title } from '../components/shared/shared.title';
import { RoadmapIntro } from '../components/roadmap/roadmap.intro';
import { RoadmapItems } from '../components/roadmap/roadmap.items';

export const Roadmap: FC = () => {
    return (
      <AppContainer>
        <Metadata title={`Amplify | Roadmap`} />
        <Title image="/image/amplify.white.png" title="Amplify" subTitle="Roadmap and Project Goals" />
        <RoadmapIntro/>
        <RoadmapItems/>
      </AppContainer>
    )
}
  
  export default Roadmap;