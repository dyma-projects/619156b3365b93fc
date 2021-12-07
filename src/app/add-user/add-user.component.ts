import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @ViewChild('input') public el: ElementRef<HTMLInputElement>;

  constructor(private userService: UserServiceService) { }

  addUser(): void {
    const username = this.el.nativeElement.value;
    if (username) {
      this.userService.addUser(username);
      // on utilise le service ici pour ajouter l'utilisateur;
      this.el.nativeElement.value = '';
    }
  }

}
