import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '158191890351-2p4lgtuvjkr7ofggqqr6930qjqphfrl6.apps.googleusercontent.com',
        scope: 'email'
      })
    });

  }

  render() {
    return (
      <div>
        Google Auth
      </div>
    );
  };
};

export default GoogleAuth;