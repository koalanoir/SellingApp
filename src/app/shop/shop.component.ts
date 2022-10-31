import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  flag:string|null;
  constructor( private route: ActivatedRoute,
    private router: Router  ) { this.route.queryParamMap
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.flag = params.get("flag");
        console.log(this.flag)
        console.log("ivrivshp")
      }
      
    ); }

  ngOnInit(): void {
  }
  resultat():boolean{
    return this.flag=="true"
  }
}
