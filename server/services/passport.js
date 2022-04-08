const passport = require('passport');
const mongoose = require('mongoose');
const GoogleAuthStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')

const User = mongoose.model('users');

passport.use(new GoogleAuthStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        new User({ googleId: profile.id }).save();
    })
);