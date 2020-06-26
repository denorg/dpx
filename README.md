# 📦 DPX

`dpx` is like `npx` for Deno, easily run a Deno CLI package.

[![Deno CI](https://github.com/denorg/dpx/workflows/Deno%20CI/badge.svg)](https://github.com/denorg/dpx/actions)
[![GitHub](https://img.shields.io/github/license/denorg/dpx)](https://github.com/denorg/dpx/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/denorg/dpx)](https://github.com/denorg/dpx/graphs/contributors)
[![Deno Starter](https://img.shields.io/badge/deno-starter-brightgreen)](https://denorg.github.io/starter/)
[![Made by Denorg](https://img.shields.io/badge/made%20by-denorg-0082fb)](https://github.com/denorg)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://github.com/denorg/dpx)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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

1. `--allow-net`
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

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
