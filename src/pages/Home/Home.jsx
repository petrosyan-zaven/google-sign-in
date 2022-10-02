import React from 'react'
import { GoogleLogin,  GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useState, useEffect } from 'react';
import PostList from '../../components/PostList/PostList';


function Home() {
  const [ profile, setProfile ] = useState([]);
  const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
  useEffect(() => {
      const initClient = () => {
          gapi.client.init({
              clientId: clientId,
              scope: ''
          });
      };
      gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
      setProfile(res.profileObj);
  };

  const onFailure = (err) => {
      console.log('failed', err);
  };

  const logOut = () => {
      setProfile(null);
  };

  return (
      <div>
          {profile ? (
              <div>
                <PostList />
                  <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
              </div>
          ) : (
              <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
              />
          )}
      </div>
  );
}

export default Home