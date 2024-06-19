import "./share.css";
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material';
const Share = () => {
  return (
    <>
      <div className="share-container">
        <div className="share-wrapper">
          <div className="share-top">
            <img
              className="shareProfileImg"
              src="/assets/person/salman.jpg"
              alt=""
            />
            <input
              placeholder="Whats in your mind Salman?"
              type="text"
              className="share-input"
            />
          </div>
          <hr className="share-hr" />
          <div className="share-bottom">
            <div className="share-options">
              <div className="shareOptionItem">
                <PermMedia htmlColor="tomato" className='share-icon'/>
                {/* htmlColor="tomato" this a material icon feature */}
                <span className="shareOptionText">Photo or Videos</span>
              </div>
              <div className="shareOptionItem">
                <Label htmlColor="blue" className='share-icon'/>
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOptionItem">
                <Room htmlColor="green" className='share-icon'/>
                <span className="shareOptionText">Locations</span>
              </div>
              <div className="shareOptionItem">
                <EmojiEmotions htmlColor="goldenrod" className='share-icon'/>
                <span className="shareOptionText">Feeling</span>
              </div>
            </div>
            <button className="share-btn">Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
