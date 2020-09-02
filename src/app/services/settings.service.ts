import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');


  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/${ valor }.css';
    this.linkTheme.setAttribute('href',url);
    
   }
   changeTheme(valor:string){
    
    const url = `./assets/css/colors/${ valor }.css`;
    this.linkTheme.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentThem();
    
  }
  checkCurrentThem(){
      const links = document.querySelectorAll('.selector');
    
      links.forEach(element => {

        element.classList.remove('working');

        const btntheme = element.getAttribute('data-theme');
        const btnthemeurl = `./assets/css/colors/${ btntheme }.css`;
        const currentTheme = this.linkTheme.getAttribute('href');

        if( btnthemeurl === currentTheme ){
          element.classList.add('working');
        }
      })
    }
}
