import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private tokenKey = 'auth-token';
  private userKey = 'auth-user';
  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // USER (role, contact, etc.)
  saveUser(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }
  getUser(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }
  removeUser(): void {
    localStorage.removeItem(this.userKey);
  }
  clearAll(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
