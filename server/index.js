import Koa from 'koa'
// import KoaRouter from 'koa-router'
import { renderToString } from 'react-dom/server'
import React from 'react'
import Home from '../components/home'
import Login from '../components/login'
import views from 'koa-views'
import server from 'koa-static'
import { StaticRouter, Switch, Route } from 'react-router-dom'
// const path = require('path')

const app = new Koa()
// const router = new KoaRouter()

app.use(views('views', { extension: 'ejs' })).use(server('dist'))

app.use(async (ctx) => {
  const content = (
    <StaticRouter location={ctx.path}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </StaticRouter>
  )
  ctx.type = 'text/html'
  const renderString = renderToString(content)
  await ctx.render('home', { renderString })
})

// app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
