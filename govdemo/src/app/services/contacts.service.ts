import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ContactsService{
    constructor(private http: HttpClient) {
        
    }

    public addContactGroup (formData: any): Observable<any> {
        const url = `${ environment.serverUrl}/contact/group`;
        return this.http.post<any>(url, formData);
    }

    public updateContactGroup (formData: any): Observable<any> {
        const url = `${ environment.serverUrl}/contact/group`;
        return this.http.put<any>(url, formData);
    }

    public getContactGroup (email: string): Observable<any> {
        const data = {email: email };
        const url = `${ environment.serverUrl}/contact/group/email/${email}`;
        return this.http.get<any>(url);
    }

    public addContact (formData: any): Observable<any> {
        const url = `${ environment.serverUrl}/contact`;
        return this.http.post<any>(url, formData);
    }

    public updateContact (formData: any): Observable<any> {
        const url = `${ environment.serverUrl}/contact`;
        return this.http.put<any>(url, formData);
    }

    public getContact (name: string): Observable<any> {
        const data = { name: name };
        const url = `${ environment.serverUrl}/contact`;
        return this.http.put<any>(url, data);
    }
}