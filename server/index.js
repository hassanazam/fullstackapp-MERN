const express = require('express');
const passport = require('passport');
const GoogleAuthStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleAuthStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);