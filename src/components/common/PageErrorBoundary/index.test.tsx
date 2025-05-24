import { render, screen } from '@/test-utils';

import { PageErrorBoundary } from './index';

describe('PageErrorBoundary', () => {
  const ChildComponent = () => <div>Child component</div>;
  const ThrowError = () => {
    throw new Error('Test error');
    return null;
  };

  beforeEach(() => {
    // Mock console.log to prevent error logging during tests
    jest.spyOn(console, 'log').mockImplementation(() => {});
    // Mock console.error which React uses to log errors
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render children when there is no error', () => {
    render(
      <PageErrorBoundary>
        <ChildComponent />
      </PageErrorBoundary>
    );

    expect(screen.getByText('Child component')).toBeInTheDocument();
  });

  it('should render SomethingWentWrong component when an error occurs', () => {
    render(
      <PageErrorBoundary>
        <ThrowError />
      </PageErrorBoundary>
    );

    // Check if the SomethingWentWrong component is rendered
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(
      screen.getByText("We're sorry, an error occurred while rendering this page.")
    ).toBeInTheDocument();
  });

  it('should work without children', () => {
    render(<PageErrorBoundary />);
    // Should not throw and render nothing
    expect(document.body.textContent).toEqual('');
  });
});
