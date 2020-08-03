import { Avenor } from './lib'
import morgan from 'morgan'

const app = new Avenor()

app.register(morgan('dev'))

app.startup()
