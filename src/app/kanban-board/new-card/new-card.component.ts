import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { UpdateBoardService } from 'src/app/update-board.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
    faPlusSquare = faPlusSquare;
    title:String="";
    content:string="";
    
  
    generateCard(){
      alert(this.title+ this.content);
      this.http.postCard(this.title,this.content,"toDo");
      this.title="";
      this.content="";
      this.updateBoard.update()
    }
  
  
    constructor(public http: HttpRequestsService, public updateBoard : UpdateBoardService) {     
    }
  
    ngOnInit(): void {  
    }
  
  }
