import express from 'express';
import { TextMessage } from '../views'
import { getSchedule } from '../util/ScheduleData'

let app = express();


app.get("/",(req,res)=>{
  res.send("Hello BOt")

});


app.get("/getAllSchedule",(req,res) => {
  let grade = req.query.grade;
  let classNum = req.query.classNum;

  res.send(TextMessage(getSchedule(grade,classNum)))

})


export default app;