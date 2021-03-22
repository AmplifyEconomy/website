import React, { FC } from 'react';
import Head from 'next/head';

export interface MetadataInterface {
    title?: string;
    description?: string;
}

export const Metadata: FC<MetadataInterface> = ({ title, description }) => {
    const outputTitle = title ? title : 'Amplify | The Distributed Economy For Bandwidth';
    const outputDescription = description ? description : 'Amplify is a novel way to profit off of your bandwidth by leveraging peer to peer networking to pay you to serve content';

    return(
        <Head>
            <title>{outputTitle}</title>
            <meta name="description" content={outputDescription}/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={outputTitle}/>
            <meta name="twitter:description" content={outputDescription}/>

            <meta property="og:title" content={outputTitle}/>
            <meta property="og:image" content=""/>
            <meta property="og:description" content={outputDescription}/>
            <link rel="icon" type="image/png" href="/image/amplify.png"/>
        </Head>
    )
}