const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const prod = require('./config/prod');
const logger = require('morgan');
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

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', common);
app.use('/api/auth', auth);
app.use('/api/admin', admin);
app.use('/api/issue', issue);

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	})
}

const PORT = prod.port || 8080;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

module.exports = app;