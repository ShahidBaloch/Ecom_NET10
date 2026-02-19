import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShopService } from '../../../core/services/shop';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatSelectionList, MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-filters-dialog',
  imports: [    
    MatDivider,
    MatSelectionList,
    MatListOption,
    MatButton,
    FormsModule],
  templateUrl: './filters-dialog.html',
  styleUrl: './filters-dialog.css',
})
export class FiltersDialog {
   private dialogRef = inject(MatDialogRef<FiltersDialog>);
  data = inject(MAT_DIALOG_DATA);
  shopService = inject(ShopService);

  selectedBrands: string[] = this.data.selectedBrands;
  selectedTypes: string[] = this.data.selectedTypes;

  applyFilters() {
    this.dialogRef.close({
      selectedBrands: this.selectedBrands,
      selectedTypes: this.selectedTypes
    });
  }

}
