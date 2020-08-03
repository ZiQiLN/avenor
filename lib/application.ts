import debug from 'debug'
import { EventEmitter } from 'events'
import http from 'http'
import { ApplicationConfiguration } from './interfaces/application'

// TODO(#8): Main application Class which should have all important methods that are described in https://github.com/ZiQiLN/avenor/issues/8

class Application extends EventEmitter {
	/** Initialize a new application. */
	constructor(opts: ApplicationConfiguration) {
		super()
		// Application should be customizable in constructor, in that case there we should add option and types in interface which will help users to configure application.
	}

	public listen() {
		// TODO: Create a listen shorthand for http.createServer, which will allow user of library to use .listen method like in other libraries.
		debug('avenor:listen')
	}

	public use() {
		// NOTE: Use method which will implment middleware to application, there also we should think about router implmentatiom.
	}
}
