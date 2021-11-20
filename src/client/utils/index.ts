import dayjs from 'dayjs'

export const formatDate = (date: string, format: string): string => {
  return dayjs(date).format(format)
}
