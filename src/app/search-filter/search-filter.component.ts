import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  public destination:string="";
  public depart:string="";
  public valider:boolean=false;
  constructor() { 
  }

  ngOnInit(): void {

  }
  
  isDestination():boolean{
    return this.valider
  }

  putPlace():void{
    if( this.isDestination()==false ){
      this.valider=true
      
    }else{

    }
  }
}
