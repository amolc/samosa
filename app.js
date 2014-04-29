var express = require('express'), path = require('path');
var app = express();

employees = require('./api/employee');
product = require('./api/product');
vendor = require('./api/vendor');
state = require('./api/state');
municipality=require('./api/municipality');
housingAssociation=require('./api/housingAssociation');
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
// 
// app.get('/api/employees/:id/reports', employees.findByManager);
// app.get('/api/employees/:id', employees.findById);
// app.get('/api/employees', employees.findAll);
// 
// app.get('/api/products', product.findAll);
// app.get('/api/products/:id', product.findById);
// 
// app.get('/api/vendors', vendor.findAll);
// app.get('/api/vendors/:id', vendor.findById);
app.get('/api/state', state.findAllstate);
app.get('/api/municipality/:id', municipality.findMunicipality);
app.get('/api/housingAssociation/:id', housingAssociation.findHousinnAss);

app.listen(3000);
console.log('Listening on port 3000...'); 
