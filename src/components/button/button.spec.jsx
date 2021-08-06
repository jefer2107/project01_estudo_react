import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoadMorePosts } from './loadMorePosts';

describe('/<LoadMorePosts />', () => {
  it('should render the button with the text', () => {
    render(<LoadMorePosts text="Load More Posts" />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();

    render(<LoadMorePosts text="Load More Posts" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    render(<LoadMorePosts text="Load More Posts" disabled={true} />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(<LoadMorePosts text="Load More Posts" disabled={false} />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshots', () => {
    const fn = jest.fn();
    const { container } = render(<LoadMorePosts text="Load More Posts" disabled={false} onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
