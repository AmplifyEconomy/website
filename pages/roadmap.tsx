import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { RoadmapTitle } from '../components/roadmap/roadmap.title';
import { RoadmapIntro } from '../components/roadmap/roadmap.intro';
import { RoadmapItems } from '../components/roadmap/roadmap.items';

export const Roadmap: FC = () => {
    return (
      <AppContainer>
        <Metadata title={`Amplify | Roadmap`} />
        <RoadmapTitle/>
        <RoadmapIntro/>
        <RoadmapItems/>
      </AppContainer>
    )
}
  
  export default Roadmap;