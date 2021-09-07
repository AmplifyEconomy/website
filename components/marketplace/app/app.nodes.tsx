import { FC, useState } from 'react';
import styled from 'styled-components';

export const AppNodesContainer = styled.div`
    div.node-links {
        padding: 30px 0;

        h4.heading {
            font-size: 24px;
            text-align: center;
            padding: 60px 0;
        }

        div.node {
            display: flex;
            width: 100%;
            border-bottom: 2px dashed rgb(230, 230, 230);
            padding: 10px 0;

            div.node-column {
                padding: 10px 0;
                width: 35%;

                &.full {
                    width: 65%;
                }

                p {
                    font-size: 12px;
                    font-weight: bold;
                    padding: 0 0 5px 0;
                }

                h4 {
                    font-size: 18px;
                }
            }
        }
    }
`;

export interface AppNodesI {
    nodes: any;
}

export const AppNodes: FC<AppNodesI> = ({ nodes }) => {
    return(
        <AppNodesContainer>
            <div className="node-links">
                <h3>Active Nodes</h3>

                {
                    Object.keys(nodes).length === 0 ?
                        <h4 className="heading">No one has joined the network yet!</h4>
                        :
                        ''
                }

                {
                    Object.keys(nodes).map(key => {
                        const node = nodes[key];

                        return(
                            <div className="node">
                                <div className="node-column">
                                    <p>Node URL</p>
                                    <h4>{node.url}</h4>
                                </div>
                                <div className="node-column full">
                                    <p>Node Arweave Address</p>
                                    <h4>{key}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </AppNodesContainer>
    )
}