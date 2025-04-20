import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useManageSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const manageQueryString = (
    name: string,
    value: string,
    toRemove: string[] = []
  ) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    if (toRemove.length) {
      toRemove.forEach(param => newSearchParams.delete(param))
    } else {
      newSearchParams.delete(name)
    }
    
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
