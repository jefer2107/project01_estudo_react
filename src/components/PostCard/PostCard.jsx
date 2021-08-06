import './postCard.css';
import p from 'prop-types';

export const PostCard = ({ id, title, cover, body }) => {
  return (
    <div key={id} className="post">
      <img src={cover} alt={title} />
      <div className="post-content" key={id}>
        <h1> {title} </h1>
        <p> {body} </p>
      </div>
    </div>
  );
};

PostCard.prototype = {
  title: p.string.isRequired,
  body: p.string.isRequired,
  cover: p.string.isRequired,
  id: p.number.isRequired,
};
