# `avenor` Documentation

## Installation

```
yarn add avenor
npm install avenor --save
```

## HelloWorld Example

```typescript
import { Avenor } from 'avenor'
import { Router } from '@avenor/router'
import bodyParser from 'body-parser'

const app = new Avenor({
	useDefaultPort: true,
})

app.use(bodyParser())

const myRouter = new Router()

myRouter.get('/', async (ctx) => {
	ctx.json('Hello World')
})

app.use('/', myRouter)

app.listen() // 3600 or random available port
```

```bash
node-ts app.ts
```

## Routing

```
const router = new Router()

router.METHOD(PATH, HANDLER)
```

-  `router` is new instance of `@avenor/router`
-  `METHOD` is an [`HTTP Method`](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
