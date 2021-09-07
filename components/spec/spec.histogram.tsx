import { FC } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export const SpecHistogramContainer = styled.div`
    padding: 30px;

    p {
        font-size: 18px;
        padding: 0 0 15px 0;
        line-height: 1.5;
    }

    div.charts {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 0 30px 0;

        div.chart {
            h4 {
                font-size: 18px;
                font-weight: bold;
                letter-spacing: 0.5px;
                text-align: center;
                padding: 30px 0;
            }
        }
    }
`;

export const data = [
    { height: 0, incentive: 1, },
    { height: 1, incentive: 1, },
    { height: 2, incentive: 1, },
    { height: 3, incentive: 2, },
    { height: 4, incentive: 3, },
    { height: 5, incentive: 4, },
    { height: 6, incentive: 5, },
    { height: 7, incentive: 5, },
    { height: 8, incentive: 5, },
    { height: 9, incentive: 5, },
];

export const data2 = [
    { height: 0, traffic: 0, incentive: 1, },
    { height: 1, traffic: 0, incentive: 1, },
    { height: 2, traffic: 3, incentive: 4, },
    { height: 3, traffic: 4, incentive: 6, },
    { height: 4, traffic: 10, incentive: 13, },
    { height: 5, traffic: 10, incentive: 14, },
    { height: 6, traffic: 3, incentive: 8, },
    { height: 7, traffic: 2, incentive: 7, },
    { height: 8, traffic: 0, incentive: 5, },
    { height: 9, traffic: 1, incentive: 6, },
];

export const SpecHistogram: FC = () => {
    return(
        <SpecHistogramContainer>
            <p>
                Furthermore, incentivization for storing certain blocks would be based on two criteria metrics. The first is how new the block is. Amplify by default
                incentivizes network operators to have more "edge" nodes that store the latest blocks. However, the second criteria is traffic based. There may be legacy blocks
                that get queried a lot by the network and therefore incentivization would increase for older blocks. There would be an option for network operators to run nodes
                that purely operate on highest staking incentives and would delete redundant blocks in favour of new ones.
            </p>

            <div className="charts">
                <div className="chart">
                    <h4>Incentive based on network height</h4>

                    <BarChart width={420} height={320} data={data}>
                        <CartesianGrid strokeDasharray="6 6"/>
                        <XAxis label="block height" height={60}/>
                        <YAxis/>
                        <Legend/>
                        <Bar dataKey="incentive" fill="#B9AEFE"/>
                    </BarChart>
                </div>
                <div className="chart">
                    <h4>Incentive with network traffic</h4>

                    <BarChart width={420} height={320} data={data2}>
                        <CartesianGrid strokeDasharray="6 6"/>
                        <XAxis label="block height" height={60}/>
                        <YAxis/>
                        <Legend/>
                        <Bar dataKey="incentive" fill="#B9AEFE"/>
                        <Bar dataKey="traffic" fill="#C4C4C4"/>
                    </BarChart>
                </div>
            </div>
        </SpecHistogramContainer>
    )
}