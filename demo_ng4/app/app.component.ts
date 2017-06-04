import { Component } from '@angular/core';
import { Observable } from 'rxjs';


export class NickName {
  timestamp: Date;
  nick: string;
  age: number;
  result: string;
}


@Component({
  selector: 'names',
  template: `      
      <form class="form-inline">
          <input [(ngModel)]="nick" type="text" placeholder="nick" name="nick" class="input-nick input-large">
          <input [(ngModel)]="age" type="text" placeholder="age" name="age" class="input-age input-small">
          <button (click)="doAdd()" class="btn input-submit">Submit</button>
      </form>
      <h3 class="loader">{{loading}}</h3>

      <h4>Results</h4>
      <table class="table results-list">
          <thead><tr>
              <th>Time</th>
              <th>Nick</th>
              <th>Age</th>
              <th>Result</th>
          </tr></thead>
          <tr *ngFor="let result of results" class="results-item">
              <td>
                  {{result.timestamp | date:'mediumTime'}}
              </td>
              <td>{{result.nick}}</td>
              <td>{{result.age}}</td>
              <td class="results-result">{{result.result}}</td>
          </tr>
      </table>
  `
})
export class NamesComponent {
  nick: string = 'CoolNick';
  age: number = 30;
  loading: string = '';
  results: NickName[] = [];

  doAdd(): void {
    this.loading = 'Loading...';
    let result = {
        timestamp: new Date(),
        nick: this.nick,
        age: this.age,
        result: this.nick + (2017 - this.age)
    };
    Observable.timer(3000).subscribe(x => {
      this.loading = '';
      this.results.unshift(result);
    });
  }
}


@Component({
  selector: 'about',
  template: `
      <h4>About</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nisl, imperdiet a sem et, pellentesque gravida enim. Ut pellentesque, lacus sed feugiat ullamcorper, ante erat tincidunt turpis, tristique hendrerit enim felis sed turpis. Praesent luctus ultrices tortor, eu tincidunt dui interdum sit amet. Sed vel pulvinar eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ligula nibh, pretium eu ligula a, lobortis vehicula mi. Cras a euismod tortor, ut laoreet turpis. Nunc volutpat velit non ipsum luctus, id suscipit dolor porta. Suspendisse luctus eget odio eget faucibus. In iaculis tortor quis lectus sagittis porttitor. Nam rhoncus erat ut blandit eleifend. Curabitur accumsan, lectus eu ultricies vulputate, nibh quam accumsan diam, ac porta massa tellus id eros. Vestibulum ipsum erat, pretium vel turpis a, scelerisque interdum augue. Fusce venenatis nunc id felis interdum, vitae elementum justo commodo.
      </p>
      <p>Donec fringilla neque nisi, a suscipit ipsum posuere a. Aliquam erat volutpat. Proin accumsan ligula nec quam lacinia luctus. Cras at sodales tellus. In finibus feugiat nisi, sit amet auctor ante rutrum nec. Nullam ex augue, auctor ut pellentesque id, sagittis a tortor. Nunc eget turpis ut nisi sagittis commodo. Cras vehicula purus efficitur, tempor velit vitae, consequat est. Aliquam orci urna, laoreet ut justo a, aliquam porttitor ligula. Pellentesque vitae ex nunc. Donec semper diam et ligula pharetra tincidunt. Vivamus lacus turpis, posuere vitae tristique eu, tincidunt sed turpis. In quis blandit justo. Sed vehicula eros nec euismod ullamcorper. Aliquam vitae faucibus ex. Cras ullamcorper leo metus, vitae venenatis nunc dictum sed.
      </p>
      <p>Sed sodales enim sit amet dignissim interdum. Curabitur eget dapibus magna. Proin vel auctor purus, at molestie quam. Nulla orci quam, ullamcorper maximus laoreet at, pretium ullamcorper ex. Fusce varius tellus sed consectetur condimentum. Aliquam hendrerit diam at elit consequat gravida quis ac felis. Maecenas tempor mollis est, eu placerat felis porttitor a. Donec porttitor mi non est ultricies ultrices. Nunc blandit a nibh quis molestie. Maecenas a egestas lacus, vel varius turpis.
      </p>
  `
})
export class AboutComponent {
}

@Component({
  selector: 'my-app',
  template: `
      <nav>
          <a routerLink="/" routerLinkActive="active" class="nav-list">Home</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-list">About</a>
          <a href="./login.html" class="nav-list">Login</a>
      </nav>
      <br />
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
}