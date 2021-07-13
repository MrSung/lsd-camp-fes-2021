import Head from 'next/head'

import { IIndexPageProps } from '@/pages'
import { DefaultTemplate } from '@/components/templates'
import { MainVisual } from '@/components/pages/home/main-visual'
import { Message } from '@/components/pages/home/message'
import { About } from '@/components/pages/home/about'
import { Program } from '@/components/pages/home/program'
import { Timetable } from '@/components/pages/home/timetable'
import {
  HOME_LINK_MESSAGE,
  HOME_LINK_ABOUT,
  HOME_LINK_PROGRAM,
  HOME_LINK_TIMETABLE,
} from './const'
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL, MAIN_MESSAGE } from './meta'

export const Home = ({ pageData: { programData } }: IIndexPageProps) => {
  const siteTitle = SITE_TITLE + ` | ` + MAIN_MESSAGE

  return (
    <DefaultTemplate>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:image" content="/ogp.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainVisual />
      <Message sectionId={HOME_LINK_MESSAGE} />
      <About sectionId={HOME_LINK_ABOUT} />
      <Program sectionId={HOME_LINK_PROGRAM} programData={programData} />
      <Timetable sectionId={HOME_LINK_TIMETABLE} programData={programData} />
    </DefaultTemplate>
  )
}
