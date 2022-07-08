import { Component } from '@angular/core';

@Component({
  selector: 'binding-comp',
  templateUrl: './binding-comp.component.html',
  styleUrls: ['./binding-comp.component.css']
})
export class BindingCompComponent {
  img: {url:string,alt:string, } = {
    url:"https://images.pexels.com/photos/12020659/pexels-photo-12020659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt:"Breakfast",

  }
  isHidden: boolean = false
  
toggle(){
  this.isHidden === false? this.isHidden= true : this.isHidden = false
}
}

