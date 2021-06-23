import Head from 'next/head'

import { DefaultTemplate } from '@/components/templates'
import { MainVisual } from '@/components/pages/home/main-visual'
import { Message } from '@/components/pages/home/message'

export const Home = () => (
  <DefaultTemplate>
    <Head>
      <title>TypeScript starter for Next.js</title>
      <meta
        name="description"
        content="TypeScript starter for Next.js that includes all you need to build amazing apps"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainVisual />
    <Message />
  </DefaultTemplate>
)
