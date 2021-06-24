interface ILineBreakSpanProps {
  children: string
}

export const LineBreakSpan = ({ children }: ILineBreakSpanProps) => {
  const replaced = children.replace(`\n`, `<br />`)

  return <span dangerouslySetInnerHTML={{ __html: replaced }} />
}
