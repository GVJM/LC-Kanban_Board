import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


interface httpOptions {
  header: HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  readonly apiURL : String = "http://localhost:5000/";
  private logIn : Object = { "login":"letscode", "senha":"lets@123" };

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':  'application/json'
    })
  };


  constructor(private http: HttpClient) {
   }
  
  postLogIn(username:String, password:String){
    return this.http.post(`${ this.apiURL }login/`, { "login": username, "senha":password}, this.httpOptions)
  }

  getCards(){
    return this.http.get(
      `${this.apiURL}cards/`,
      this.httpOptions
      )
  }

  postCard(titulo:String, conteudo:String, lista:String){
    this.http.post(
      `${this.apiURL}cards/`,
      {
        titulo: titulo,
        conteudo: conteudo,
        lista: lista
      },
      this.httpOptions
    ).subscribe(result=>{
        this.getCards().subscribe(r=>console.log(r))
      })
  }
  
  putCard( id:string,title:String, content:String, list:String){
    return this.http.put(
      `${this.apiURL}cards/${id}`,
      {
        id: id,
        titulo: title,
        conteudo: content,
        lista: list
      },
      this.httpOptions
    )
  }

  deleteCard(id:string){
    return this.http.delete(
      `${this.apiURL}cards/${id}`,
      this.httpOptions
    )
  }
}
