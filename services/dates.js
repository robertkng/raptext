const fetch = require('node-fetch');
const USER_ID = process.env.USER_ID;
const X_ZUMO_AUTH = process.env.X_ZUMO_AUTH;
const X_ZUMO_APPLICATION = process.env.X_ZUMO_APPLICATION;
const authorization = `Basic ${window.btoa(`${X-ZUMO-AUTH}:${X-ZUMO-APPLICATION}`)}`;

function pullDates(req, res, next) {
  //console.log('oyoyoyoyoyoyo', req.body)
  // const image = req.body.url;
  const URL = 'https://apidev.rapchat.me/api/userprofile';
  const authParams = {
      method: 'POST',
      headers: {
        Authorization: authorization(),
        'Content-Type': 'application/json; charset=utf-8',
      },
        body: JSON.stringify({ 'USER_ID': USER_ID })
  };
  fetch(URL, authParams)
   .then(r => r.json())
   .then((data) => {
     res.dates = data;
     next();
   })
.catch(error => console.log('error: ', error));
}


module.exports = { pullDates };
