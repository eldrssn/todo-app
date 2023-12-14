import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '@/components/ui/checkbox';

describe('Checkbox component', () => {
  it('renders checkbox and checkmark correctly', () => {
    render(<Checkbox checked={false} />);
    const checkboxInput = screen.getByRole('checkbox');
    const checkmark = screen.getByTestId('checkmark');

    expect(checkboxInput).toBeInTheDocument();
    expect(checkmark).toBeInTheDocument();
  });

  it('calls onChange when checkbox is clicked', () => {
    const onChangeMock = jest.fn();
    render(<Checkbox checked={false} onChange={onChangeMock} />);
    const checkboxInput = screen.getByRole('checkbox');

    fireEvent.click(checkboxInput);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
