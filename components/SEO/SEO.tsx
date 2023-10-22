import Head from 'next/head'
import React from 'react'

interface SEOProps {
    title: string
    description: string
}

export default function SEO(props: SEOProps) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
