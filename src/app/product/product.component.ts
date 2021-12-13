import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  products!: any[];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
        query sec {
          products {
            id,
            name,
            quantity
          }
        }
        `
      })
      .valueChanges.subscribe((result: any) => {
        this.products = result?.data?.products;
      });
  }

}
