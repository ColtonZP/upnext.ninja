export const formatDate = (date: number) => {
  const newDate = new Date(date * 1000)
  return newDate.toLocaleString('default', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'GMT',
  })
}
