import { useNavigate, useParams } from "react-router-dom";
import useBlogPosts from "../customHook/useBlogPosts";

function ViewPostPage() {
  const navigate = useNavigate();

  const params = useParams();

  console.log(params);

  const { posts, isError, isLoading } = useBlogPosts(
    "http://localhost:4000/posts"
  );

  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        {posts
          .filter(({ id }) => id == params.id)
          .map((item) => (
            <h2>{item.title}</h2>
          ))}
        {posts
          .filter(({ id }) => id == params.id)
          .map((item) => (
            <p>{item.content}</p>
          ))}
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button className="view-button">View post</button>
              </div>
            </div>
          );
        })}
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;
