import http from 'http'
import https from 'https'
import http2 from 'http2'

import getPort from 'get-port'
import signale from 'signale'
import _ from 'lodash' // We need to get rid of that shit

import debug from 'debug'

// TODO(#8): Main application Class which should have all important methods that are described in https://github.com/ZiQiLN/avenor/issues/8

// NOTE: Maybe some code from Deno projects would help, because there we'll find always strongly typed code in comparision to JavaScript libraries which porting is almost impossible because messed types.
// It's worthly to check three projects:
// https://github.com/zhmushan/abc/
// https://github.com/l2ig/aqua
// https://github.com/fastrodev/fastro

debug('avenor:constructor')

export class Avenor {
	// Method that holds an http.Server on which application will be based, I have no idea actually how to implement http2-based server, I'll do more research on this idea.
	server: http.Server | undefined
	// TODO(#6): Router Implementation
	router: undefined
	// TODO(#8) Add Middleware Support
	middleware: undefined
	// TODO(#8): Add Pre-Middleware Support
	premiddleware: undefined

	// Namespace for defining private processes that going to be used inside class functions in asynchronic way.
	#process: Promise<void> | undefined

	// TODO: use() function will be used to include a new middleware of application, optionally we'll work for a router support, to implement.
	public use() {}
	// TODO(): Private function to apply middleware to application class, in asynchronic loop, that will be fast method I think. Function should work with two parameters, first one for handler function and second one for array containing middleware functions.
	private applyMiddleware(h: undefined, m: undefined) {}
	// TODO: listen() function should run application on specified PORT and allow user to include callback function. This will be probably used at production because we have startup() command for development enviroment.
	// NOTE: Worthly thing to note is implementation of **http2** server inside application which can be impactful on performance in large applications, also we can think about clustering but implementation of clustering at library-level can potentially broke application.
	public listen() {}
	// NOTE: Similar function to listen() but this one, runs application automatically without configuration of PORT by default preferable port (1337) and includes callback. If PORT 1337 is taken application will automatically find one and run on random free port. Usefull for development not much at production.
	private async start(s: http.Server): Promise<void> {
		this.server = s
		// TODO: Create a new Context which will implement middlewares
	}
}
