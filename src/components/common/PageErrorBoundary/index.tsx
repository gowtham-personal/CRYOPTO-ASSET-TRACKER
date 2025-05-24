import { ReactNode } from 'react';

import { ErrorBoundary, SomethingWentWrong } from '@/components/common';

export const PageErrorBoundary = ({ children }: { children?: ReactNode }) => (
  <ErrorBoundary FallbackComponent={SomethingWentWrong}>{children}</ErrorBoundary>
);
