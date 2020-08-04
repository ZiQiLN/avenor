---
id: doc1
title: Introduction to Avenor
sidebar_label: Style Guide
---

Hello Traveler, I'm [Jay](https://github.com/ZiQiLN), actual creator of [Avenor](https://github.com/ziqiln/avenor). I
always wanted to create my own library as a JavaScript Developer and decided to build my own little cute library for
developing HTTP Services. I have some motivation for this project since `express` has good alternative `nestjs` but they
sticked too much to `angular` and their library made me womit.

I've decided to build my own library called `avenor` which is a little mixup of `express`, `nest` and `fastify`. I'm
looking to archive most performance as it's possible in this library as `fastify` does but also keep simple and clean
API to be easy for developers, and have included few useful things like error handling.

### Motivation

-  Create light library to build asynchronic microservices, serverless functions or RESTful services with few lines of
   code.
-  Archive small learning curve which will help in usage of project without reading tons of documentation.
-  Archive performance similar to `fastify` without all performance-based solutions that are used in fastify since
   routers in that way are uncomfortable.
-  Drop support for templating engines since they doesn't have much sense.

### Goals of `avenor`

1. Archive good performance (something between `express` and `fastify`)
2. Build Koa-based `ctx` in parameter which is comfortable in usage.
3. Build strong ecosystem of middleware and plugins to extend basic possibilities of `avenor`.
