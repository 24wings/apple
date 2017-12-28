import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ConfigService } from '../../../../lib';

enum Views {
  ListProduct = 1,
  CreateProductGroup,

}
@Component({
  selector: 'app-fruit-product-manage',
  templateUrl: './fruit-product-manage.component.html',
  styleUrls: ['./fruit-product-manage.component.css']
})
export class FruitProductManageComponent implements OnInit {
  showMoreProductGroup: boolean = false;
  Views = Views;
  state: Views = Views.ListProduct;
  selectedProductGroup;
  productGroupFields: Field[] = [{
    label: '产品名称', key: 'name', value: "", validators: Validators.required, controlType: 'text'
  }];
  productFormGroup: FormGroup;
  deleteProduct(product) {
    console.log(product);
  }
  productGroups: any[] = [{
    label: '苹果', num: 10,
    children: [{
      name: '三红蜜枣',
      price: 8.0,
      stock: 4,
      images: ['http://res.cloudinary.com/dnf1ydl7w/image/upload/c_thumb,g_face,h_18,w_18/v1514127951/path/to/image/jabq20qfr4shkviuwmfc.jpg',
        'http://res.cloudinary.com/dnf1ydl7w/image/upload/c_thumb,g_face,h_18,w_18/v1514127951/path/to/image/jabq20qfr4shkviuwmfc.jpg'],
    }]
  },
  { label: '香蕉', num: 11 },
  { label: '梨子', num: 12 },
  {
    label: '苹果', num: 10,
    children: []
  },
  { label: '香蕉', num: 11 },
  { label: '火龙果', num: 12 },
  {
    label: '苹果', num: 10,
    children: []
  },
  { label: '香蕉', num: 11 },
  { label: '梨子', num: 12 }



  ];
  constructor(public config: ConfigService) { }

  ngOnInit() {
    this.selectedProductGroup = this.productGroups[0];
    this.productFormGroup = this.config.fieldsToFromGroup(this.productGroupFields);
  }
  saveNewProductGroup() {

    if (this.productFormGroup.status.toLocaleLowerCase() == 'valid') {
      let value = this.productFormGroup.value;
      this.productGroups.push({ label: value.name, num: 0, price: 8.0, images: [] });
      this.state = Views.ListProduct;
    }
  }

}
