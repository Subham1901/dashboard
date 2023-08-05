import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import userContextData from "./context/userContext";

const Profile = () => {
  //get user data from context
  const { userinfo } = useContext(userContextData);
  return (
    <div>
      <div className="profile-container">
        <div className="profile-details">
          <div className="contact-label">
            {userinfo && (
              <div className="avatar">
                <Avatar
                  sx={{ height: 200, width: 200 }}
                  src={userinfo?.profilepicture}
                />
                <p>{userinfo?.name}</p>
              </div>
            )}
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <td>:</td>
                  <td>{userinfo?.username}</td>
                </tr>
                <tr>
                  <th>e-mail</th>
                  <td>:</td>
                  <td>{userinfo?.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>:</td>
                  <td>{userinfo?.phone}</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td>:</td>
                  <td>{userinfo?.website}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="company-label">
            <p>Company</p>
            <table>
              <tbody>
                <tr>
                  <th>Company</th>
                  <td>:</td>
                  <td>{userinfo?.company?.name}</td>
                </tr>
                <tr>
                  <th>Catchphrase</th>
                  <td>:</td>
                  <td>{userinfo?.company?.catchPhrase}</td>
                </tr>
                <tr>
                  <th>bs</th>
                  <td>:</td>
                  <td>{userinfo?.company?.bs}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prodile-address">
          <div className="address">
            <p>Address:</p>
            <table>
              <tr>
                <th>street</th>
                <td>:</td>
                <td>{userinfo?.address?.street}</td>
              </tr>
              <tr>
                <th>Suite</th>
                <td>:</td>
                <td>{userinfo?.address?.suite}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>:</td>
                <td>{userinfo?.address?.city}</td>
              </tr>
              <tr>
                <th>Zipcode</th>
                <td>:</td>
                <td>{userinfo?.address?.zipcode}</td>
              </tr>
            </table>
          </div>
          <div className="map">
            <img src="https://i.stack.imgur.com/HILmr.png" alt="map" />
            <div className="map-content">
              <p>
                Lat: <span>{userinfo?.address?.geo?.lat}</span>
              </p>
              <p>
                Long: <span>{userinfo?.address?.geo?.lng}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
