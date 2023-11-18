import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
      <div className="card">
        <div className="card-content">
          <Link to={`/post/${post.id}`}>
            <span className="card-title">{post.model}</span>
          </Link>
          <p>{post.make}</p>
          <p>{post.year}</p>
          <p>{post.services}</p>
        </div>
      </div>
    );
  };
  
  export default Post;