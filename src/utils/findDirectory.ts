export const findDirectory = (filePath : string) => {
    const array = filePath.split('/');
    array.pop();
    return array.join('/');
}