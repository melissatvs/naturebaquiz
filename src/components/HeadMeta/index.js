import db from '../../../db.json';
import Head from 'next/head'

export default function HeadMeta(){
    return (
        <Head>
            <title>Quiz Natureba</title>
            <meta name="title" content="Quiz Natureba" />
            <meta name="description" content="" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://naturebaquiz.melissatvs.vercel.app/" />
            <meta property="og:title" content="Quiz Natureba" />
            <meta property="og:description" content="" />
            <meta property="og:image" content={db.bg} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://naturebaquiz.melissatvs.vercel.app/" />
            <meta property="twitter:title" content="Quiz Natureba" />
            <meta property="twitter:description" content="" />
            <meta property="twitter:image" content={db.bg} />
      </Head>
    );
}