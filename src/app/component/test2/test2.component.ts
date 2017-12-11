import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  providers: [HttpService]
})
export class Test2Component implements OnInit {

    public posts: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getPosts();
  }
  
  getPosts() {
    this.httpService.getPost()
        .subscribe(
            data => {
                if (data) {
                    this.posts = data;
                }
            },
            error => {
                console.log(error);
            }
        );
  }

}
