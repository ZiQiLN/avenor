export type Body = {
	json: {
		type: 'json'
		readonly value: Promise<any>
	}
	form: {
		type: 'form'
		readonly value: Promise<URLSearchParams>
	}
	formdata: {
		type: 'from-data'
		// TODO: FormData Support
	}
	raw: {
		type: 'raw'
		readonly value: Promise<Uint8Array>
	}
}
