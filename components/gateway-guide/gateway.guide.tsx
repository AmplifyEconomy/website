import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

export const GatewayGuideContainer = styled.div`
    padding: 60px 15px;
    width: 100%;
    max-width: 1200px;
    margin: auto;

    h2 {
        font-size: 32px;
        font-weight: 300;
        padding: 15px;
    }

    h3 {
        font-size: 24px;
        font-weight: 300;
        padding: 30px 15px;
    }

    p {
        font-size: 18px;
        padding: 15px;
        line-height: 2;
    }
`;

export const snippet1 = `sudo apt update
sudo apt install postgresql postgresql-contrib -y

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

export NVM_DIR="$([ -z "\${XDG_CONFIG_HOME-}" ] && printf %s "\${HOME}/.nvm" || printf %s "\${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install --lts`;

export const snippet2 = `npm install pm2 yarn --global`;

export const pgsnippet1 = `# Access PSQL Terminal
sudo -u postgres psql

--- Create the arweave database and user
CREATE DATABASE arweave;
CREATE USER arweave WITH ENCRYPTED PASSWORD 'arweave';
GRANT ALL PRIVILEGES ON DATABASE arweave TO arweave;

--- Required in order to import blocks from a snapshot
ALTER ROLE arweave WITH SUPERUSER;
`;

export const pgsnippet2 = `ALTER SYSTEM SET max_connections = '1000';
ALTER SYSTEM SET shared_buffers = '16GB';
ALTER SYSTEM SET effective_cache_size = '48GB';
ALTER SYSTEM SET maintenance_work_mem = '8GB';
ALTER SYSTEM SET checkpoint_completion_target = '0.9';
ALTER SYSTEM SET wal_buffers = '64MB';
ALTER SYSTEM SET default_statistics_target = '100';
ALTER SYSTEM SET random_page_cost = '2.0';
ALTER SYSTEM SET effective_io_concurrency = '200';
ALTER SYSTEM SET work_mem = '64MB';
ALTER SYSTEM SET min_wal_size = '4GB';
ALTER SYSTEM SET max_wal_size = '16GB';
ALTER SYSTEM SET max_worker_processes = '30';
ALTER SYSTEM SET max_parallel_workers_per_gather = '4';
ALTER SYSTEM SET max_parallel_workers = '30';
ALTER SYSTEM SET max_parallel_maintenance_workers = '4';
ALTER SYSTEM SET autovacuum_vacuum_scale_factor = '0.1';
ALTER SYSTEM SET autovacuum_max_workers = '4';

--- Do a non intrusive reload after altering system settings

SELECT pg_reload_conf();`

export const pgsnippet3 = `--- exit PSQL Terminal
exit;

# restart the Postgres database
/etc/init.d/postgresql restart`;

export const snippet3 = `mkdir /arweave
cd /arweave

curl -o snapshot.tar.gz https://snapshots.amplify.host/APRIL7TH/snapshot.tar.gz
tar -xvzf snapshot.tar.gz`;

export const snippet4 = `git clone https://github.com/ArweaveTeam/gateway
cd gateway
yarn
cp .env.dev .env
yarn migrate:latest
sh bin/index.drop.sh`;

export const snippet5 = `sh bin/import.sh
sh bin/index.create.sh`;

export const snippet6 = `yarn dev:build
pm2 start dist/src/Gateway.js --name gateway`;

export const GatewayGuide: FC = () => {
    return(
        <GatewayGuideContainer>
            <h2>Gateway Deployment Guide</h2>
            <p>
                The following is a guide to deploy a Gateway on Ubuntu 20.04. In general, we suggest at minimum
                an 8 core vCPU, 32 GB RAM instance on platforms like Digital Ocean, Vultr and AWS. You should
                also tune and configure your Postgres instance. 
                Read <a href="https://arweaveteam.github.io/gateway/#/DB?id=tuning-the-database" target="_blank">tuning the database</a> in
                the Gateway docs to learn more about optimizing your Postgres Database.
            </p>

            <h3>Install Postgres and NVM</h3>

            <p>
                After SSHing into your Ubuntu VPS, install Postgres and NVM by running the following commands.
            </p>

            <SyntaxHighlighter className="hl" language="bash" style={style}>{snippet1}</SyntaxHighlighter>

            <p>
                Make sure to also install yarn and pm2 for later.
            </p>

            <SyntaxHighlighter className="hl" language="bash" style={style}>{snippet2}</SyntaxHighlighter>

            <h3>Configure Postgres</h3>

            <p>Make sure to add the Arweave user to the database, you can do so by running the following.</p>
            
            <SyntaxHighlighter className="hl" language="sql" style={style}>{pgsnippet1}</SyntaxHighlighter>

            <p>After, update the Postgres configuration. Make sure to change these system settings to match your server specs.</p>

            <SyntaxHighlighter className="hl" language="sql" style={style}>{pgsnippet2}</SyntaxHighlighter>

            <p>Then exit and restart your database.</p>

            <SyntaxHighlighter className="hl" language="sql" style={style}>{pgsnippet3}</SyntaxHighlighter>

            <h3>Download the Snapshot</h3>

            <p>
                Make the /arweave directory and then download the snapshot from the Amplify website.
            </p>

            <SyntaxHighlighter className="hl" language="bash" style={style}>{snippet3}</SyntaxHighlighter>

            <h3>Configure the Gateway</h3>

            <p>
                Clone the Gateway github repo, install node modules and then configure the environment and
                setup the tables. Make sure to drop the indices on the table too.
            </p>

            <SyntaxHighlighter className="hl" language="bash" style={style}>{snippet4}</SyntaxHighlighter>

            <h3>Import the Snapshot</h3>

            <p>
                Assuming the Snapshot is stored in /arweave/snapshot after decompressing the .tar.gz file. Run
                the import shell script. After the import command is complete. Recreate the indices by running the
                index create shell script.
            </p>

            <SyntaxHighlighter className="hl" language="bash" style={style}>{snippet5}</SyntaxHighlighter>

            <h3>Start the Gateway</h3>

            <p>
                To finalize the deployment. Build the Gateway project and then start the Gateway with pm2.
                You can change the port it's on and the parallelization of synchronization by changing the
                .env file.
            </p>

            <SyntaxHighlighter className="hl" language="bash" style={style}>{snippet6}</SyntaxHighlighter>

        </GatewayGuideContainer>
    )
}