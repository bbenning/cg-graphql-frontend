// Angular Stuff
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
export const ANGULAR_COMMON_MODULES = [RouterModule, CommonModule, FormsModule, ReactiveFormsModule];

// Material modules
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatToolbarModule,
  MatTooltipModule,
  MatLineModule,
  MatCommonModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule
} from '@angular/material';
export const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatToolbarModule,
  MatTooltipModule,
  MatLineModule,
  MatCommonModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule
];


@NgModule({
  imports: [...ANGULAR_COMMON_MODULES, ...MATERIAL_MODULES],
  exports: [
    ...ANGULAR_COMMON_MODULES,
    ...MATERIAL_MODULES,
  ],
})
export class SharedModule {}
