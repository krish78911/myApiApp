import { Component } from '@angular/core';
import { ApiService } from '../api.service'; // Import the ApiService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: any[] = [];  // Array to hold the API data
  
  constructor(private apiService: ApiService) {
    this.loadPosts();  // Call the method to load posts when the app starts
  }

  loadPosts() {
    this.apiService.getPosts().subscribe(
      (data) => {
        this.posts = data;  // Store the API data in the posts array
      },
      (error) => {
        console.error('Error fetching posts', error);  // Handle any errors
      }
    );
  }
}
