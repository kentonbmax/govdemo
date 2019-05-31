import { SignUp } from '../models/signup';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

    private _status: boolean;
    constructor(private http: HttpClient) {}

    // should have jwt in cookie
    get status(): boolean {
        return Boolean(localStorage.getItem('token'));
    }
    public signup(signup: SignUp): Observable<any> { 
        const url = `${ environment.serverUrl}/signup`;
        return this.http.post(url, signup);
    } 

    public login (formData: any): boolean {
        const url = `${ environment.serverUrl}/login`;
        this.http.post<boolean>(url, formData).subscribe( (data) => {
            localStorage.setItem('token', 'true');
            return true;
        }, err => {
            localStorage.setItem('token', 'false');
            return false;
        });

        return false;
    }
}
