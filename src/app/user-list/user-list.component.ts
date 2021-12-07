import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
     // il faut initialiser les users ici avec le service
    this.userService.users.subscribe((users: string[]): void => {
      this.users = users;
    })
  }
}
