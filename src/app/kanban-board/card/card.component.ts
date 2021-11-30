import { Component, OnInit , Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { UpdateBoardService } from 'src/app/update-board.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  faEdit=faEdit;
  faTrash=faTrash;
  faChevronLeft=faChevronLeft;
  faChevronRight=faChevronRight;
  faBan=faBan;
  faSave=faSave;

  @Input() title: string='';
  @Input() content:string='';
  @Input() list:string="";
  @Input() id:string="";

  changeList(next:Boolean=true){
    console.log('clicado')
    let newList=''
    console.log(this.id)
    if(next){;
      if(this.list=='toDo'){newList='doing'}
      else if(this.list=='doing'){newList='done'}
    }
    else{
      if(this.list=='doing'){newList='toDo'}
      else if(this.list=='done'){newList='doing'}
    }
    this.http.putCard(this.id,this.title,this.content,newList).subscribe(result=>this.updateBoard.update())
  }
  deleteCard(){
    this.http.deleteCard(this.id).subscribe(r=>{
                                          console.log(r);
                                          this.updateBoard.update();
    })
  }
  updateCard(newTitle:string,newContent:string){
    this.http.putCard(this.id,newTitle,newContent,this.list).subscribe(result=>this.updateBoard.update())
  }

  editMode:Boolean=false;
  constructor(private http:HttpRequestsService, public updateBoard: UpdateBoardService) { }

  ngOnInit(): void {
  }

}
