import { Injectable } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateBoardService {
  lists = {
    toDo:Array(),
    doing:Array(),
    done:Array()

  }


  constructor(private http: HttpRequestsService) { }

  ngOnInit(): void {
  }

  update(){
    this.http.getCards().subscribe(
                            result=>{
                              console.log(result);
                              this.lists.toDo.length=0;
                              this.lists.doing.length=0;
                              this.lists.done.length=0;

                              let newList = Object.values(result);
                              newList.forEach(item=>{
                                if(item.lista =='toDo'){this.lists.toDo.push(item)}
                                else if(item.lista =='doing'){this.lists.doing.push(item)}
                                else if(item.lista =='done'){this.lists.done.push(item)}
                              });                              
                            },
                            err=>{
                              console.log(err)
                            }
    )
  }
}
