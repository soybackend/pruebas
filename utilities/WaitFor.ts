import { Interaction, Task, PerformsTasks } from '@serenity-js/core/lib/screenplay';
import { Target, Wait, Duration, Is } from 'serenity-js/lib/serenity-protractor';
import { step } from '@serenity-js/core/lib/recording/step_annotation';

const defaultWaitTime = 5000000;

/**
 * Wrapper for the serenity waits due the explicit serenity wait  is too short.
 */
export class WaitFor {

  static visibilityOf = (target: Target) => new IsVisible(target);
  static clickeabilityOf = (target: Target) => new IsClickeable(target);
  static invisibilityOf = (target: Target) => new IsInvisible(target);
  static presenceOf = (target: Target) => new IsPresent(target);
}

class IsVisible implements Task {
  @step('{0} waits the element #target is visible.')
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
      Wait.upTo(Duration.ofMillis(defaultWaitTime)).until(this.target, Is.visible()),
    );
  }
  constructor(private target: Target) {
  }
}

class IsClickeable implements Task {
  @step('{0} waits the element #target is clickeable.')
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
      Wait.upTo(Duration.ofMillis(defaultWaitTime)).until(this.target, Is.clickable()),
    );
  }
  constructor(private target: Target) {
  }
}

class IsInvisible implements Task {
  @step('{0} waits the element #target is invisible.')
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
      Wait.upTo(Duration.ofMillis(defaultWaitTime)).until(this.target, Is.invisible()),
    );
  }
  constructor(private target: Target) {
  }
}

class IsPresent implements Task {
  @step('{0} waits the presence of #target element.')
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
      Wait.upTo(Duration.ofMillis(defaultWaitTime)).until(this.target, Is.present()),
    );
  }
  constructor(private target: Target) {
  }
}

