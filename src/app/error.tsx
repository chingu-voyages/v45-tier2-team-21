"use client"
import ErrorBoundary from "@/components/error/ErrorBoundary"

const GlobalError = ({ error, reset }: { error: Error, reset: () => void }) => {
    return <ErrorBoundary error={error} reset={reset} />
}

export default GlobalError