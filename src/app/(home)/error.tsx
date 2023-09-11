"use client"
import ErrorBoundary from "@/components/error/errorBoundary"

const HomePageError = ({ error, reset }: { error: Error, reset: () => void }) => {
    return <ErrorBoundary error={error} reset={reset} />
}

export default HomePageError