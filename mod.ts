/** Get the file URL to run */
export async function getEntryFile(packageName: string) {
  const REPO_URL = `https://deno.land/x/${packageName}`;
  try {
    const cliFile = await (await fetch(`${REPO_URL}/cli.ts`)).text();
    if (cliFile) return `${REPO_URL}/cli.ts`;
  } catch (error) {}
  try {
    const modFile = await (await fetch(`${REPO_URL}/mod.ts`)).text();
    if (modFile) return `${REPO_URL}/mod.ts`;
  } catch (error) {}
  throw new Error("Could not find entry file");
}

/**
 * Run a Deno package
 * @param packageName - Package name
 * @param flags - Deno flags, like --allow-net
 * @param args - CLI args
 */
export async function dpx(
  packageName: string,
  flags: string[],
  args: string[]
) {
  const filePath = await getEntryFile(packageName);
  return Deno.run({
    cmd: ["deno", "run", ...flags, filePath, ...args],
    stdout: "inherit",
    stderr: "inherit",
    stdin: "inherit",
  }).status();
}
