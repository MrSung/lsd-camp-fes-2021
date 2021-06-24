interface ILineBreakProps {
  children: string
}

export const LineBreak = ({ children }: ILineBreakProps) => {
  const replaced = children.replace(/\n/g, `<br />`)

  return <p dangerouslySetInnerHTML={{ __html: replaced }} />
}
