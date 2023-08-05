import React, { useContext, useEffect } from "react";
import { Avatar } from "@mui/material";
import userContextData from "./context/userContext";
const Profile = () => {
  //get user data from context
  const { userinfo } = useContext(userContextData);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
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
            <>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.3119725947317!2d77.59343284587686!3d12.926249612463817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15090fc15417%3A0x10eefde49e9fd94!2sPanorbit!5e0!3m2!1sen!2sin!4v1691245219496!5m2!1sen!2sin"
                width="500"
                className="map"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </>
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
