import { GetStaticProps } from 'next'

import { Home } from '@/components/pages/home'
import { fetcher } from '@/utils/http-client'

export interface IHomePageData {
  contents: Array<{
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    link: string
    venue: string[]
    startDate: string
    endDate: string
    thumbnail: {
      url: string
      height: number
      width: number
    }
  }>
  totalCount: number
  offset: number
  limit: number
}

interface IIndexPageProps {
  pageData: IHomePageData
}

const IndexPage = ({ pageData }: IIndexPageProps) => (
  <Home pageData={pageData} />
)

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await fetcher<IHomePageData>(`fes-21-program`)

  return {
    props: {
      pageData,
    },
  }
}
