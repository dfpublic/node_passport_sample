var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

let fs = require('fs');
let path = require('path');

const GOOGLE_CLIENT_ID = '329768940404-oh8ooucbrc36jc14a1b24vel4tq8bome.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'ZidEmfHBQWAiCumaXXNXons_';
// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:8000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      let info = {
          accessToken,
          refreshToken,
          profile
      }
      fs.writeFileSync(path.resolve(path.join(__dirname, 'userinfo.json')), JSON.stringify(info));
      console.log(`User logged in: ${profile.displayName}`);
      done(null);
  }
));