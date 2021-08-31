import { FC, useState } from 'react';
import styled from 'styled-components';

export const AppNodesContainer = styled.div`
    div.node-links {
        padding: 30px 0;

        div.node {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            border-bottom: 2px dashed rgb(230, 230, 230);
            padding: 10px 0;

            div.node-column {
                padding: 10px 0;
                width: calc(100% / 3);

                &.full {
                    width: 100%;
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

export const AppNodes: FC = () => {
    return(
        <AppNodesContainer>
            <div className="node-links">
                <h3>Active Nodes</h3>

                <div className="node">
                    <div className="node-column">
                        <p>Node URL</p>
                        <h4>192.168.0.1</h4>
                    </div>
                    <div className="node-column">
                        <p>Tokens Received</p>
                        <h4>1,000,000 AMP</h4>
                    </div>
                    <div className="node-column">
                        <p>Date Joined</p>
                        <h4>August 1st, 2021</h4>
                    </div>
                    <div className="node-column full">
                        <p>Node Arweave Address</p>
                        <h4>dow7mxks0QGGV7zOmHEE1OOi5LyfHpcrDH9n0UPw9eY</h4>
                    </div>
                </div>

                <div className="node">
                    <div className="node-column">
                        <p>Node URL</p>
                        <h4>192.168.0.1</h4>
                    </div>
                    <div className="node-column">
                        <p>Tokens Received</p>
                        <h4>1,000,000 AMP</h4>
                    </div>
                    <div className="node-column">
                        <p>Date Joined</p>
                        <h4>August 1st, 2021</h4>
                    </div>
                    <div className="node-column full">
                        <p>Node Arweave Address</p>
                        <h4>dow7mxks0QGGV7zOmHEE1OOi5LyfHpcrDH9n0UPw9eY</h4>
                    </div>
                </div>
            </div>
        </AppNodesContainer>
    )
}