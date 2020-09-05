import { formatDistance, Locale } from 'date-fns'
import * as LocalePTBR from 'date-fns/locale/pt-BR'

const DistanceDateFormatter = (date: Date): string => {
  const parseDate = new Date(date)

  const distance = formatDistance(parseDate, new Date(), {
    locale: LocalePTBR as Locale,
    addSuffix: false,
  })

  const distanceNumber = Number(distance.replace(/[a-z]|[A-Z]/g, '').trim())

  if (distanceNumber === 1) {
    return `${distance} restante`
  }

  return `${distance} restantes`
}

export { DistanceDateFormatter }
