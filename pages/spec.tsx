import { FC } from 'react';
import { Metadata } from '../components/shared/shared.metadata';
import { AppContainer } from '../theme/Theme.page';
import { SpecIntro } from '../components/spec/spec.intro';
import { SpecHistogram } from '../components/spec/spec.histogram';
import { SpecDHT } from '../components/spec/spec.dht';

export const Spec: FC = () => {
    return (
      <AppContainer>
        <Metadata title={`Amplify | New Spec`} />

        <div className="white-wrap">
            <SpecIntro/>
            <SpecHistogram/>
            <SpecDHT/>
        </div>        
      </AppContainer>
    )
  }
  
  export default Spec;