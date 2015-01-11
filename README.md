# lyflow
Node.js small foot print light weight general promise module

# How to use

Flowing example will use npm mysql module as an example explaining how to use lyflow:

_Install lyflow module_

```
$ npm install lyflow
```

_Example_

```javascript
var mysql      = require('mysql');
var Flow = require ('lyflow');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'YOUR PASSWRORD'
});

function Terminate() {
    console.log ("Program Terminated");
}

var flow = {
    end: Terminate
};
connection.connect(Flow.bind (flow, 'db_connect'));
flow.db_connect = function(err) {
    if (err) {
        console.log ("Error DB");
        return this.end ();
    }
    connection.query ('SELECT * FROM USER', Flow.bind (flow, 'user_query'));
}
flow.user_query = function (err, rows) {
    if (err) {
        console.log ("Error query USER: " + err);
        return this.end ();
    }
    console.log ("Result:" + JSON.stringify (rows));
}


```
