import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Dario Salon` : 'Dario Salon'
  }, [title])
}