module.exports = {

 adminUsername : 'fernando',
 adminPassword : '654321aA',

 port : process.env.PORT || 3000,

 tokenSecretKey : process.env.SECRET_KEY || 'super_secret',
 /** Expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, '2 days', '10h', '7d' */
 tokenExireTime : '1h'

 }