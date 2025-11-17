import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-bandit',
  imports: [NgClass],
  templateUrl: './bandit.component.html',
  styleUrl: './bandit.component.css'
})
export class BanditComponent {
  results = 
  [
    "",
    "",
    ""
  ]
  Graj(){
    for(let i = 0; i < 3; i++){
      let losowanko = Math.random() * 100
      /*
      cherry - 40%
      lemon  - 35%
      clover - 15%
      seven  - 10%
      */
     console.log(losowanko);
      if(losowanko < 40){
        this.results[i] ="cherries";
      }
      else if(losowanko < 75){
        this.results[i] ="lemon";
      }
      else if( losowanko < 90){
        this.results[i] ="clover";
      }
      else{
        this.results[i] ="seven";
      }
      console.log(this.results[i]);
    }
  }
}
