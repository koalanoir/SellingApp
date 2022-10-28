import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button'
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from'@angular/material/menu';
import { MatFormFieldModule} from'@angular/material/form-field';
import {MatSelectModule} from'@angular/material/select';
import {MatCheckboxModule} from'@angular/material/checkbox';




@NgModule({
  imports: [MatCheckboxModule,MatSelectModule,MatFormFieldModule,MatMenuModule,MatIconModule,MatButtonModule,MatToolbarModule],
  exports: [MatCheckboxModule,MatSelectModule,MatFormFieldModule,MatIconModule,MatMenuModule,MatButtonModule,MatToolbarModule]
})

export class MaterialModule{}
