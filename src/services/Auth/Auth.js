import auth0 from 'auth0-js';

/* eslint class-methods-use-this: ["error", { "exceptMethods":
["setSession", "logout", "isAuthenticated"] }] */
class Auth {
  constructor(history) {
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: 'evis.auth0.com',
      clientID: 'cGTBW64NQSNoqtzxy7NppBdDTaF1YnrH',
      redirectUri: 'http://localhost:3000/callback',
      audience: 'https://evis.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid',
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.history.push('/');
      } else if (err) {
        console.log(err);
        this.history.push('/');
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    // eslint-disable-next-line
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    this.history.push('/');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    this.history.push('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}

export default Auth;
