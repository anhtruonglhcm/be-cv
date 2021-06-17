export default () => ({
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    externalLoginCallback: process.env.EXTERNAL_LOGIN_CALLBACK,
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY,
        expirationTime: parseInt(process.env.JWT_EXPIRATION_TIME),
    },
    jwtRefreshToken: {
        secretKey: process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
        expirationTime: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME),
    },
    database: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
    },
    smtp: {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        username: process.env.SMTP_USERNAME,
        password: process.env.SMTP_PASSWORD,
    },
    throttler: {
        ttl: parseInt(process.env.THROTTLE_TTL),
        limit: parseInt(process.env.THROTTLE_LIMIT),
    },
    facebook: {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    },
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
});