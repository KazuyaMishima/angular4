import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-top-bar',
  template: `
    <nav>
      <a href="/">->Home</a>
      <a href="/operations">   ->Operations</a>
      <a href="/about">   ->About</a>
    </nav>
  `,
  styles: []
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
