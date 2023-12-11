import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  category!: string;
  CategoriesArray: Category[] = [];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.params['cat'];
    //load categorized post when clicking on categories
    if (this.category) {
      this.getPostsByCategory()
    }
    else {
      this.getPosts()
    }
    //get categories
    this.getCategories();
  }

  getPosts() {
    this.postService.getAllPosts().subscribe(res => {
      console.log(res);
    })
  }

  getPostsByCategory() {
    this.postService.getPostsByCategory(this.category).subscribe(res => {
      console.log(res)
    })
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe(res => {
      this.CategoriesArray = res;
      console.log("categories", this.CategoriesArray)
    })
  }

}
