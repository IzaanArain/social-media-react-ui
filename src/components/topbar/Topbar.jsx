import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"
import Person1 from '/assets/person/salman.jpg'
const Topbar = () => {
  return (
   <div className="topbarContainer">
    <div className="topbarLeft">
        <span className="topbarLogo">MySocialMediaApp</span>
    </div>
    <div className="topbarCenter">
        <div className="topbar-searchbar">
            <Search className="topbar-searchIcon"/>
            <input placeholder="Search for friends, post or video" type="text" className="topbar-searchInput" />
        </div>
    </div>
    <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBage">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBage">2</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBage">1</span>
            </div>
        </div>
        <img src={Person1} alt="" className="topbarImg"/>
    </div>
   </div>
  )
}

export default Topbar