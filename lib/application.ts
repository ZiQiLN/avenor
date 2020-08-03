import debug from 'debug'
import { EventEmitter } from 'events'
import http from 'http'
import spdy from 'spdy'
import { ApplicationConfiguration } from './interfaces/application'

// TODO(#8): Main application Class which should have all important methods that are described in https://github.com/ZiQiLN/avenor/issues/8

export class Application extends EventEmitter {
	public middleware: Array<Function>
	public routers: Array<Function>

	/** Initialize a new application. */
	constructor() {
		super()
		// Application should be customizable in constructor, in that case there we should add option and types in interface which will help users to configure application.
		this.middleware = []
		this.routers = []
	}

	public listen(PORT: number, callback: Function) {
		// TODO: Create a listen shorthand for http.createServer, which will allow user of library to use .listen method like in other libraries.
		debug('avenor:listen')
		const server = http.createServer().listen(PORT, undefined, undefined, callback())
		return server
	}

	public route() {}

	public use(fn: Function) {
		// NOTE: Use method which will implment middleware to application, there also we should think about router implmentatiom, based on express instead Koa.
		debug(`use ${fn.name}`)
		this.middleware.push(fn)
		return this
	}
}
