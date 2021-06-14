import '../theme/Reset.css';
import { RootContainer } from '../theme/Theme.page';
import App, { AppContext, AppInitialProps } from 'next/app';
import { Header } from '../components/shared/shared.header';

export default class Website extends App<AppInitialProps> {
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