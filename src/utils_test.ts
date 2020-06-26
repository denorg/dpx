import * as utils from './utils.ts'
import { assertEquals } from "https://deno.land/std/testing/asserts.ts"

Deno.test(
    "Utils - trimChar-1",
    (): void => {
      assertEquals(
       utils.trimChar("https://www.google.com/", "/"), 
       "https://www.google.com"
      );
    }
  );

  Deno.test(
    "Utils - trimChar-2",
    (): void => {
      assertEquals(
       utils.trimChar("https://www.google.com//", "/"), 
       "https://www.google.com"
      );
    }
  );

  Deno.test(
    "Utils - getRegistryUrl - Only Package Name",
    (): void => {
      assertEquals(
       utils.getRegistryUrl("online"),
       "https://deno.land/x/online"
      );
    }
  );

  Deno.test(
    "Utils - getRegistryUrl - Registry URL",
    (): void => {
      assertEquals(
       utils.getRegistryUrl("online", "https://www.myrepo.com/abc/"),
       "https://www.myrepo.com/abc/online"
      );
    }
  );

  Deno.test(
    "Utils - getRegistryUrl - Registry/Package",
    (): void => {
      assertEquals(
       utils.getRegistryUrl("nest/deno_gui@2.0.5"),
       "https://x.nest.land/deno_gui@2.0.5"
      );
    }
  );