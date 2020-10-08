import * as aws from "aws-sdk";

export default class SomeModule {
  aws: typeof aws;
  constructor() {
    this.aws = aws;
  }
}
