"use client"
import ErrorBoundary from "@/components/error/ErrorBoundary"

const AboutPageError = ({ error, reset }: { error: Error, reset: () => void }) => {
    return <ErrorBoundary error={error} reset={reset} />
}

export default AboutPageError