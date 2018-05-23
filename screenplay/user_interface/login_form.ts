import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class LoginForm {

  static usernameInput = Target.the('username input')
    .located(by.name('identification'));
  static passwordInput = Target.the('password input')
    .located(by.name('password'));
  static submitButton = Target.the('submit button')
    .located(by.xpath('*//button[@type="submit"]/span'));
  static errorCredentialsMessage = Target.the('Error credentials message')
    .located(by.className('main-error'));
  static createYourAccount = Target.the('create your account button')
    .located(by.xpath("//span[contains(text(), 'Create your account')]"));
  static blogInput = Target.the('blog input')
    .located(by.name("blog-title"));
  static nameInput = Target.the('name input')
    .located(by.name("name"));
  static emailInput = Target.the('email input')
    .located(by.name("email"))
  static password = Target.the('password input')
    .located(by.xpath("//input[@placeholder='At least 10 characters']"));
  static inviteYourTeamButton = Target.the('Submit register form')
    .located(by.xpath("//span[contains(text(), 'Last step')]"));
  static toDoLaterButton = Target.the('take me to my blog')
    .located(by.xpath("//button[contains(text(), 'take me to my blog!')]"));
}