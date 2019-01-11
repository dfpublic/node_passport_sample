var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Config = require('../../config/index');
let fs = require('fs');
let path = require('path');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: Config.Google.OAuth2.client_id,
    clientSecret: Config.Google.OAuth2.client_secret,
    callbackURL: Config.Google.OAuth2.callback_url
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