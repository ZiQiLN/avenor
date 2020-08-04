import assert from 'assert'

export type BodyType = 'form' | 'from-data' | 'json' | 'text' | 'raw' | 'undefined'

export type BodyJSON = {
	type: 'json'
	readonly value: Promise<any>
}

export type BodyForm = {
	type: 'form'
	readonly value: Promise<URLSearchParams>
}

export type BodyFormData = {
	type: 'form-data'
	readonly value: FormDataReader
}
export type BodyText = { type: 'text'; readonly value: Promise<string> }
export type BodyRaw = { type: 'raw'; readonly value: Promise<Uint8Array> }
export type BodyUndefined = { type: 'undefined'; readonly value: undefined }

export type Body = BodyJSON | BodyForm | BodyFormData | BodyText | BodyRaw | BodyUndefined
