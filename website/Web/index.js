const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json())



const blogSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  class: String,
  floor: String,
  subject: String,
  score: String
});



app.post('/student/insert', async (req, res) => {
  connect()
  let fight = mongoose.model("fight", blogSchema);
  let student_data = await fight.insertMany({ "firstname": req.body.firstname, "lastname": req.body.lastname,"class": req.body.class,"floor": req.body.floor,"subject": req.body.subject,"score": req.body.score });
  res.send(student_data);
})

app.post('/student/find', async (req, res) => {
  connect()
  let fight = mongoose.model("fight", blogSchema);
  let data = await fight.findOne({ "firstname": req.body.firstname, "lastname": req.body.lastname,"class": req.body.class,"floor": req.body.floor,"subject": req.body.subject,"score": req.body.score }).exec();
  res.send(data);
})

app.post('/student/findall', async (req, res) => {
  connect()
  let fight = mongoose.model("fight", blogSchema);
  let data = await fight.find({ "firstname": req.body.firstname, "lastname": req.body.lastname,"class": req.body.class,"floor": req.body.floor,"subject": req.body.subject,"score": req.body.score }).exec();
  res.send(data);
})

app.post('/student/findid', async (req, res) => {
  connect() 
  let fight = mongoose.model("fight", blogSchema);
  let data = await fight.findById(req.body._id).exec();
  res.send(data);
})

app.post('/student/delete', async (req, res) => {
  connect()
  let fight = mongoose.model("fight", blogSchema);
  let del = await fight.deleteOne({ "firstname": req.body.firstname, "lastname": req.body.lastname,"class": req.body.class,"floor": req.body.floor,"subject": req.body.subject,"score": req.body.score }).exec();
  res.send(del);
})

app.post('/student/deleteall', async (req, res) => {
  connect()
  let fight = mongoose.model("fight", blogSchema);
  let del = await fight.deleteMany({ "firstname": req.body.firstname, "lastname": req.body.lastname,"class": req.body.class,"floor": req.body.floor,"subject": req.body.subject,"score": req.body.score }).exec();
  res.send(del);
})

app.post('/student/update', async (req, res) => {
  connect()
  let fight = mongoose.model("fight", blogSchema);
  let filtername = {"firstname": req.body.filtername}
  let update = await fight.updateOne(filtername,{"firstname":req.body.firstname} )
  res.send(update)
})

app.post('/student/f@u', async (req, res) => {
  connect()
  let fight = mongoose.model("fight", blogSchema);
  let filtername = {"firstname": req.body.filtername}
  let fiup = await fight.findOneAndUpdate(filtername,{"firstname":req.body.firstname} )
  res.send(fiup)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

async function connect() {
  let conn = await mongoose.connect('mongodb://root:123@localhost:27017/test?authSource=admin')
  conn.readyState
}

// async function disconnect() {
//   await mongoose.disconnect();
// }
// async function insertStudent(firstname, lastname) {
//   connect();

//   data = await fight.insertMany({ "firstname": firstname, "lastname": lastname })
//   disconnect();
//   return data;
// }
// class Room {
//   constructor(Name, Nickname, Subject, Point, Room, Floor) {
//     this.Name = Name
//     this.Nickname = Nickname
//     this.Subject = Subject
//     this.Point = Point
//     this.Room = Room
//     this.Floor = Floor
//   }
// }