import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useManageSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const manageQueryString = (updateVariant: 'add' | 'remove', name: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())

    if (updateVariant === 'add') {
      newSearchParams.set(name, value)
    } else {
      newSearchParams.delete(name)
    }

    return newSearchParams.toString()
  }

  return {
    router,
    pathname,
    searchParams,
    manageQueryString,
  }
}
