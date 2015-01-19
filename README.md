#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Implementing WS-Security on SOAP webservices

This module is based on the work from the vpulim/node-soap module. This implementation now makes it available to other SOAP Clients using nodejs.
This module is a rewrite to make the attributes passed private (username and password).

## Install

```sh
$ npm install ws-security
```


## Usage

```js
var WSSecurity = require('ws-security');

var sec = new WSSecurity('username', 'password');

var xml = sec.toXML();
```


## License

MIT © [Alexandre Santos](https://github.com/AlexSantos)


[npm-url]: https://npmjs.org/package/ws-security
[npm-image]: https://badge.fury.io/js/ws-security.svg
[travis-url]: https://travis-ci.org/AlexSantos/ws-security
[travis-image]: https://travis-ci.org/AlexSantos/ws-security.svg?branch=master
[daviddm-url]: https://david-dm.org/AlexSantos/ws-security.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/AlexSantos/ws-security
