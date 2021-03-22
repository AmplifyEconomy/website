import { FC } from 'react';
import styled from 'styled-components';

export const IndexMiningContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 0 120px 0;

  div.wrap {
    width: 100%;
    max-width: 768px;
    min-height: 180px;
    border-bottom: 2px dashed black;
    padding: 45px 15px;

    &:last-of-type { border-bottom: none; }

    h2 {
      font-weight: 300;
      font-size: 24px;
      padding: 0 0 30px 0;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  @media (max-width: 640px) {
    div.wrap {
      width: auto;
      padding: 45px 30px;

      line-height: 1.5;

      h2 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`;

export const IndexMining:FC = () => {
  return (
    <IndexMiningContainer>
      <div className="wrap">
        <h2>A mining protocol for Bandwidth</h2>
        <p>
          Amplify is a new and revolutionary way to utilize your available bandwidth to upload
          and download data from Arweave Nodes. You can run an Amplify Gateway locally or on the
          cloud to start sharing your bandwidth immediately. You can also use the Amplify SDK to
          access data from Arweave using the Amplify Network.
        </p>
      </div>
      <div className="wrap">
        <h2>Earn money powering the Network</h2>
        <p>
          By having your Amplify node available on the network with your tokens staked. You earn AMP tokens
          from daily distributions. Furthermore, you could even potentially have existing miners for Bitcoin
          and Ethereum use Amplify ontop of them. Amplify primarily requires bandwidth and a functional network,
          not CPU power that cryptocurrencies like Bitcoin and Ethereum demand.
        </p>
      </div>
      <div className="wrap">
        <h2>A trustless peer to peer protocol</h2>
        <p>
          Amplify is a completely trustless consensus protocol. Where each Amplify node has probe nodes testing and
          querying it's peers. Consensus is achieved when all nodes are behaving and outputting data correctly. If a node
          outputs data incorrectly, it will be booted from the Amplify network and that node's tokens are distributed to the
          rest of the peers on the network.
        </p>
      </div>
      <div className="wrap">
        <h2>An SDK to access the Permaweb</h2>
        <p>
          Amplify provides you the most effective and easy way to access Arweave. You can access anything on the permaweb
          by utilizing the Amplify SDK. The SDK also makes it easy to find Amplify nodes in specific locations or that aren't
          overloaded with traffic. This ensures that you have a great experience while querying data from the Permaweb with
          little or no problems.
        </p>
      </div>
    </IndexMiningContainer>
  )
}
