import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class MainMenu {

    static menuDetailsUser = Target.the('Customer name text')
      .located(by.className('gh-nav-menu-details-user'));
    static menuSignOut = Target.the('LogOut')
      .located(by.css('.dropdown-item.user-menu-signout.ember-view'));
  }