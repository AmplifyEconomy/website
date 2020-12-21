import { FC } from 'react';
import { IndexTitleContainer } from './styles/Index.title.styles';

export const IndexTitle:FC = () => {
  return (
    <IndexTitleContainer>
      <div className="title-text">
        <img src="/image/amplify.png" className="logo" />
        <div className="text">
          <h1>Amplify</h1>
          <h2>The Distributed Economy For Bandwidth</h2>
        </div>
      </div>
    </IndexTitleContainer>
  )
}
