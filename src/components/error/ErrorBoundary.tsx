import React from 'react';

type Props = {
  error: Error;
  message?: string;
  reset: () => void;
}

const ErrorBoundary = (props: Props) => {
  return (
    <div>
      <div>
        <h2>{props.message || props.error.message}</h2>
        <button onClick={() => props.reset()}>Try again</button>
      </div>
    </div>
  )
}

export default ErrorBoundary