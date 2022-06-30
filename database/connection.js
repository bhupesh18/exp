const pgp = require('pg-promise')({});
const db = pgp('postgres://postgres:1234@localhost:5432/articledb');

function home(){
    return db.any(`SELECT * FROM home`);
}

function author(){
    return db.any(`SELECT * FROM athr`);
}
function addAuthor(authorname,articletitle,atext){
    return db.any(`INSERT INTO athr(authorname, articletitle, atext)
        VALUES ($1, $2, $3)`,[authorname,articletitle,atext]);
}

function users(){
    return db.any(`SELECT * FROM users`);
}
function addPerson(fname,lname,phone,email,message){
    return db.any(`INSERT INTO users(fname, lname, phone, email, message)
        VALUES ($1, $2, $3, $4, $5)`,[fname,lname,phone,email,message]);
}

function about(){
    return db.any(`SELECT * FROM abt`);
}

function getArt(id){
    return db.any(`SELECT * FROM home WHERE id = $1`,[id]);
}
// function deleteItem(Id){
//     let a = db.any('SELECT * FROM users WHERE Id = $1',[id])
//      db.any('DELETE FROM users WHERE Id = $1',[Id])
//      return (a)
// }

module.exports = {
    home,
    author,
    addAuthor,
    users,
    addPerson,
    about,
    getArt,
    // deleteItem
}