import test from 'ava'
import got from 'got'
import listen from 'test-listen'
import getport from 'get-port'
import http from 'http'
import { Avenor } from '../../lib'

test('Application should listen on specifed port.', async (t) => {
	// TODO: Test should build application instance, run listen function on port provided by getport and check that application is listening on specified port by running a request and expecting 404 or simplify using test-listen function to check that application is listening.
	// NOTE: Application should pass this test when it will have implemented hello world example as a default '/' router, it will be removed after release.
	let app = new Avenor()
	const port = await getport({
		port: 3600,
	})
	const srv = http.createServer(app)
	const prefix = await listen(srv)
	const data = await got(prefix).json()
	t.is(data, {
		hello: 'world',
	})
})
