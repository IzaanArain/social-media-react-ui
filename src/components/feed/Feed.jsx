import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { PostData } from "../../utils/DummyData";
const Feed = () => {
  return (
    <div className="feed no-scrollbar">
      <div className="feed-wrapper">
        <Share/>
        {PostData.map((p)=>{
          return (
            <Post key={p.id} post={p}/>
          )
        })}
      </div>
    </div>
  );
};

export default Feed;
