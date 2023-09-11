"use client"
import ErrorBoundary from "@/components/error/errorBoundary"

const AboutPageError = ({ error, reset }: { error: Error, reset: () => void }) => {
    return <ErrorBoundary error={error} reset={reset} />
}

export default AboutPageError