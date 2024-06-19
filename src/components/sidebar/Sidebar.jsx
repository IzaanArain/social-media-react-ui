import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  HelpOutline,
  Bookmark,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidbarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidbarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidbarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidbarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidbarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidbarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidbarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidbarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebar-btn">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendItem">
            <img
              className="sidebarFriendImg"
              src="/assets/person/janney.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
