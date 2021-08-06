import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputSearch } from './inputSearch';

describe('/<InputSearch />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<InputSearch handleSearch={fn} searchValue={'Testando'} />);

    const input = screen.getByPlaceholderText(/Type your search/i);

    expect(input.value).toBe('Testando');
  });

  it('should call handleSearch function on each key pressed ', () => {
    const fn = jest.fn();
    render(<InputSearch handleSearch={fn} searchValue={'Testando'} />);

    const input = screen.getByPlaceholderText(/Type your search/i);
    const value = 'O valor';

    userEvent.type(input, value);
    expect(input.value).toBe(value);

    expect(fn).toBeCalledTimes(value.length);
  });
});
