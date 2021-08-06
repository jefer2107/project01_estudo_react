import './loadMorePosts.css';
import p from 'prop-types';

export const LoadMorePosts = (props) => {
  const { loadMorePosts, text, disabled } = props;

  return (
    <button disabled={disabled} className="button" onClick={loadMorePosts}>
      {text}
    </button>
  );
};

LoadMorePosts.defaultProps = {
  disabled: false,
};

LoadMorePosts.prototype = {
  text: p.string,
  loadMorePosts: p.func.isRequired,
  disabled: p.bool,
};
