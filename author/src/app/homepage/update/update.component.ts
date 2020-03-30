import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() navigateHome = new EventEmitter();
  id: any;
  author: any;
  error: any;

  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    console.log('constructor');
    console.log(this);
  }

  ngOnInit() {
    this.error = [];
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
    })
    console.log(this.id)
    this.getAuthor(this.id);
  }

  getAuthor(id){
    this._httpService.getAuthor(id).subscribe(data =>{
      console.log(data)
      this.author = data;
    })
  }

  updateAuthor() {
    this._httpService.updateAuthor(this.author._id, this.author).subscribe(data=>{
      if(data instanceof Array){
        console.log(this.author)
        this.error = data;
      }
      else{
        this.author = data;
        this.router.navigate(['']);
      }
    })
    
  }
  handleCancelClick(){
    console.log("cancelled page")
    console.log(this)
    this.router.navigate([''])
  }
}

