import { dpx } from "./mod.ts";

// https://deno.land/manual/tools/script_installer
if (import.meta.main) {
  const flags: string[] = [];
  const args: string[] = [];
  let packageName = "";
  Deno.args.forEach((arg, index) => {
    if (index === 0) packageName = arg;
    else if (arg.startsWith("--")) flags.push(arg);
    else args.push(arg);
  });
  dpx(packageName, flags, args);
}
