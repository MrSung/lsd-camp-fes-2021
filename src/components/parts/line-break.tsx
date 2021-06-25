import { Fragment } from 'react'

interface ILineBreakProps {
  children: string
}

export const LineBreak = ({ children }: ILineBreakProps) => (
  <>
    {children.split(/\n/g).map((word, i) => (
      <Fragment key={i}>
        {i > 0 && <br />}
        {word}
      </Fragment>
    ))}
  </>
)
