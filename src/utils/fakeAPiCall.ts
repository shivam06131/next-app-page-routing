export const fakeAPiCall = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const resData = await data.json();
    return resData;
}