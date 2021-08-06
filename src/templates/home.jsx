import { useEffect, useState } from 'react';
import './home.css';
import { Posts } from '../components/posts/posts';
import { LoadMorePosts } from '../components/button/loadMorePosts';
import { InputSearch } from '../components/inputSearch/inputSearch';
import { loadPosts } from '../utils/loadPosts';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getLoadPosts();
  }, []);

  const getLoadPosts = async () => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postPerPage));
    setAllPosts(postsAndPhotos);
  };

  const loadMorePosts = () => {
    const nexPage = page + postPerPage;
    const nexPosts = allPosts.slice(nexPage, nexPage + postPerPage);
    posts.push(...nexPosts);

    setPosts(posts);
    setPage(nexPage);
  };

  const hendleSearch = (event) => {
    const { value } = event.target;

    setSearchValue({ value });
  };

  const postFiltered = searchValue
    ? allPosts.filter((x) => {
        return x.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const noMorePosts = page + postPerPage >= allPosts.length;

  return (
    <section className="container">
      <h1>Search Value {searchValue}</h1>
      <InputSearch searchValue={searchValue} handleSearch={hendleSearch} />
      {postFiltered.length > 0 ? <Posts posts={postFiltered} /> : <p>Nao há resultado</p>}

      <>
        {!searchValue && (
          <div className="btn-container">
            <LoadMorePosts disabled={noMorePosts} text={'Load More Posts'} loadMorePosts={loadMorePosts} />
          </div>
        )}
      </>
    </section>
  );
};
