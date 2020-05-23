/** Get the file URL to run */
export async function getEntryFile(packageName: string) {
  const REPO_URL = `https://deno.land/x/${packageName}`;
  const potentialFiles = ["cli.ts", "mod.ts"];
  let fileUrl = "";
  for await (const file of potentialFiles) {
    fileUrl = `${REPO_URL}/${file}`;
    const fetchResult = await fetch(fileUrl);
    if (fetchResult.ok) {
      const text = await fetchResult.text();
      if (text) break;
    }
    try {
      // This is a Deno bug: https://github.com/denoland/deno/issues/4735
      (fetchResult.body as any)?.close();
    } catch (error) {}
  }
  if (fileUrl) return fileUrl;
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
