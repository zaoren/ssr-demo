require('@babel/register');

const app = require('./server').default;

app.listen(8002);
console.log('app is starting at port 8002');