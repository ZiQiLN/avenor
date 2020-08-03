import debug from "debug";
import { Emitter } from "events";
import { ApplicationConfiguration } from "./interfaces/application";

// TODO(#8): Main application Class which should have all important methods that are described in https://github.com/ZiQiLN/avenor/issues/8

class Application extends Emitter {
  constructor(opts: ApplicationConfiguration) {
    // Application should be customizable in constructor, in that case there we should add option and types in interface which will help users to configure application.
  }
}
