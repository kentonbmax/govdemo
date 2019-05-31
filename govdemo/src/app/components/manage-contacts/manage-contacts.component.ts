import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ManageContactsDialogComponent } from './manage-contacts-dialog.component';
import { ContactGroup } from 'src/app/models/contactGroup';

@Component({
  selector: 'app-manage-contacts',
  templateUrl: './manage-contacts.component.html',
  styleUrls: ['./manage-contacts.component.scss']
})
export class ManageContactsComponent implements OnInit {
  public contactGroup: ContactGroup;
  public name: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showDialog() {
    const dialogRef = this.dialog.open(ManageContactsDialogComponent, {
      width: '300px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.contactGroup.name = result;
    });
  }
}


