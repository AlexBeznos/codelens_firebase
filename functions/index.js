const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { eventWithSentry } = require('./src/sentry');
const { createInitProjects } = require('./src/projects');

const languageTemplates = require('./src/templates/languages');

const container = { admin, languageTemplates };

exports.onUserCreate = funstions.auth.user().onCreate(eventWithSentry(createInitProjects(container)));

