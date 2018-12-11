import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EditProductPage } from '../edit-product/edit-product';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage
  tab2Root = EditProductPage

  constructor() {

  }
}
