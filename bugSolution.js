const http = require('http');

const server = http.createServer((req, res) => {
  doSomethingAsync()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World');
    })
    .catch(error => {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

async function doSomethingAsync() {
  try {
    const result = await someAsyncOperation();
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result;
  } catch (error) {
    throw error; // Re-throw the error to be caught by the server
  }
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