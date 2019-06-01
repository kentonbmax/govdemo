import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ManageContactsDialogComponent } from './manage-contacts-dialog.component';
import { ContactGroup } from 'src/app/models/contactGroup';
import { ContactsService } from 'src/app/services/contacts.service';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-manage-contacts',
  templateUrl: './manage-contacts.component.html',
  styleUrls: ['./manage-contacts.component.scss']
})
export class ManageContactsComponent implements OnInit {
  public contactGroup: ContactGroup;
  public contactGroups: ContactGroup[];
  public name: string;
  private email: string;
  constructor(public dialog: MatDialog, 
    private contactService: ContactsService,
    private authService: AuthorizationService,
    ) { }

  ngOnInit() {
    this.email = this.authService.status;
    this.getGroups();
  }

  getGroups() {
    this.contactService.getContactGroup(this.email).subscribe( (data) => {
      this.contactGroups = data;
    });
  }

  showDialog() {
    const dialogRef = this.dialog.open(ManageContactsDialogComponent, {
      width: '300px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.contactGroup = new ContactGroup();
      this.contactGroup.name = result;
      this.contactGroup.email = this.email;

      this.contactService.addContactGroup(this.contactGroup).subscribe( (data: any) => {
        this.getGroups();
      });
    });
  }
}


