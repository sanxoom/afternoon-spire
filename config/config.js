var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    development: {
        db: 'mongodb://admin:mun2ball@paulo.mongohq.com:10018/app17710669',
        root: rootPath,
        app: {
            name: 'MEAN - A Modern Stack - Development'
        },
        facebook: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    },
    test: {
        db: 'mongodb://localhost/mean-test',
        root: rootPath,
        app: {
            name: 'MEAN - A Modern Stack - Test'
        },
        facebook: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    },
    production: {
        db: 'mongodb://localhost/mean',
        root: rootPath,
        app: {
            name: 'MEAN - A Modern Stack - Production'
        },
        facebook: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    }
};