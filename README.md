<p align="center">
  <img src="./assets/banner.png">
</p>

`Avenor` is `typescript`-based library for building RESTful services, Microservices or Serverless Functions. `Avenor`
aims to build asynchronic, small and expressive solution for modern back-end APIs. `Avenor` focuses on performance,
callbacks and error handling at bigger scale.

> Well... That's my first more serious project with potential change to be used by more than 10 people, I'm writing this
> for fun and I don't have much plans for that but in case of adaptation I'll maintain this package.
>
> When you install that package not that it's not ready to be used yet.

## Documentation

Official Documentation of project is available on same GitHub Repostory, if you would like to see our drafts on
application refer to [Avenor's GitHub Wiki](https://github.com/ZiQiLN/avenor/wiki)

## About Project

`Avenor` is currently only plan on which @ziqiln will work in free-time behind job, this project is open to any
contribution by forking repository and sending PR if someone is interested in development on such kind of project.

### Motivation

-  Create light library to build asynchronic microservices, serverless functions or RESTful services with few lines of
   code.
-  Archive small learning curve which will help in usage of project without reading tons of documentation.
-  Archive performance similar to `fastify` without all performance-based solutions that are used in fastify since
   routers in that way are uncomfortable.
-  Drop support for templating engines since they doesn't have much sense.

### Goals

Project don't have strict goals that must be archived but there is small list what I wanted to archive with this
project.

-  [ ] **Performance**: Library should work in asynchronic way, and should archive >60 000 requests per second on "Hello
       World" example to be realiable solution in ecosystem.
-  [ ] **Developer-friendly**: Implementation on few things that are frustrating in web frameworks such as logging and
       error-handling, these things should be provided our of box.
-  [ ] **Ecosystem**: Ecosystem of `Avenor` should have developer-focused API that will help in development of new
       middleware or plugins. There we can implement support for `express`-based middleware but I don't think that will
       be usable. Goal of **Ecosystem** is to archive modular applications that can be extended by installing additional
       packages from `avenor` community instead using libraries from every user.
-  [ ] **TypeScript**: It's 2020, I don't imagine writting back-end application without usage of TypeScript, in
       comparision to other web frameworks there should be support for TS Class because it's not possible to use it in
       every web framework.

### License

Project use some parts of code contained in [`express`](https://expressjs.com/), [`fastify`](https://www.fastify.io/)
and [`koa`](https://koajs.com/), at general it's distributed on `GNU-3` License which is available at
[`LICENSE.md`](./LICENSE)
