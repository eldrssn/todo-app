import { DeleteButton } from '@/components/ui/delete-button';
import { render, fireEvent } from '@testing-library/react';

describe('DeleteButton', () => {
  it('calls the onClick event handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<DeleteButton onClick={handleClick} />);
    const button = getByTestId('delete-icon');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
