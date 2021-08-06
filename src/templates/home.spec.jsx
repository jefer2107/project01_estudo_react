import { getByRole, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from './home';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    console.log('CHAMADA INTERCEPTADA');
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title1',
          body: 'body1',
          src: 'img1.lpg',
        },
        {
          userId: 2,
          id: 2,
          title: 'title2',
          body: 'body2',
          src: 'img2.lpg',
        },
        {
          userId: 3,
          id: 3,
          title: 'title3',
          body: 'body3',
          src: 'img3.lpg',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('/<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render search, posts e load more', async () => {
    render(<Home />);

    //expect.assertions(6)

    const noMorePosts = screen.getByText('Nao há resultado');

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText('Type your search');
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(2);

    const button = screen.getByRole('button', { name: /Load More Posts/i });
    expect(button).toBeInTheDocument();

    screen.debug();
  });

  it('should render search', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText('Nao há resultado');

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText('Type your search');
    expect(search).toBeInTheDocument();

    expect(getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(getByRole('heading', { name: 'title2' })).toBeInTheDocument();
    // expect(getByRole('img',{name:/title2/i})).not.toBeInTheDocument()
  });
});
