export default function template(content = "", initialState = {}) {
  let page = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="data:;base64,=">
  </head>
  <body>
    <div class="content">
       <div id="app" class="wrap-inner">
          ${content}
       </div>
    </div>
    <script>
      window.__STATE__ = ${JSON.stringify(initialState)}
    </script>
    <script src="/asset/client.js"></script>
  </body>
  `;
  return page;
}