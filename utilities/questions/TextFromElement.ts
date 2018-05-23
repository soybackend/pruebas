import { Question, UsesAbilities } from 'serenity-js/lib/screenplay';
import { BrowseTheWeb } from 'serenity-js/lib/serenity-protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';
import { Text } from 'serenity-js/lib/screenplay-protractor';
import { ISize } from 'selenium-webdriver';
import { browser } from 'protractor/';

export class TextFromElement implements Question<PromiseLike<string>> {

  static of(target: Target) {
    return new TextFromElement(target);
  }

  constructor(private target: Target) { }

  answeredBy(actor: UsesAbilities): PromiseLike<string> {
    return Text.of(this.target).answeredBy(actor)
      .then(function (result) {
        return result.replace('\n', ' ');
      });
  }
};

