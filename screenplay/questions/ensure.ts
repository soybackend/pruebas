import { Task } from "@serenity-js/core/lib/screenplay";
import { WaitFor } from "../../utilities/WaitFor";
import { See } from "serenity-js/lib/screenplay";
import { TextFromElement } from "../../utilities/questions/TextFromElement";
import { CompareTextUtils } from "../../utilities/CompareTextUtils";
import { MainMenu } from "../user_interface/main_menu";
import { LoginForm } from "../user_interface/login_form";


export const EnsureThat = (expectedUsername: string) => ({
    userNameIsDisplayed: () => Task
      .where(`#actor ensures the username ${expectedUsername} is displayed`,
      WaitFor.visibilityOf(MainMenu.menuDetailsUser),
      See.if(TextFromElement.of(MainMenu.menuDetailsUser), CompareTextUtils.contains(expectedUsername))),
    messageErrorLogin: () => Task
      .where(`#actor ensures the username ${expectedUsername} is displayed`,
      WaitFor.visibilityOf(LoginForm.errorCredentialsMessage),
      See.if(TextFromElement.of(LoginForm.errorCredentialsMessage), CompareTextUtils.contains(expectedUsername)))
  });