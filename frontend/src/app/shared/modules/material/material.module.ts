import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatTableModule],
  exports: [MatButtonModule, MatTableModule],
})
export class MaterialModule {}
