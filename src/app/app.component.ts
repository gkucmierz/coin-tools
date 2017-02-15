import { Component } from '@angular/core';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  tools = [
    {
      route: '',
      name: 'Home'
    },
    {
      route: 'sign-message',
      name: 'Sign Message'
    },
    {
      route: 'check-signature',
      name: 'Check Signature'
    },
    {
      route: 'ecies',
      name: 'ECIES'
    },
    {
      route: 'send-from-privkey',
      name: 'Send from Privkey'
    }
  ];
}
