import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  }
  getAuthors() {
    return this._http.get('/api/homepage');
  }

  addAuthor(newAuthor) {
    return this._http.post('/api/homepage/new', newAuthor);      
  }

  getAuthor(id){    
    return this._http.get('/api/homepage/update/'+id);
  }

  delete(id){
    return this._http.delete('/api/homepage/'+id);
  }

  updateAuthor(id, author){
    return this._http.put('/api/homepage/'+id, author);
  }
}