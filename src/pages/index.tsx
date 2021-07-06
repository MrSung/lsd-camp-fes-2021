import { GetStaticProps } from 'next'

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
  const programData = await fetcher<IProgramData>(`fes-21-program`)

  return {
    props: {
      pageData: {
        programData,
      },
    },
  }
}
