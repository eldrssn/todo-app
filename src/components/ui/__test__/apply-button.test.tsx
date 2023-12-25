import { render, fireEvent } from '@testing-library/react';
import { ApplyButton } from '@/components/ui/apply-button';

describe('ApplyButton', () => {
  it('calls the onClick event handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<ApplyButton onClick={handleClick} />);
    const button = getByTestId('apply-icon');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
