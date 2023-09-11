"use client";
import ErrorBoundary from "@/components/error/errorBoundary"

const MeteoritesPageError = ({ error, reset }: { error: Error, reset: () => void }) => {
    return <ErrorBoundary error={error} reset={reset} />
}

export default MeteoritesPageError