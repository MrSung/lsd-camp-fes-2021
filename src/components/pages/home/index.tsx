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
} from '@/const/home-links'
import { SITE_TITLE, SITE_DESCRIPTION, MAIN_MESSAGE } from './meta'

export const Home = ({ pageData: { programData } }: IIndexPageProps) => {
  return (
    <DefaultTemplate>
      <Head>
        <title>{SITE_TITLE + ` | ` + MAIN_MESSAGE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
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
