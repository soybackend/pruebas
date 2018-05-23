Feature: Validate login of clients in ghost

To log in to Ghost
As a Ghost user
I want to be able to use my credentials to login

  Scenario: Create account
  Given that Oscar enters Ghost for the first time
  And continues until the registration
  When he enters the form data Grupo3, Oscar Urrego, oscarbuho888@gmail.com and Pruebas1005
  Then he should be given access to the ghost

  Scenario: Logging on succesfully
    Given that Oscar wants to log in
    And he is a Valid Ghost User
    When he enters the information to log in and submits it
    Then he should be given access to the ghost

  # Scenario Outline: Logging on with an incorrect credentianls <scenario>
  # Given that Oscar wants to log in
  # When he enters his credetianls <user> and <password> 
  # Then he should see the login error message <message>

  # Examples:
  #     | scenario                  | user                   | password        | message                                  |
  #     | Without user and password |                        |                 | Please fill out the form to sign in      |
  #     | Without password          | oscarbuho888@gmail.com |                 | Please fill out the form to sign in      |
  #     | Without user              |                        | testghost       | Please fill out the form to sign in      |
  #     | With incorrect password   | oscarbuho888@gmail.com | testghost       | Your password is incorrect               |
  #     | With incorrect email      | oscarbuho888@gmail.co  | testghost       | There is no user with that email address |