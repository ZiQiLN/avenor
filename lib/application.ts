import debug from 'debug'
import { EventEmitter } from 'events'
import http from 'http'
import spdy from 'spdy'
import _ from 'lodash'

// TODO(#8): Main application Class which should have all important methods that are described in https://github.com/ZiQiLN/avenor/issues/8

interface MiddlewareObject {
	middleware: Function
}

interface RouteObject {
	path: string
	handler: Function
}

// This is from Koa, not from me. Blame Koa not me.
export class Avenor {
	/** Container with informations about middlewares */
	private middleware: Array<MiddlewareObject>
	private routers: Array<RouteObject>

	constructor() {
		this.middleware = []
		this.routers = []
		// Application should be customizable in constructor, in that case there we should add option and types in interface which will help users to configure application.
	}

	// Probably work, idk I have no option to test that shit.
	// Function for implementing middleware into application.
	public register(fn: Function) {
		var handle = fn

		// Wrapping ServerInstance
		if (handle instanceof http.Server) {
			handle = handle.listeners('request')[0]
		}

		debug(`avenor:middleware | ${handle.name || 'anonymoyus'}`)

		this.middleware.push({ middleware: handle })
	}

	public async startup(PORT?: number) {
		// TODO: Create a listen shorthand for http.createServer, which will allow user of library to use .listen method like in other libraries.
		// debug('avenor:listen')
		// HACK: HelloWorld for testing listen functionality of application.
		// TODO: Write a test for listen function.
		debug('avenor:listen')
		let server = http.createServer() // There should "this" object but sadly this class missing types.
		return server.listen.apply(server, arguments)
	}
}
