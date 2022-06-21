const sqlite3 = require("sqlite3").verbose();


const db = new  sqlite3.Database("./positions.db",sqlite3.OPEN_READWRITE,(err) =>{

	if(err) return console.error(err.message);
	console.log("connected");
});
//db.run("create table positions(id,x,y)");
const insert = 'INSERT INTO positions (id,x,y) VALUES (?,?,?)';
const selectall = 'SELECT * FROM positions';
//                db.run(insert,[1,100,200]);
db.all(selectall,[],(err,rows) =>{

	if(err) return console.error(err.message);
	rows.forEach((row) =>{
		console.log(row);
	});

});
db.close((err) =>{

	if(err) return console.error(err.message);

});


