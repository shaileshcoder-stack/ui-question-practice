import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StorageService } from '../core/services/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl ='http://localhost:5000/api/auth';
  private currentUserRole = new BehaviorSubject<string |null>(null)
  constructor( private http: HttpClient ,private storageService:StorageService, private router:Router) { }

  signup(userdata:any) :Observable <any> {
    return this.http.post(`${this.baseurl}/signup`,userdata)
  }

  login(logindata:any):Observable <any>{
    return this.http.post(`${this.baseurl}/login`,logindata).pipe(
      tap((res:any) => {
        localStorage.setItem('token',res.token);
        localStorage.setItem('role', res.role);
        this.currentUserRole.next(res.role)
      })
    )
  }
  gettoken() :string| null{
    return localStorage.getItem('token');
  }

  getrole():string | null{
    return localStorage.getItem('role')
  }

  isLogin() :boolean{
    return !!this.gettoken();
  }
  logout(): void {
    this.storageService.clearAll();
    this.router.navigate(['/login']);
  }
  getRollobservable():Observable<string | null> {
   return this.currentUserRole.asObservable();
  }
  // src/app/auth/auth.service.ts
  navigateByRole(): void {
    const user = this.storageService.getUser();
    console.log("user",user)

    if (user?.role === 'Admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user']);
    }
  }
  

}

