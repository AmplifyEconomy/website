import { FC } from 'react';
import { IndexMiningContainer } from './styles/Index.mining.styles';

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
