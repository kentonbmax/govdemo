import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ContactGroup } from "src/app/models/contactGroup";

@Component({
  selector: 'manage-contacts-dialog',
  templateUrl: 'manage-contacts-dialog.html',
})
export class ManageContactsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ManageContactsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}