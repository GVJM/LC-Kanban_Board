import { Component, OnInit} from '@angular/core';
import { UpdateBoardService } from '../update-board.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  
  
  


  constructor(public updateBoard:UpdateBoardService){};
  ngOnInit(): void {
  }  
}
