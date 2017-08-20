var config = {
  // set any config value you want to override EVERYTHING, even in individual pairs.
  //----------------------------------------------- 
  // EMAIL 
  //----------------------------------------------- 
  ALERT_ON_NO_FUNDS: false,// email on insufficcient funds 
  SMTP_EMAIL: '%40@gmail.com',
  ALERT_EMAIL: '**',
  SMTP_PASSWORD: '**',
  SMTP: true,
  SMTP_PROTOCOL: 'SMTPS',
  SMTP_HOST: 'smtp.gmail.com',
};

module.exports = config;
