import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storybook-presentation';
  countries = [
    {key: 1, value: 'Greece'},
    {key: 2, value: 'Poland'},
    {key: 3, value: 'Netherlands'},
    {key: 4, value: 'Spain'},
    {key: 4, value: 'Italy'},
  ]

  onCountrySelect(country) {
    console.log(country)
  }
}
