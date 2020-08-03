import test from 'ava'
import http from 'http'
import got from 'got'
import listen from 'test-listen'
import getport from 'get-port'
import { Application } from '../../lib'

test('Application should listen on specifed port.', async (t) => {
	// TODO: Test should build application instance, run listen function on port provided by getport and check that application is listening on specified port by running a request and expecting 404 or simplify using test-listen function to check that application is listening.
	t.fail('Test is not implemented yet')
})
