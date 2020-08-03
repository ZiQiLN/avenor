const test = require('ava')
import { Application } from '../../lib'

test('It should run application on random port', (t) => {
	const app = new Application()
	app.listen(3600, (e) => {
		console.log('Listening on 3600')
		t.ok()
	})
})
