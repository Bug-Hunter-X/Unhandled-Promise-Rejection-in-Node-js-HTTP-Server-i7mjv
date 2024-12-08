const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  }).catch(error => {
    // Error handling should be done here
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might throw an error
  const result = await someAsyncOperation();
  if (result.error) {
    throw new Error(result.error.message);
  }
  return result;
}

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate random error
    if (Math.random() < 0.5) {
      reject({ error: { message: 'Something went wrong!' } });
    } else {
      resolve({ data: 'Success!' });
    }
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});