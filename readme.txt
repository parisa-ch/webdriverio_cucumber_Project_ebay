installation :
1- npm init --y
2- npm init wdio@latest ./
3- npm install chromedriver --save-dev

before run set this in pkg.json:
 "scripts": {
    "wdio": "wdio run ./wdio.conf.js"
  },

2- Run Tests :
=======================
npm run wdio