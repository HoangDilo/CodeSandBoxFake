
interface SandpackBundlerFiles {
    [key: string]: {
        code: string,
    },
}

export const convertObjectToArray = (object : SandpackBundlerFiles) => {
    const arr : {
        key: string,
        value: {
            code: string
        }
    }[] = [];

    for (const key in object) {
        arr.push({
            key: key,
            value: object[key],
        })
    }
    return arr;
}