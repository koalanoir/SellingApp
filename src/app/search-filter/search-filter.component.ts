import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
   destination!: string;
  constructor(  private route: ActivatedRoute,
    private router: Router  ) { 
  }

  ngOnInit(): void {

  }
  

  shop(destination:string){
    this.router.navigate(['/Shop', { destination : destination }]);
  }
}
