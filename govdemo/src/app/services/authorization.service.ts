import { SignUp } from '../models/signup';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

interface IResponse {
    text: string;
}
@Injectable()
export class AuthorizationService {

    private _status: boolean;
    constructor(private http: HttpClient) {}

    // should have jwt in cookie
    get status(): string {
        return localStorage.getItem('token');
    }
    public signup(signup: SignUp): Observable<any> {
        const url = `${ environment.serverUrl}/signup`;
        return this.http.post(url, signup);
    }

    public login (formData: any): Observable<IResponse> {
        const url = `${ environment.serverUrl}/login`;
        return this.http.post<IResponse>(url, formData);
    }
}
