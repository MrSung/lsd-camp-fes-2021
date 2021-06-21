import Head from 'next/head';
import Image from 'next/image';

export const Home = () => (
  <div>
    <Head>
      <title>TypeScript starter for Next.js</title>
      <meta
        name="description"
        content="TypeScript starter for Next.js that includes all you need to build amazing apps"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      Powered by{` `}
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </main>
  </div>
);
