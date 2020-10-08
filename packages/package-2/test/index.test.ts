import SomeModule from "../src";

describe("index", () => {
  it("should be able to construct", () => {
    const module = new SomeModule();
    expect(module).toBeDefined();
  });
});
