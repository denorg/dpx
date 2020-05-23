import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { mode } from "./mod.ts";

Deno.test("test starter function", async (): Promise<void> => {
  assertEquals(mode(), 0);
});
