import { Component } from '@angular/core';

@Component({
  selector: 'timer-watch',
  templateUrl: './timer-watch.component.html',
  styleUrls: ['./timer-watch.component.css']
})
export class TimerWatchComponent {
  interval:any
  time:{
    seconds:number;
    minutes:number;
    hours:number;
  } = {
    seconds:0,
    minutes:0,
    hours:0,}


   
  constructor() {
    this.interval = setInterval(()=>{  this.setTimer}
      ,1000)
      
   }

// מטודת הרצת הזמן
  setTimer(){
    
    this.time.seconds--
   
    if(this.time.seconds < 0){
    this.time.seconds = 59
    this.time.minutes--
  }
    if(this.time.minutes < 0){
    this.time.minutes = 59
    this.time.hours--
  }
    if (this.time.seconds===0  && this.time.minutes=== 0 && this.time.hours===0){
    this.handleInterval("stop")
      this.playAudio() }
  }
  // מטודת עצירה או המשך
  handleInterval(command:string){
    if(command === "stop") return clearInterval(this.interval)
    this.interval = setInterval(() => {
    this.time.seconds===0  && this.time.minutes=== 0 && this.time.hours===0 ? this.handleInterval("stop"):this.setTimer()
  },1000)
    
       }
      //  מטודת איפוס
    reset(){
    this.time.minutes = 0;
    this.time.seconds = 0;
    this.time.hours = 0;
       }
// מטודת השמעת המוסיקה 
playAudio(){
  let audio = new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/start.ogg")
  audio.load()
  audio.play()
}

}





