import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useManageSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const manageQueryString = (name: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.delete('favorite')
    newSearchParams.delete('language')
    
    newSearchParams.set(name, value)

    return newSearchParams.toString()
  }

  return {
    router,
    pathname,
    searchParams,
    manageQueryString,
  }
}
