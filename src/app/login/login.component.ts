import { Component} from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { HttpRequestsService } from '../http-requests.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UpdateBoardService } from '../update-board.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faKey=faKey;
  faUser=faUser;
  faSignInAlt=faSignInAlt;

  logIn(username:string,password:string){
    this.http.postLogIn(username,password)
                        .subscribe(
                          result=>{
                            console.log(result)

                            if(result){
                              this.http.httpOptions.headers = this.http.httpOptions.headers.set('Authorization', `Bearer ${result}`);
                              this.updateBoard.update();
                              localStorage.setItem('token','true')
                              this.router.navigate(['/kanban-board']);

                            
                            }
                            else{
                              alert("Login e/ou senha incorretos")
                            }
                          },
                          err =>{
                            console.log(err)
                          }
                        )
  
  }
  constructor( public http: HttpRequestsService,  private route: ActivatedRoute, public updateBoard: UpdateBoardService, private router: Router){}


}
