const app = require('./app');
require('./database');
app.listen(app.get('port'));

console.log('Server On Port ',app.get('port'));