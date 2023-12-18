export const findDirectory = (activeFilePath : string = '/NaN') => {
    const array = activeFilePath.split('/');
    array.pop();
    console.log(array.join('/'));
    return array.join('/');
}