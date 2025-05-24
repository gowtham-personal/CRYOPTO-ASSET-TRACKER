import { render, screen } from '@/test-utils';

import { SomethingWentWrong } from './index';

describe('SomethingWentWrong', () => {
  it('should render the component with error messages', () => {
    render(<SomethingWentWrong />);

    // Check for the main error message
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    // Check for the descriptive error message
    expect(
      screen.getByText("We're sorry, an error occurred while rendering this page.")
    ).toBeInTheDocument();
  });

  it('should apply correct styling classes', () => {
    const { container } = render(<SomethingWentWrong />);

    // Check if the main container has the correct classes
    const mainContainer = container.querySelector('div > div');
    expect(mainContainer).toHaveClass(
      'p-6',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'min-h-[400px]',
      'text-center'
    );

    // Check if Text components have the correct classes
    const errorTitle = screen.getByText('Something went wrong');
    expect(errorTitle).toHaveClass('mb-4', 'font-semibold');

    const errorDescription = screen.getByText(
      "We're sorry, an error occurred while rendering this page."
    );
    expect(errorDescription).toHaveClass('mb-4', 'font-medium');
  });
});
