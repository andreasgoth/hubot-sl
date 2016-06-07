// Description
//  A hubot script gives you SL real time information of a station
//
// Configuration:
//   HUBOT_SL_RTI3_API_KEY
//   HUBOT_SL_SITEID
//
// Commands:
//   hubot sl - Return real time information about the set station
//
// Notes:
//   Get your API key here:
//   https://www.trafiklab.se/api/sl-realtidsinformation-3
//   Get the SiteId for your closest station here:
//   https://www.trafiklab.se/api/sl-platsuppslag/konsol
//
// Author:
//   Andreas Göth <a@hrhr.se>

"use strict";

module.exports = function(robot) {

  const API_URL = 'http://api.sl.se/api2/realtimedepartures.json'
  const TIMEWINDOW = 20; // Max 60

  robot.respond(/sl/, function(res) {

    if (typeof process.env.HUBOT_SL_RTI3_API_KEY === 'undefined') {
      res.reply('API key is not configured');
      return;
    }

    if (typeof process.env.HUBOT_SL_SITEID === 'undefined') {
      res.reply('SiteId is not configured');
      return;
    }

    const reqUrl = `${API_URL}?key=${process.env.HUBOT_SL_RTI3_API_KEY}` +
      `&siteid=${process.env.HUBOT_SL_SITEID}` +
      `&timewindow=${TIMEWINDOW}`;

    robot.http(reqUrl)
      .header('Accept', 'application/json')
      .get() (function(err, response, body) {

      let data = JSON.parse(body);
      let slString = '';
      data.ResponseData.Metros.forEach(function(el, i, arr) {
        slString += ' ' + el.Destination + ' ' + el.DisplayTime + '\n';
      });

      res.send(`*${data.ResponseData.Metros[0].StopAreaName}*\n${slString}`);
    });
  });
};
