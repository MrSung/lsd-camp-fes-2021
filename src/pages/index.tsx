import { GetStaticProps } from 'next'
import { utcToZonedTime } from 'date-fns-tz'

import { Home } from '@/components/pages/home'
import { fetcher } from '@/utils/http-client'

export interface IProgramContent {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  host: string
  link: string
  venue: string[]
  startDate: string
  endDate: string
  thumbnail: {
    url: unknown
    height: number
    width: number
  }
}

export interface IProgramData {
  contents: IProgramContent[]
  totalCount: number
  offset: number
  limit: number
}

export interface IIndexPageProps {
  pageData: {
    programData: IProgramData
  }
}

const IndexPage = ({ pageData }: IIndexPageProps) => (
  <Home pageData={pageData} />
)

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const programData = await fetcher<IProgramData>(`fes-21-program?limit=100`)

  return {
    props: {
      pageData: {
        programData: {
          ...programData,
          contents: programData.contents.map((c) => ({
            ...c,
            startDate: String(
              utcToZonedTime(new Date(c.startDate), `Asia/Tokyo`),
            ),
            endDate: String(utcToZonedTime(new Date(c.endDate), `Asia/Tokyo`)),
          })),
        },
      },
    },
  }
}
