import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getEntryFile } from "./mod.ts";

Deno.test(
  "get entry file - cli.ts",
  async (): Promise<void> => {
    assertEquals(
      await getEntryFile("online"),
      "https://deno.land/x/online/cli.ts"
    );
  }
);

Deno.test(
  "get entry file - mod.ts",
  async (): Promise<void> => {
    assertEquals(
      await getEntryFile("recursive_readdir"),
      "https://deno.land/x/recursive_readdir/mod.ts"
    );
  }
);
