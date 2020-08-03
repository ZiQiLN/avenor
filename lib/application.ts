import debug from 'debug'
import { EventEmitter } from 'events'
import http from 'http'
import getPort from 'get-port'
import signale from 'signale'
import _ from 'lodash'

// TODO(#8): Main application Class which should have all important methods that are described in https://github.com/ZiQiLN/avenor/issues/8

export class Avenor {
	constructor() {
		// Application should be customizable in constructor, in that case there we should add option and types in interface which will help users to configure application.
	}

	// Idk how to implement that shit lol
	public register(fn: Function) {
		// Debug entry is okay
		debug(`avenor:middleware:${fn.name || 'anonymoyus'}`)
	}

	// Potentially this function ready but I'm not sure about core implementation.
	public async startup(port?: number) {
		// TODO: Create a listen shorthand for http.createServer, which will allow user of library to use .listen method like in other libraries.
		// debug('avenor:listen')
		// HACK: HelloWorld for testing listen functionality of application.
		// TODO: Write a test for listen function.
		debug('avenor:startup')
		const PORT = await getPort({
			port: 3000,
		})
		let server = http.createServer() // There should "this" object but sadly this class missing types.
		return server.listen(PORT, undefined, undefined, () => {
			signale.success('Server successfully started at http://localhost:%s', PORT)
		})
	}
}
