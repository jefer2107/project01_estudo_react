import { render, screen } from '@testing-library/react';
import { postCardPropsMock } from '../config/mock';
import { PostCard } from './PostCard';

const props = postCardPropsMock;

describe('/<PostCard />', () => {
  it('should render PostCard corrently', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover);
    expect(screen.getByRole('heading', { name: props.tilte })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
