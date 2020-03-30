import { Component, OnInit, Input, Output} from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id:any;
  author:any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

    ngOnInit() {
      this._route.params.subscribe((params: Params) => {
          console.log(params['id'])
          this.id = params['id']
      });
        console.log("here now")
        this.getAuthor(this.id);
    }
  
  getAuthor(id){
    this._httpService.getAuthor(this.id).subscribe(data =>{
      this.author = data;
    })
  }

  goHome(){
    this._router.navigate(['']);
  }
  
  delete(id){
    this._httpService.delete(id).subscribe(data=>{
      
    })}
}
