# 📦 DPX

`dpx` is like `npx` for Deno, easily run a Deno CLI package.

[![Test CI](https://github.com/denorg/dpx/workflows/Test%20CI/badge.svg)](https://github.com/denorg/dpx/actions)

Install DPX globally using:

```bash
deno install --allow-run --allow-net -n dpx https://deno.land/x/dpx/cli.ts
```

Then, the package is available to run:

```bash
dpx <packageName> <flags> <arguments>
```

Under the hood, the CLI finds the file to run (`cli.ts` or `mod.ts`) from the Deno registry and runs it.

## 💡 Examples

If you want to run the package `online` (which tells you whether you are online), you can run:

```bash
dpx online --allow-net # You are online
```

Similarly, if you want to check whether a website is up, you can use the `up` package:

```bash
dpx up --allow-net https://google.com  # https://google.com is up
```

Required permissions:

1. `--allow-read`
2. `--allow-run`

## ⭐ API

You can use this package by importing it:

```ts
import { dpx } from "https://deno.land/x/dpx/mod.ts";

const result = dpx("packageName", ["--flags"], ["args"]);
```

Alternatively, you can use it directly from the CLI by using deno run:

```bash
deno run --allow-read --allow-run https://deno.land/x/dpx/cli.ts <flags> <packageName> <arguments>
```

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-read
```

## 📄 License

MIT © [Denorg](https://den.org.in)
