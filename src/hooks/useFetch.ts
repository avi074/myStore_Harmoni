import { useEffect, useState } from "react"

export default function useFetch(endpoint: string, options?: RequestInit) {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [data, setData] = useState<unknown | null>(null)

  useEffect(() => {
    if (!endpoint) return
    setLoading(true)
    setError("")
    fetch(endpoint, options)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        setError(error.message || "An error occurred")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [endpoint, options])

  return { loading, error, data }
}
