import { Component } from '@angular/core';

@Component({
  selector: 'stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent {
  interval:any
  time:{
    millSeconds:number;
    seconds:number;
    minutes:number;
    hours:number;
  } = {
    millSeconds:0,
    seconds:0,
    minutes:0,
    hours:0,}
  
  constructor() {
    this.interval = setInterval( () => {
this.setTime()} ,100)
 
    }
    setTime(){
      this.time.millSeconds++
      if(this.time.millSeconds > 60){ 
      this.time.millSeconds = 1
      this.time.seconds++}
      if(this.time.seconds > 60){
      this.time.seconds = 0
      this.time.minutes++}
      if(this.time.minutes > 60){
      this.time.minutes = 0
      this.time.hours++}
   }

   handleInterval(command:string){
if(command === "stop") return clearInterval(this.interval)
this.interval = setInterval(() => {
  this.setTime()},100)

   }
   reset(){
this.time.millSeconds = 0,
this.time.minutes = 0,
this.time.seconds = 0,
this.time.hours = 0
   }
  }


  


