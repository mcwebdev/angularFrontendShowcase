import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from 'src/app/models/user.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) { }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${ environment.serverUrl }user/${id}`).pipe(
      map(data => new User().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${ environment.serverUrl }users`).pipe(
      map(data => data.map(data => new User().deserialize(data)))
    );
  }
}
