import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgStyle } from "@angular/common";
import { routes } from './app.routes';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projekt';
  page: string = ""
  easterEgg: boolean = false;
  stylewidth = {
    "width": this.page.length.toString() +"ch"
  }
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects.slice(1, event.urlAfterRedirects.length))
        if(event.urlAfterRedirects.slice(1, event.urlAfterRedirects.length) == "blank"){
          this.page = "Not Found"; 
        }
        else{
          this.page = event.urlAfterRedirects.slice(1, event.urlAfterRedirects.length);
        }
        this.stylewidth = {
          "width": this.page.length.toString() +"ch"
        }
      }
    })
  }
  InputChange(){
    this.stylewidth = {
      "width": this.page.length.toString() +"ch"
    }
  } 
  Route(){
    let input = document.getElementById<HTMLInputElement>('inputRoute');
    if(!input){return}

    const value = input.value.trim();

    const routeExists = routes.some(r => r.path === value)
     if(value == "cat"){
      this.easterEgg = true;
      this.page = "cat"
      this.router.navigate(['/mainpage', this.easterEgg]);
      return;
    }
    this.easterEgg = false;
    if (routeExists) {
      this.router.navigate(['/' + value]);
    } else {
      this.router.navigate(['/blank']);
    }
  }
}