import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { dpx, getEntryFile } from "./mod.ts";

Deno.test(
  "get entry file - cli.ts",
  async (): Promise<void> => {
    assertEquals(
      await getEntryFile("online"),
      "https://deno.land/x/online/cli.ts",
    );
  },
);

Deno.test(
  "get entry file - mod.ts",
  async (): Promise<void> => {
    assertEquals(
      await getEntryFile("recursive_readdir"),
      "https://deno.land/x/recursive_readdir/mod.ts",
    );
  },
);

Deno.test("dpx runs a CLI from a custom registry", async () => {
  const server = Deno.serve({ port: 0 }, (request) => {
    const { pathname } = new URL(request.url);
    if (pathname === "/package/cli.ts") {
      return new Response('console.log("dpx test CLI");');
    }
    return new Response("Not found", { status: 404 });
  });
  const { port } = server.addr as Deno.NetAddr;

  try {
    const status = await dpx(
      "package",
      [`--allow-net=127.0.0.1:${port}`],
      [],
      `http://127.0.0.1:${port}`,
    );
    assertEquals(status.success, true);
  } finally {
    await server.shutdown();
  }
});
