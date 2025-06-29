"use client";

import NotFound from "@/components/NotFound/NotFound";

interface ErrorBoundryProps {
  error: Error;
}

const ErrorBoundry: React.FC<ErrorBoundryProps> = ({ error }) => {
  return (
    <>
      <NotFound error={error.message} />
    </>
  );
};

export default ErrorBoundry;
