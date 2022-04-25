const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bcrypt = require('bcryptjs');

// db connection
const db = require('./configs/db.config');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const matchesRouter = require('./routes/matches')
const tournamentsRouter = require('./routes/tournaments')
const sportsRouter = require('./routes/sports')
const profilesRouter = require('./routes/profiles')
const teamsRouter = require('./routes/teams')
const conversationsRouter = require('./routes/conversations')
const messagesRouter = require('./routes/messages')
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter(db));
app.use('/api', matchesRouter(db));
app.use('/api', tournamentsRouter(db));
app.use('/api', sportsRouter(db));
app.use('/api', profilesRouter(db));
app.use('/api', teamsRouter(db));
app.use('/api', conversationsRouter(db));
app.use('/api', messagesRouter(db));



module.exports = app;
