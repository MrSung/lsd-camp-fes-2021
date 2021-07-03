const locales = `ja-JP`
const option: Intl.DateTimeFormatOptions = {
  timeZone: `Asia/Tokyo`,
}

export const dateToJaStdDateTime = (dateStr: string) =>
  new Date(dateStr).toLocaleString(locales, option)

export const dateToJaStdTime = (dateStr: string) =>
  new Date(dateStr).toLocaleTimeString(locales, option)

export const dateToJaStdDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString(locales, option)
