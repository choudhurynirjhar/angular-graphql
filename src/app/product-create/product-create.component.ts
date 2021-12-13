import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const createproduct = gql`
mutation add($prod: ProductInput) {
  createproduct(product: $prod) {
    id
  }
}
`;

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.less']
})
export class ProductCreateComponent implements OnInit {

  id: string = "";
  name: string = "";
  quantity: string = "";

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

  createProduct() {
    const prod: any = { id: parseInt(this.id), name: this.name, quantity: parseInt(this.quantity)};
    this.apollo.mutate({
      mutation: createproduct,
      variables: {
        prod: prod
      }
    }).subscribe(({data}) => {
      //location.reload();
    }, (error) => {
      console.log(`Error`, error);
    });
  }

}
