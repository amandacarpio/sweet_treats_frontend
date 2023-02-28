import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
    return (
    <div className="items">
      <Link to={`/treat/${post.id}/`}>
        <h1>{post.Dessert_Name}</h1>
      </Link>
    </div>
  );
};

export default Post;