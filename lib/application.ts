import debug from 'debug'
import { EventEmitter } from 'events'
import http from 'http'
import spdy from 'spdy'

// TODO(#8): Main application Class which should have all important methods that are described in https://github.com/ZiQiLN/avenor/issues/8

export interface AvenorConfiguration {
	https?: boolean
	http2?: boolean
}

export const DefaultConfiguration: AvenorConfiguration = {
	https: false,
	http2: false,
}

export class Avenor {
	// TODO: Initialize new application with specific constructor options such as usage of spdy protocol known as HTTP/2.
	constructor(opts?: AvenorConfiguration) {
		// Application should be customizable in constructor, in that case there we should add option and types in interface which will help users to configure application.
	}

	public listen(PORT: number) {
		// TODO: Create a listen shorthand for http.createServer, which will allow user of library to use .listen method like in other libraries.
		// debug('avenor:listen')
		// HACK: HelloWorld for testing listen functionality of application.
		// TODO: Write a test for listen function.
	}

	public use(fn: Function) {}
}
