import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'menu';

  menuItems: MenuItem[] = [
    { Name: 'Pepperoni Pizza', Category: 'Pizza', Price: 10.99 },
    { Name: 'Margherita Pizza', Category: 'Pizza', Price: 9.99 },
    { Name: 'Buffalo Wings', Category: 'Wings', Price: 7.99 },
    { Name: 'Hawaiian Pizza', Category: 'Pizza', Price: 11.99 },
    { Name: 'Garlic Parmesan Wings', Category: 'Wings', Price: 8.99 },
    { Name: 'Veggie Supreme Pizza', Category: 'Pizza', Price: 12.99 },
    { Name: 'Mushroom Swiss Burger', Category: 'Burgers', Price: 9.49 },
    { Name: 'Classic Caesar Salad', Category: 'Salads', Price: 6.99 },
    { Name: 'Cheese Quesadilla', Category: 'Appetizers', Price: 5.99 },
  ];
  getByCategory(category: string): MenuItem[] {
    return this.menuItems.filter((item) => item.Category === category);
  }
  getUniqueCategories(): string[] {
    const categoriesSet = new Set<string>();
    this.menuItems.forEach((item) => categoriesSet.add(item.Category));
    return Array.from(categoriesSet);
  }
}