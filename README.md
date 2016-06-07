# hubot-sl

A hubot script gives you SL real time information of a station

See [`src/sl.js`](src/sl.js) for full documentation.

## Installation

In hubot project repo, run:

`npm install git+https://github.com/andreasgoth/hubot-sl.git --save`

Then add **hubot-sl** to your `external-scripts.json`:

```json
[
  "hubot-sl"
]
```

Don't forget to add `HUBOT_SL_RTI3_API_KEY` and `HUBOT_SL_SITEID` env variables. Get your API key here: [SL Realtidsinformation](https://www.trafiklab.se/api/sl-realtidsinformation-3). And get the SiteId for your closest station here: [SL Platsuppslag](https://www.trafiklab.se/api/sl-platsuppslag/konsol).

## Sample Interaction

```
user1>> hubot sl
hubot>> *Skogskyrkogården*​
Farsta strand - Kort tåg Nu
Farsta strand 15 min
Farsta strand 29 min
Alvik 9 min
Alvik 24 min
Alvik 22:37
```
