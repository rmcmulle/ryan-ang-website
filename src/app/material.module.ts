import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
 } from '@angular/material';

@NgModule({
  imports: [
      FormsModule,
      MatButtonModule,
      MatDatepickerModule,
      MatInputModule,
      MatFormFieldModule,
      MatNativeDateModule,
  ],
  exports: [
      FormsModule,
      MatButtonModule,
      MatDatepickerModule,
      MatInputModule,
      MatFormFieldModule,
      MatNativeDateModule,
  ],
})
export class MaterialModule { }