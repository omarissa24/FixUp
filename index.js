const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const prod = require('./config/prod');
//const keys = require('./config/keys');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./models/User');
require('./models/Project');
require('./models/Issue');
require('./models/Feed');
require('dotenv').config();

mongoose.connect(prod.mongoURI, (err) => {
	if(err) throw err
	else console.log("Successfully connected to DB");
});

//Routes
const common = require('./routes/common');
const auth = require('./routes/authRoute');
const admin = require('./routes/adminRoute');
const issue = require('./routes/issueRoute');

const app = express();
app.use(cors());

app.use(passport.initialize());
require('./services/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', common);
app.use('/api/auth', auth);
app.use('/api/admin', admin);
app.use('/api/issue', issue);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

module.exports = app;