import { DeleteIcon } from '@/components/ui/delete-icon';
import { render, fireEvent } from '@testing-library/react';

describe('DeleteIcon', () => {
  it('calls the onClick event handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<DeleteIcon onClick={handleClick} />);
    const button = getByTestId('delete-icon');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
