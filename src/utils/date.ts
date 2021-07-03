export const dateToJaStdDateTime = (dateStr: string) =>
  new Date(dateStr).toLocaleString(`ja-JP`, {
    timeZone: `Asia/Tokyo`,
  })

export const dateToJaStdDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString(`ja-JP`, {
    timeZone: `Asia/Tokyo`,
  })
