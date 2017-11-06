import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Test desc',
      'http://images.media-allrecipes.com/userphotos/720x405/4558607.jpg'),
    new Recipe(
      'A test recipe 2',
      'Test desc 2',
      'http://images.media-allrecipes.com/userphotos/720x405/4558607.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
