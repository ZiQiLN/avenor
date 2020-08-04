import http from 'http'
import https from 'https'
import http2 from 'http2'

import getPort from 'get-port'
import signale from 'signale'
import _ from 'lodash'

import debug from 'debug'
import { EventEmitter } from 'events'

// TODO(#8): Main application Class which should have all important methods that are described in https://github.com/ZiQiLN/avenor/issues/8

export class Avenor {
	// ...
	constructor() {}

	private createServer() {}

	// public use() {}, currently we're thinking about usage of use() or register()

	// TODO: Register function will be used to include a new middleware of application, optionally we'll work for a router support, to implement.
	public register() {}
	// TODO: listen() function should run application on specified PORT and allow user to include callback function. This will be probably used at production because we have startup() command for development enviroment.
	public listen(port: number, hostname?: string, backlog?: number, callback?: Function) {}
	// NOTE: Similar function to listen() but this one, runs application automatically without configuration of PORT by default preferable port (1337) and includes callback. If PORT 1337 is taken application will automatically find one and run on random free port. Usefull for development not much at production.
	public async startup() {}
}
