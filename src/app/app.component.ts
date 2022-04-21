import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { ngOnInit(): void {
  setTimeout(() => {

    this.movies = [{
    title: 'Spider-Man',
    releaseDate : new Date(),
    price: 12.99  
  }, 
    { 
    title: 'Moana',
    releaseDate : new Date(),
    price: 14.99 
    }]
    
  }
  )
}
  title = 'film-hub'
  movies;
};
