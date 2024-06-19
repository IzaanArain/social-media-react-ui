import "./post.css";
import { MoreVert } from "@mui/icons-material";
const Post = ({post}) => {
  return (
    <>
      <div className="post-container">
        <div className="post-wrapper">
          <div className="post-top">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src="assets/person/salman.jpg"
                alt=""
              />
              <span className="post-username">Salman</span>
              <span className="post-date">5 mins ago</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="post-center">
            <span className="post-text">Hey! Its my first post :)</span>
            <img className="post-img" src="assets/posts/dicey.jpg" alt="" />
            {/* <video controls className="post-img" src="assets/posts/island.mp4"></video> */}
          </div>
          <div className="post-bottom">
            <div className="postBottomLeft">
              <img
                className="reaction-icon"
                src="assets/reaction/like.png"
                alt=""
              />
              <img
                className="reaction-icon"
                src="assets/reaction/heart.png"
                alt=""
              />
              <span className="postLikeCounter">32 people liked it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
