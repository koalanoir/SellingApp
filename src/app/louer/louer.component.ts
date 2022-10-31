import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-louer',
  templateUrl: './louer.component.html',
  styleUrls: ['./louer.component.scss']
})
export class LouerComponent implements OnInit {
  cick:boolean
  constructor() { }

  ngOnInit(): void {
  }
  reservation(){
    this.cick=true
  }
  isClick(){
    return this.cick
  }
}
