import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMail} from '../interfaces/IMail';
import {environment} from '../../../../environments/environment';

@Injectable()
export class MessagesService {
  constructor(protected http: HttpClient) {}

  getFolderMessages(folder: string): Observable<IMail[]> {
    const params = new HttpParams({fromObject: {folder}});
    return this.http.get<IMail[]>(`${environment.api}/messages`, {params});
  }
}
