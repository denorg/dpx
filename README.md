# 🏁 Deno Starter

This is a starter template for building Deno packages, with GitHub Actions CI, tests,and a CLI.

[![Test CI](https://github.com/denorg/starter/workflows/Test%20CI/badge.svg)](https://github.com/denorg/starter/actions)

```ts
import { mode } from "https://raw.githubusercontent.com/denorg/starter/master/mod.ts";

const result = mode();
```

Alternatively, you can use it directly from the CLI by using deno run:

```bash
deno run --allow-read https://raw.githubusercontent.com/denorg/starter/master/cli.ts <arguments>
```

You can also install it globally using the following:

```bash
deno install --allow-read -n starter https://raw.githubusercontent.com/denorg/starter/master/cli.ts
```

Then, the package is available to run:

```bash
starter <arguments>
```

Required permissions:

1. `--allow-read`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-read
```

## 📄 License

MIT © [Denorg](https://den.org.in)
