import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  // Import HttpClient

@Component({
  selector: 'app-form',
  templateUrl: 'form.page.html',
  styleUrls: ['form.page.scss'],
})
export class FormPage {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form with validation for name, price, and description
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],  // Ensures price is a number
      description: ['', [Validators.required, Validators.minLength(1)]],  // Minimum length for description
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Form Data:', formData);  // Log the form data

      // Send the form data to the Laravel controller via HTTP POST request
      this.http.post('https://mywebsiteportfolios.com/laravel-crud/public/api/api-post', formData)
        .subscribe(
          response => {
            console.log('Response from server:', response);  // Handle success
          },
          error => {
            console.error('Error:', error);  // Handle error
          }
        );
    } else {
      console.log('Form is not valid!');
    }
  }
}
