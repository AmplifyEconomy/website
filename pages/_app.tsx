import '../theme/Reset.css';
import App, { AppContext, AppInitialProps } from 'next/app';
import { wrapper } from '../redux/redux.store';
import { RootContainer } from '../theme/Theme.page';
import { Header } from '../components/shared/shared.header';

export class Website extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        appProp: ctx.pathname
      }
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <RootContainer>
        <video autoPlay loop muted>
          <source src="/video/bg.mp4" type="video/mp4" />
        </video>

        <Header/>
        <Component {...pageProps} />
      </RootContainer>
    )
  }
}

export default wrapper.withRedux(Website);