import "./rightbar.css";

const Rightbar = () => {
  return (
    <>
      <div className="rightbar">
        <div className="rightbar-wrapper">
          <div className="birthday-container">
            <img
              className="birthday-img"
              src="assets/gift.png"
              alt="birthday"
            />
            <span className="birthday-text">
              <b>Tom Hiddleston</b> and <b>3 other friends</b> have a birthday
              today
            </span>
          </div>
          <img className="rightbar-ad" src="assets/fashion-ad.jpg" alt="" />
          <h4 className="rightbar-title">Online Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriendItem">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src="assets/person/cho.jpg"
                  alt=""
                />
                <span className="rightbar-online"></span>
              </div>
              <span className="rightbar-username">Cho Cho</span>
            </li>
            <li className="rightbarFriendItem">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src="assets/person/cho.jpg"
                  alt=""
                />
                <span className="rightbar-online"></span>
              </div>
              <span className="rightbar-username">Cho Cho</span>
            </li>
            <li className="rightbarFriendItem">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src="assets/person/cho.jpg"
                  alt=""
                />
                <span className="rightbar-online"></span>
              </div>
              <span className="rightbar-username">Cho Cho</span>
            </li>
            <li className="rightbarFriendItem">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src="assets/person/cho.jpg"
                  alt=""
                />
                <span className="rightbar-online"></span>
              </div>
              <span className="rightbar-username">Cho Cho</span>
            </li>
            <li className="rightbarFriendItem">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src="assets/person/cho.jpg"
                  alt=""
                />
                <span className="rightbar-online"></span>
              </div>
              <span className="rightbar-username">Cho Cho</span>
            </li>
            <li className="rightbarFriendItem">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src="assets/person/cho.jpg"
                  alt=""
                />
                <span className="rightbar-online"></span>
              </div>
              <span className="rightbar-username">Cho Cho</span>
            </li>
            <li className="rightbarFriendItem">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src="assets/person/cho.jpg"
                  alt=""
                />
                <span className="rightbar-online"></span>
              </div>
              <span className="rightbar-username">Cho Cho</span>
            </li>
            <li className="rightbarFriendItem">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src="assets/person/cho.jpg"
                  alt=""
                />
                <span className="rightbar-online"></span>
              </div>
              <span className="rightbar-username">Cho Cho</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
