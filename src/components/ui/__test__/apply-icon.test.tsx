import { render, fireEvent } from '@testing-library/react';
import { ApplyIcon } from '@/components/ui/apply-icon';

describe('ApplyIcon', () => {
  it('calls the onClick event handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<ApplyIcon onClick={handleClick} />);
    const button = getByTestId('apply-icon');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
