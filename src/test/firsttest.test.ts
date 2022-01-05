import { HEY } from "@models/someFile";

// import { HEY } from '@models/someFile';
import { OI } from "../server";

describe("Test to test configs", () => {
  it("should say oi and hey", () => {
    expect(OI).toEqual("oi");
    expect(HEY).toEqual("hey");
  });
});
