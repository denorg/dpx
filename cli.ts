import { dpx } from "./mod.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

const DENO_FLAGS = [
  "-A",
  "--allow-all",
  "--allow-env",
  "--allow-hrtime",
  "--allow-net=",
  "--allow-plugin",
  "--allow-read=",
  "--allow-run",
  "--allow-write=",
  "--reload",
  "-r",
  "--lock=",
  "--importmap=",
  "--unstable",
  "--inspect",
  "--inspect-brk",
  "--root",
];

// https://deno.land/manual/tools/script_installer
if (import.meta.main) {
  const flags: string[] = [];
  const args: string[] = [];
  let packageName = "";
  let registry: string | undefined = undefined;

  let argsv = parse(Deno.args);
  registry = argsv.registry

  Deno.args.forEach((arg, index) => {
    if (index === 0) packageName = arg;
    let isDenoFlag = false;
    DENO_FLAGS.forEach((flag) => {
      if (
        flag === arg ||
        (flag.endsWith("=") && arg.startsWith(flag.slice(0, -1)))
      )
        isDenoFlag = true;
    });
    if (isDenoFlag) flags.push(arg);
    else args.push(arg);
  });
  dpx(packageName, flags, args, registry);
}
