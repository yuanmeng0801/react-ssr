import Koa from 'koa'
import { renderToString } from 'react-dom/server'
import React from 'react'
import Home from '../components/home'
import Login from '../components/login'
import views from 'koa-views'
import server from 'koa-static'
import { StaticRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import getStore from '../components/store'
import routes from '../routes'
// import { matchRoutes } from 'react-router-config'
// var matchRoutes = require('react-router-config').matchRoutes
const app = new Koa()

app.use(views('views', { extension: 'ejs' })).use(server('dist'))

app.use(async (ctx) => {
  // const matchedRoutes = matchRoutes(routes, ctx.path)
  // console.log(matchedRoutes)
  const content = (
    <Provider store={getStore()}>
      <StaticRouter location={ctx.path}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </StaticRouter>
    </Provider>
  )
  ctx.type = 'text/html'
  const renderString = renderToString(content)
  await ctx.render('home', { renderString })
})

app.listen(3000)
