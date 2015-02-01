#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/alexsantos/ws-security?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Implementing WS-Security on SOAP clients

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

MIT © [Alexandre Santos](https://github.com/alexsantos)


[npm-url]: https://npmjs.org/package/ws-security
[npm-image]: https://badge.fury.io/js/ws-security.svg
[travis-url]: https://travis-ci.org/alexsantos/ws-security
[travis-image]: https://travis-ci.org/alexsantos/ws-security.svg?branch=master
[daviddm-url]: https://david-dm.org/alexsantos/ws-security.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/alexsantos/ws-security
