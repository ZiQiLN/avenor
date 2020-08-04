import http from 'http'
import https from 'https'
import http2 from 'http2'

import getPort from 'get-port'
import signale from 'signale'
import _ from 'lodash'

import debug from 'debug'
import { EventEmitter } from 'events'

// TODO(#8): Main application Class which should have all important methods that are described in https://github.com/ZiQiLN/avenor/issues/8

// NOTE: Maybe some code from Deno projects would help, because there we'll find always strongly typed code in comparision to JavaScript libraries which porting is almost impossible because messed types.
// It's worthly to check three projects:
// https://github.com/zhmushan/abc/
// https://github.com/l2ig/aqua
// https://github.com/fastrodev/fastro

export class Avenor {
	// Implementation of Server type which is related to http.Server
	server: http.Server | undefined

	constructor() {}

	// TODO: use() function will be used to include a new middleware of application, optionally we'll work for a router support, to implement.
	public use() {}
	// TODO: listen() function should run application on specified PORT and allow user to include callback function. This will be probably used at production because we have startup() command for development enviroment.
	// NOTE: Worthly thing to note is implementation of **http2** server inside application which can be impactful on performance in large applications, also we can think about clustering but implementation of clustering at library-level can potentially broke application.
	public listen() {}
	// NOTE: Similar function to listen() but this one, runs application automatically without configuration of PORT by default preferable port (1337) and includes callback. If PORT 1337 is taken application will automatically find one and run on random free port. Usefull for development not much at production.
	public async startup() {}
}
