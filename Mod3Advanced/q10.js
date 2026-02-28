// 10. Fetch is a browser-based function to send a request and receive a response from a server,which uses promises to handle the asynchronous response.  
// The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful 
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.) 
// a) Write a new version of this function using async/await 
// b) Test both functions with valid and invalid URLs 
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results. 
 
// run 'npm init' and accept all the defaults 
// run 'npm install node-fetch' 
// run 'npm pkg set type=module' 
import fetch from 'node-fetch' 
globalThis.fetch = fetch 
function fetchURLData(url) { 
    let fetchPromise = fetch(url).then(response => { 
        if (response.status === 200) { 
            return response.json(); 
        } else { 
            throw new Error(`Request failed with status ${response.status}`); 
        } 
    }); 
    return fetchPromise; 
} 
fetchURLData('https://jsonplaceholder.typicode.com/todos/1') 
.then(data => console.log(data)) 
.catch(error => console.error(error.message));

 //Answer
async function asyncFetchURLData(url) {
    let fetch response = await fetch(url)   ','expected.
    if (response.status === 200) {
        let responsedata = await fetchresponse.json()
        return
    }
}
//Answer
import fetch from 'node-fetch'

globalThis.fetch = fetch

function fetchURLData(url) {

let fetchPromise = fetch(url).then(response => {

if (response.status === 200) {

return response.json();

} else {

throw new Error(`Request failed with status ${response.status}`);

}

});

return fetchPromise;

}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')

.then(data => console.log(data))

.catch(error => console.error(error.message));

Answer:

fetchURLData('https://jsonplaceholder.typicode.com/todos/1') //works, prints result
.then(data => console.log(data))
.catch(error => console.error(error.message));
fetchURLData('https://jsonplaceholder.typicode.com/fake') //doesn't exist, prints catch
.then(data => console.log(data))
.catch(error => console.error(error.message));
async function asyncFetchURLData(url) { //a)
let fetchResponse = await fetch(url);
if (fetchResponse.status === 200) {
let responseJson = await fetchResponse.json();
return responseJson;
} else {
throw new Error(`Request failed with status ${fetchResponse.status}`);
}
}
async function asyncFetchMultipleURLData(urls) { //c)
return Promise.all(urls.map(async (url) => {
let response = await fetch(url);
return response.json();
}));
}
try {
let responseData1 = await
asyncFetchURLData('https://jsonplaceholder.typicode.com/todos/1');
console.log(responseData1) //works
let responseData2 = await
asyncFetchMultipleURLData(['https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/todos/2']);
console.log(responseData2) //works
let responseData3 = await
asyncFetchURLData('https://jsonplaceholder.typicode.com/fake');
console.log(responseData3) //fails
} catch (error) {
console.log(error.message);}
