"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var NickName = (function () {
    function NickName() {
    }
    return NickName;
}());
exports.NickName = NickName;
var NamesComponent = (function () {
    function NamesComponent() {
        this.nick = 'CoolNick';
        this.age = 30;
        this.loading = '';
        this.results = [];
    }
    NamesComponent.prototype.doAdd = function () {
        var _this = this;
        this.loading = 'Loading...';
        var result = {
            timestamp: new Date(),
            nick: this.nick,
            age: this.age,
            result: this.nick + (2017 - this.age)
        };
        rxjs_1.Observable.timer(3000).subscribe(function (x) {
            _this.loading = '';
            _this.results.unshift(result);
        });
    };
    return NamesComponent;
}());
NamesComponent = __decorate([
    core_1.Component({
        selector: 'names',
        template: "      \n      <form class=\"form-inline\">\n          <input [(ngModel)]=\"nick\" type=\"text\" placeholder=\"nick\" name=\"nick\" class=\"input-nick input-large\">\n          <input [(ngModel)]=\"age\" type=\"text\" placeholder=\"age\" name=\"age\" class=\"input-age input-small\">\n          <button (click)=\"doAdd()\" class=\"btn input-submit\">Submit</button>\n      </form>\n      <h3 class=\"loader\">{{loading}}</h3>\n\n      <h4>Results</h4>\n      <table class=\"table results-list\">\n          <thead><tr>\n              <th>Time</th>\n              <th>Nick</th>\n              <th>Age</th>\n              <th>Result</th>\n          </tr></thead>\n          <tr *ngFor=\"let result of results\" class=\"results-item\">\n              <td>\n                  {{result.timestamp | date:'mediumTime'}}\n              </td>\n              <td>{{result.nick}}</td>\n              <td>{{result.age}}</td>\n              <td class=\"results-result\">{{result.result}}</td>\n          </tr>\n      </table>\n  "
    })
], NamesComponent);
exports.NamesComponent = NamesComponent;
var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        template: "\n      <h4>About</h4>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nisl, imperdiet a sem et, pellentesque gravida enim. Ut pellentesque, lacus sed feugiat ullamcorper, ante erat tincidunt turpis, tristique hendrerit enim felis sed turpis. Praesent luctus ultrices tortor, eu tincidunt dui interdum sit amet. Sed vel pulvinar eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ligula nibh, pretium eu ligula a, lobortis vehicula mi. Cras a euismod tortor, ut laoreet turpis. Nunc volutpat velit non ipsum luctus, id suscipit dolor porta. Suspendisse luctus eget odio eget faucibus. In iaculis tortor quis lectus sagittis porttitor. Nam rhoncus erat ut blandit eleifend. Curabitur accumsan, lectus eu ultricies vulputate, nibh quam accumsan diam, ac porta massa tellus id eros. Vestibulum ipsum erat, pretium vel turpis a, scelerisque interdum augue. Fusce venenatis nunc id felis interdum, vitae elementum justo commodo.\n      </p>\n      <p>Donec fringilla neque nisi, a suscipit ipsum posuere a. Aliquam erat volutpat. Proin accumsan ligula nec quam lacinia luctus. Cras at sodales tellus. In finibus feugiat nisi, sit amet auctor ante rutrum nec. Nullam ex augue, auctor ut pellentesque id, sagittis a tortor. Nunc eget turpis ut nisi sagittis commodo. Cras vehicula purus efficitur, tempor velit vitae, consequat est. Aliquam orci urna, laoreet ut justo a, aliquam porttitor ligula. Pellentesque vitae ex nunc. Donec semper diam et ligula pharetra tincidunt. Vivamus lacus turpis, posuere vitae tristique eu, tincidunt sed turpis. In quis blandit justo. Sed vehicula eros nec euismod ullamcorper. Aliquam vitae faucibus ex. Cras ullamcorper leo metus, vitae venenatis nunc dictum sed.\n      </p>\n      <p>Sed sodales enim sit amet dignissim interdum. Curabitur eget dapibus magna. Proin vel auctor purus, at molestie quam. Nulla orci quam, ullamcorper maximus laoreet at, pretium ullamcorper ex. Fusce varius tellus sed consectetur condimentum. Aliquam hendrerit diam at elit consequat gravida quis ac felis. Maecenas tempor mollis est, eu placerat felis porttitor a. Donec porttitor mi non est ultricies ultrices. Nunc blandit a nibh quis molestie. Maecenas a egestas lacus, vel varius turpis.\n      </p>\n  "
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <nav>\n          <a routerLink=\"/\" routerLinkActive=\"active\" class=\"nav-list\">Home</a>\n          <a routerLink=\"/about\" routerLinkActive=\"active\" class=\"nav-list\">About</a>\n          <a href=\"./login.html\" class=\"nav-list\">Login</a>\n      </nav>\n      <br />\n      <router-outlet></router-outlet>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map