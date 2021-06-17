import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from 'superagent';

export const DaomainThesisContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 90px 0;

    div.wrap {
        padding: 45px 30px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 32px;
    }

    h2 {
        font-size: 32px;
        padding: 0 0 30px 0;
    }

    h3 {
        font-size: 24px;
        padding: 0 0 30px 0;
    }

    p {
        font-size: 18px;
        line-height: 2;
        padding: 0 0 30px 0;
    }

    a {
        color: hsla(248, 98%, 84%, 1);
    }
`;

export const DaomainThesis: FC = () => {
    return(
        <DaomainThesisContainer>
            <div className="wrap">
                <h2>The DAOmain Thesis</h2>
                <p>
                    Classical domain ownership is a sole proprietary model where individuals have ownership in a
                    completely private manner. Amplify DAOmains completely reinvent this model of TLDs by enabling
                    a completely democratic method to ownership and actions for TLDs. DAOmains function through a pure
                    democratic model where any implementation or action to a DAOmain requires quorums and voting
                    in order to effectively change the DAOmain. The most clear, concise use case of DAOmains is
                    deciding which Arweave transaction the DAOmain is pointed to. However, granularity of specific
                    paths, subdomains and potentially the novelty of NFTs could be introduced to DAOmain
                    ownership in the future.
                </p>

                <h3>Democratization, Agency and Autonomy</h3>

                <p>
                    By far two of the most important concepts of Decentralization are DAOs and NFTs. DAOs represent
                    one of the most purest forms of Democracy. NFTs represent the purest form of ownership. DAOmains
                    present a novel opportunity to leverage both concepts effectively. By using NFTs as a method to
                    vote for or against actions on TLDs with a DAO. Ultimately, the core mechanics of DAOs and NFTs are 
                    the most important functions of the Crypto world and idealistically, foster the future of Governance
                    in the real world in the coming age.
                </p>

                <p>
                    From a Political Economic perspective, one of the biggest concerns of the present day is the overt
                    Centralization of power. Ranging from Modern Monetary Theory and the Wealth Gap. To present
                    day Technology Companies control over information flow. DAOmains may not solve
                    these huge problems Western Civilization face today. But act as a bridge towards understanding
                    how we can foster better human agency towards a healthier status quo and equillibrium in society.
                    By working on highly applied, pure Democratic Governance models to real world problems. We can better
                    understand how to tackle them in present day. DAOmains are simply one element of society that can be
                    remodelled using DAOs, envision all other parts of Society being remodelled this way. Existing use
                    cases like Art NFTs are very isolated and easy to model solutions for, however, we need to work on more 
                    complex and highly applicable use cases for DAOs. A great example would be to have DAOs for a Park, a Forest,
                    let alone a new Country.
                </p>

                <h3>The Arweave Consensus</h3>

                <p>
                    Ethereum's core vision of a being a Decentralized Computer is brilliant, and is really the capstone
                    of Decentralization. Bitcoin, while it's inception after 2008 was well warranted given the concerns
                    around Modern Monetary Theory, limited itself to the idea and notion that systemic problems were primarily
                    monetary. Ethereum essentially took a quantum leap to Bitcoin's idea by becoming a Decentralized Computer
                    WITH monetary incentive and led to fostering the idea of a DAO and the idea of an NFT.
                </p>

                <p>
                    Arweave on the otherhand, takes a much more practical approach to the idea of a Decentralized Computer.
                    One problem with the Cryptocurrency Ecosystem today, is the over allocation to Consensus based on Turing
                    Completeness. While strong mathematical proofs to ensure security and validation of Consensus is very
                    important. We need to be practical about creating web scale applications. Limiting computations to pure
                    turing complete proofs lead to severe transactional throughput issues. Gas prices on Ethereum being over 100 GWEI
                    constantly alludes to this problem.
                </p>

                <p>
                    Many may point out that Arweave is focused on data permanence through an Endowment as opposed to actual
                    computation. However, one of the most important elements to creating "dApps" is reading and writing data
                    effectively. Arweave presents a novel solution to do this at an exobyte scale. Obviously, it's not quite
                    at the point where data throughput can be exobyte scale, but, the core Consensus model as an Endowment
                    certainly enables it to function this way if the infrastructure behind it reaches the point to support that.
                    I'm also optimistic of projects like Solana helping propel Endowment models like Arweave to more effective
                    web scale heights via more effective, optimistic Consensus models for Computations like PoH.
                </p>

                <h3>Retrofitting Community.js</h3>

                <p>
                    The great thing about Community.js and it's ecosystem is that it has a lot of existing tools to
                    create products like DAOmains. <a href="https://community.xyz/home" target="cjs">Community.js'</a> core
                    model actually has all the functions for DAOmains to function properly. However, instead of (only) having quorum
                    for tokens, leveraging the same mechanics for functionality of domains and potentially for minting new 
                    domain specific NFTs would be the primary use case and application for Amplify.
                </p>

                <p>
                    Optimistically, closely linking and collaborating on functionality to and from Community.js would
                    be the ideal solution for DAOmains as the intersection and alignment of the core vision and goals
                    of each project is high. Of course, future implementations should not be limited to DAOmains, but
                    other novel products and use cases.
                </p>

                <h3>Moving Forward</h3>

                <p>
                    Amplify and DAOmains attempt to present optimistic, forward thinking solutions to Decentralization.
                    The commitment to Arweave's ecosytem has been calculated based on it's Consensus model for Data Permanence
                    and how it's Consensus model can effectively achieve exobyte scale. The decentralization of domains is
                    ultimately just one element of society that needs to be effectively democratized. To think that other elements
                    of Society, say the US Government is not highly autocratic would be foolish, and, slowly approaching autocratic
                    problems such as existing domain providers (ICANN) with DAO methodologies will certainly prove useful for Society in the coming future.
                </p>
            </div>
        </DaomainThesisContainer>
    )
}