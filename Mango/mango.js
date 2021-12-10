const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  class: String,
  floor: String,
  subject: String,
  score: String
});

async function main() {
  let conn = await mongoose.connect('mongodb://root:123@localhost:27017/test?authSource=admin')
  conn.readyState;

  let block = mongoose.model("fight", blogSchema);

  // await block.createCollection()

  // await block.insertMany({"firstname":'Fightxxxxx'})

  //   var File = mongoose.model('File', new mongoose.Schema({ name: String }));

  // await File.find().sort({ name: 1 }).collation({ locale: 'en_US', numericOrdering: true }).
  //   then(docs => console.log(docs));

  // await block.find({ "firstname": 'Bright' }).exec();
  //   block.find({ "firstname": 'Bright' }, function (err, result) {
  //     if (err) console.log(err)
  //     console.log(result)
  //   });
  //  await block.findOne();//ค้นหาข้อมูล 1 ข้อมูล หากทั้งหมดจะ some.find

  //await block.deleteMany({ "firstname": 'Fight' }); //ลบข้อมูลทั้งหมด

  // await block.deleteOne({ "firstname": 'Fight' }).exec();
  // block.deleteOne({ "firstname": 'Fight' }, function (err, result) {
  //   if (err) console.log(err)
  //   console.log(result)
  // });
  //  await block.deleteOne({"firstname": 'Bright'});//ลบข้อมูล 1อย่าง

  // block.updateOne({ "firstname": 'NIght' }, function (err, result) {
  //   if (err) console.log(err)
  //   console.log(result)
  // });
  // await block.updateOne({ "firstname": 'NIght' }).exec();//เปลี่ยนข้อมูลใน DataBase

  //await block.updateMany({"firstname":'Bright'});//เปลี่ยน ข้อมูลทั้งหมด
  let filtername = firstname
  
  await block.updateOne(filtername(req.body.filtername) , { firstname: 'nemu' });

  await mongoose.disconnect();  

}
main()

