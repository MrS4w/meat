import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [InputComponent, RadioComponent, RatingComponent, FormsModule, ReactiveFormsModule, CommonModule, SnackbarComponent]
})
export class SharedModule {

}