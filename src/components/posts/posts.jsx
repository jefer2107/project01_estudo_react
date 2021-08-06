import { PostCard } from '../PostCard/PostCard';
import './posts.css';
import p from 'prop-types';

export const Posts = ({ posts = [] }) => {
  return (
    <div className="app posts">
      {posts !== null &&
        posts.map((x) => {
          return <PostCard key={x.id} title={x.title} body={x.body} cover={x.cover} />;
        })}
    </div>
  );
};

Posts.prototype = {
  posts: p.array,
};
