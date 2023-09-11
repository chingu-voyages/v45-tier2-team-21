"use client"
import ErrorBoundary from "@/components/error/ErrorBoundary"

const HomePageError = ({ error, reset }: { error: Error, reset: () => void }) => {
    return <ErrorBoundary error={error} reset={reset} />
}

export default HomePageError