# hubot-sl

A hubot script gives you SL real time information of a station

See [`src/sl.js`](src/sl.js) for full documentation.

## Installation

In hubot project repo, run:

`npm install git+ssh://git@github.com:andreasgoth/hubot-sl.git --save`

Then add **hubot-sl** to your `external-scripts.json`:

```json
[
  "hubot-sl"
]
```

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
