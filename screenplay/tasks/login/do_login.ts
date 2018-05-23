import { Task } from "@serenity-js/core/lib/screenplay";
import { UseAngular, Enter, Click, Duration, Clear } from "serenity-js/lib/serenity-protractor";
import { Open, Wait } from "serenity-js/lib/screenplay-protractor";
import { WaitFor } from "../../../utilities/WaitFor";
import { LoginForm } from "../../user_interface/login_form";
import { MainMenu } from "../../user_interface/main_menu";

const Navigate = () => Task.where(`#actor opens the page`,
  UseAngular.disableSynchronisation(),
  Open.browserOn("/ghost/#/signin")
);

const NavigateFirtsTime = () => Task.where(`#actor opens the page of register`,
  UseAngular.disableSynchronisation(),
  Open.browserOn("/ghost/#/setup/one")
);

const CreateAccountWelcome = () => Task.where(`#actor continue to create account`,
  WaitFor.visibilityOf(LoginForm.createYourAccount),
  Click.on(LoginForm.createYourAccount)
)

const FillOutRegister = (blog: string, name: string, email: string, password: string) => Task.where(`#actor fill out the register form`,
  WaitFor.visibilityOf(LoginForm.blogInput),
  Enter.theValue(blog).into(LoginForm.blogInput),
  Enter.theValue(name).into(LoginForm.nameInput),
  Enter.theValue(email).into(LoginForm.emailInput),
  Enter.theValue(password).into(LoginForm.password),

  WaitFor.clickeabilityOf(LoginForm.inviteYourTeamButton),
  Click.on(LoginForm.inviteYourTeamButton),
  Wait.for(Duration.ofMillis(10000)),
  WaitFor.visibilityOf(LoginForm.toDoLaterButton),
  Click.on(LoginForm.toDoLaterButton)
)

const EnterCredentials = (username:string, pass: string) => Task.where(`#actor enters the credentials`,
  WaitFor.visibilityOf(LoginForm.usernameInput),
  Clear.theValueOf(LoginForm.usernameInput),
  Enter.theValue(username)
    .into(LoginForm.usernameInput),

  WaitFor.visibilityOf(LoginForm.passwordInput),
  Clear.theValueOf(LoginForm.passwordInput),
  Enter.theValue(pass)
    .into(LoginForm.passwordInput),

  WaitFor.clickeabilityOf(LoginForm.submitButton),
  Click.on(LoginForm.submitButton)
);

const LogOut = () => Task.where(`#actor logout of the aplication`,
WaitFor.visibilityOf(MainMenu.menuDetailsUser),
Click.on(MainMenu.menuDetailsUser),
Click.on(MainMenu.menuSignOut)
);

export class DoLogin {

   static Navigate = () => Navigate();
   static EnterCredentials = (username:string, pass: string) => EnterCredentials(username, pass);
   static LogOut = () => LogOut();
   static NavigateFirtsTime = () => NavigateFirtsTime();
   static CreateAccountWelcome = () => CreateAccountWelcome();
   static FillOutRegister = (blog:string, name:string, email:string, password:string) => FillOutRegister(blog, name, email, password);
}