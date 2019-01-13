import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { KeysPipe } from "../shared/pipes/keys.pipes";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KeysPipe
  ],
  exports: [
    KeysPipe
  ]
})

export class SharedModule { }