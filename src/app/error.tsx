"use client"
import ErrorBoundary from "@/components/error/errorBoundary"

const GlobalError = ({ error, reset }: { error: Error, reset: () => void }) => {
    return <ErrorBoundary error={error} reset={reset} />
}

export default GlobalError