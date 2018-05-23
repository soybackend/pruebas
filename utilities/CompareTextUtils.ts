
import chai = require('chai');
chai.use(require('chai-as-promised'));  // tslint:disable-line:no-var-requires

export class CompareTextUtils { 
  static equals = expected => actual => chai.expect(actual).to.eventually.eql(expected);
  static contains = expected => actual => chai.expect(actual).to.eventually.contain(expected);
  static isNotEmpty = () => actual => chai.expect(actual).to.eventually.not.empty;
}

