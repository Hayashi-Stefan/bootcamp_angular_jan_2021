import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModalModule, PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    PoModalModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    PoModule,
    HttpClientModule
  ]
})

export class SharedModule { }
