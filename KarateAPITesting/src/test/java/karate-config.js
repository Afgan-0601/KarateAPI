function fn() {   
 var env = karate.env; // get system property ‘karate.env’
// Printing out the env that is 
 karate.log('karate.env system property was:', env);
 if (!env) {
  env = ‘dev’;
 }
 var config = {
	apiURL: ‘https://conduit.productionready.io/api/’
 }
 if (env == 'dev') {
  config.userEmail = 'mgolovch@gmail.com'
  config.userPassword = ‘adminpassword’
 } 
 else if (env == 'qa') {
  config.userEmail = 'mgolovch@gmail.com'
  config.userPassword = ‘adminpassword’
 }
var accessToken = karate.callSingle('classpath:helpers/CreateToken.feature', config).authToken
karate.configure(‘headers’, {Authorization: 'Token '+ accessToken})
 return config;
}