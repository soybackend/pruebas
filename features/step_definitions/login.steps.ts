import { User, GetValidUser } from "../../data/GetUser";
import { DoLogin } from "../../screenplay/tasks/index";
import { EnsureThat } from "../../screenplay/questions/ensure";

export = function loginUserSteps() {

    let userCredentials: User;

    this.Given(/^that (.*) enters Ghost for the first time$/, function (name: string){
        return this.stage.theActorCalled(name).attemptsTo(
            DoLogin.NavigateFirtsTime(),
        )
    })

    this.When(/^continues until the registration$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            DoLogin.CreateAccountWelcome(),
        );
    });

    this.When(/^he enters the form data (.*), (.*), (.*) and (.*)$/, function(blog: string, name: string, email: string, password: string){
        return this.stage.theActorInTheSpotlight().attemptsTo(
            DoLogin.FillOutRegister(blog, name, email, password),
        );
    });

    this.Given(/^that (.*) wants to log in$/, function (name: string) {
        return this.stage.theActorCalled(name).attemptsTo(
            DoLogin.Navigate(),
        );
    });

    this.When(/^he is a Valid Ghost User$/, function () {
        //set the data information.
        userCredentials = GetValidUser();
        return this.stage.theActorInTheSpotlight().attemptsTo(
        );
    });

    this.When(/^he enters his credetianls (.*) and (.*)$/, function (user: string, pass: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            DoLogin.EnterCredentials(user, pass),
        );
    });

    this.When(/^he enters the information to log in and submits it$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            DoLogin.EnterCredentials(userCredentials.Username, userCredentials.Pass),
        );
    });

    this.Then(/^he should be given access to the ghost$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnsureThat('Oscar Urrego').userNameIsDisplayed(),
            DoLogin.LogOut(),
        );
    });

    this.Then(/^he should see the login error message (.*)$/, function (message: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnsureThat(message).messageErrorLogin(),
        );
    });

};