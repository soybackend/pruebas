import { serenity } from 'serenity-js';
import { Actors, DoLogin } from '../../screenplay/tasks/index';

export = function () {

  this.setDefaultTimeout(30 * 1000);

  this.World = function () {
    this.stage = serenity.callToStageFor(new Actors());
  };
};
