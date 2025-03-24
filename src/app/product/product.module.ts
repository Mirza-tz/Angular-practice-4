import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product/product-list/product-list.component';
import  { MatCardModule } from '@angular/material/card'
import { FlexModule} from '@angular/flex-layout';
import { MatSnackBarModule} from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatCardModule
  ]
})
export class ProductModule { }
