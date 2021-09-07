import { FC } from 'react';
import styled from 'styled-components';

export const SpecDHTContainer = styled.div`
    padding: 30px;

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

export const SpecDHT: FC = () => {
    return(
        <SpecDHTContainer>
            <h3>Chord Style DHT Queries</h3>

            <p>
                Given that the sequence of blocks is extremely important for an Amplify node to be valid. The Chord style distributed hash table
                is naturally the most optimal mechanism for structuring the Amplify network. Collocative communication of indexed blocks would be based on
                what part of the sequence said node is. The following illustrates a very basic outline of how queries would work.
            </p>

            <div className="images">
                <img src="/image/spec/chord.png"/>
                <img src="/image/spec/chord.network.jpg"/>
            </div>

            <h3>Conclusion</h3>

            <p>
                While the above is quite a task to properly execute. I am confident that we will not experience anymore project scope creep and this is as deep
                as the rabbit hole goes in terms of properly wrangling the Arweave Network. As I mentioned, I will be starting with the immediate term project
                milestones by having app specific nodes fully functional with Smartweave contracts so we can launch Amplify and help relieve network congestion
                for specific nodes as soon as possible. If you have any questions, please feel free to reach out to me.
            </p>
        </SpecDHTContainer>
    )
}
