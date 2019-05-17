import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'glass-background';
  imageUrl? : string;
  scrollPosition : number;
  menuHeight = 200;

  imageChanged( $event ) {
    this.imageUrl = 'url( \'' + $event +  '\' )';
  }

  scrolled($event) {


    this.scrollPosition = $event.target.scrollTop;
    console.log( 'scrolled',  this.scrollPosition );
  }
}
