import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOkNBpP_nMBHmaFl-QYzu-eAPKCCKSI_Weg&usqp=CAU" alt=""/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              ACCUEIL
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              MESSAGERIE
            </Link>
          </li>
          {/*<li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>*/}
          <li className="topListItem">
            <Link className="link" to="/write">
              NOUVEAU POST
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                CONNEXION
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                INSCRIPTION
              </Link>
            </li>
          </ul>
        )}
        {/*<i className="topSearchIcon fas fa-search"></i>*/}
      </div>
    </div>
  );
}
