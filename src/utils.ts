import { Repository } from "./Repository.ts"

const Repositories: Array<Repository> = [
    {
        name: 'deno',
        url: 'https://deno.land/x'
    },
    {
        name: 'nest',
        url: 'https://x.nest.land'
    }
];

/**
 * Calculate the registry url for a package.
 * @param packageName deno package.
 * @param registry custom registry.
 */
export function getRegistryUrl(packageName: string, registry?: string): string {
    // Custom Registry by url
    if (registry !== undefined) {
        let reg = trimChar(registry as string, "/");
        return `${reg}/${packageName}`
    }

    //Custom Registry provided with package: repo/pack
    if (packageName.indexOf('/') > 0) {
        let sp = packageName.split('/')
        let reg  = sp[0]
        packageName = sp[1]
        reg = getRepositoryUrl(reg)
        return `${reg}/${packageName}`
    }

    // Default deno.land registry
    return `https://deno.land/x/${packageName}`;
}

/**
 * Trim the input string with specified char.
 * @param input input string.
 * @param char char to trim.
 */
export function trimChar(input: string, char: string): string {
    char = escapeRegExp(char);
    var regEx = new RegExp("^[" + char + "]+|[" + char + "]+$", "g");
    return input.replace(regEx, "");
}

function getRepositoryUrl(name: string): string {
    let result = Repositories.find(r => r.name === name);
    return result === undefined ? Repositories[0].url : result.url;
}

function escapeRegExp(input: string): string {
    return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}