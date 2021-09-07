import { FC } from 'react';
import styled from 'styled-components';

export const SpecIntroContainer = styled.div`
    margin: 90px 0 0 0;
    padding: 30px;

    h2 {
        font-size: 32px;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 0 0 30px 0;
    }

    h3 {
        font-size: 24px;
        font-weight: 300;
        letter-spacing: 0.5px;
        padding: 30px 0;
    }

    p {
        font-size: 18px;
        padding: 0 0 15px 0;
        line-height: 1.5;
    }

    div.images {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        img {
            max-width: 100%;
            margin: 30px;
        }
    }
`;

export const SpecIntro: FC = () => {
    return(
        <SpecIntroContainer>
            <h2>Launching Amplify</h2>
            <p>
                After what was essentially a failure to launch with the new Arweave Gateways. I think it's absolutely appropriate to discuss
                what went wrong, and, making sure that the Amplify project moves forward properly. Probably the forthmost thing was simply just
                deploying a new node altogether. Deploying an indexed version of Arweave's entire network on even a $1000 VPS instance is simply
                not practical.
                With the new proposed spec for Gateways using a sharded DHT. It removes a lot of the pain
                of having to spin up new nodes effectively. Furthermore, the more immediate term launch of app nodes will have an even lower barrier
                to deployment.
            </p>
            <p>
                The next biggest issue were Smartweave Contracts. The Gateway didn't even support plugging into a Smartweave API. Which was a huge oversight
                on my end since I simply was not focused on dApp development for a long period of time. Gateways 100% must support precaching transactions
                so that dApps can have relatively instant interactions on a web interface. Right now, confirmation of blocks take a considerable amount of time
                and that hinders UX. Further out, we want to have the new filesystem API integrated with Smartweave states to further augment real time transaction
                interactions.
            </p>

            <h3>Starting Smaller</h3>
            <p>
                Most immediate term for Amplify is launching with app specific nodes. It's fairly straight forward to retrofit existing Gateways to only filter
                for a specific contract, tags and so forth. Working on these app nodes will allow for the Amplify Network to launch right now and then allow us to
                shift focus on full network coverage.
            </p>
            <p>
                I'm optimistic that we can resolve pending issues with Smartweave and caching transactions in 2 weeks. From there I'd probably have to reallocate
                time to the new filesystem so we can update Smartweave to allow for higher network throughput.
            </p>

            <h3>Amplify's 2nd Layer Consensus</h3>
            <p>
                Looking at the original pitch for Amplify. It's a bit comical how naive my approach to the Gateways were. After learning and understanding the Arweave
                network stack. I've decided to adopt a consensus mechanism inspired by Arweave's protocol. The network would be divided chronologically by block height
                and Amplify nodes can choose to store which blocks based on incentivization. As long as their coverage is sequentially chronological by height.
            </p>

            <div className="images">
                <img src="/image/spec/node.valid.jpg"/>
                <img src="/image/spec/node.invalid.jpg"/>
            </div>
        </SpecIntroContainer>
    )
}