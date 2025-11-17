import { Component } from '@angular/core';
import { NgIf } from "@angular/common"
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mainpage',
  imports: [NgIf],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  isEasterEgg: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('easterEgg') !== null)
    {
      this.isEasterEgg = true;
    }
  }
}
