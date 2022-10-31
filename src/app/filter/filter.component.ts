import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  resultat:boolean;
  constructor( private route: ActivatedRoute,
    private router: Router  ) { }

  ngOnInit(): void {   
  }

  recherher(){
    this.router.navigate(['/Louer']);
  }
}
