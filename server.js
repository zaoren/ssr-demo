import Koa from "koa";
import serve from "koa-static"; // 用来指定项目的根目录，根目录之上的文件都不能被访问到
import path from "path";
import React from "react";
import template from "./template";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, matchPath } from "react-router-dom";
import KoaRouter from "koa-router";
import { Provider } from "react-redux";
import getStore from "./src/store";
import Router from "./src/router";

const koaRouter = new KoaRouter();

const app = new Koa();

app.use(serve(path.resolve(__dirname)));

koaRouter.get("/(.*)", async (ctx) => {
  const context = {};
  const store = getStore();
  const matchRoutes = [];
  const promises = [];

  Router.some((route) => {
    matchPath(ctx.url, route) ? matchRoutes.push(route) : "";
  });

  console.log('matchRoutes', matchRoutes); 
  matchRoutes.forEach((item) => {
    promises.push(item.loadData(store));
  });

  // 子组件中的 getInitialValue 怎么处理？？？

  console.log('promises', promises);

  Promise.all(promises).then(() => {
    //可以console一下看到当前的store已经有数据
    console.log('store.getState()', store.getState());

    ctx.body = template(
      renderToString(
        <Provider store={store}>
          <StaticRouter location={ctx.url} context={context}>
            {Router.map((router) => (
              <Route {...router} />
            ))}
          </StaticRouter>
        </Provider>
      ),
      store.getState()
    );
  });
});

app.use(koaRouter.routes());

export default app;
