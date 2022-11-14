
// I should make a custom protocol to transfer this data over
// it should allow for as much flexibility as possible while still being useful

const n = 0;
const x = 0;

// First it should pass the starting point
const start = {
  source: new Uint8Array(1),
  id: new Uint8Array(4)
}

enum source {
  node,
  collection
}

// Next it should pass in the variables that will be used in operations
// var names can be up to 25 characters long
const variables = {
  amount: new Uint8Array(1),
  variables: [
    {
      name_length: new Uint8Array(1),
      name: new Uint8Array(n),
      value_length: new Uint8Array(4),
      value: new Uint8Array(n)
    }
  ]
}

// Next it should pass through all the operations that should be done on the starting id
const operations = {
  amount: new Uint8Array(1),
  operations: [
    {
      id: new Uint8Array(1),
      length: new Uint8Array(4),
      value: new Uint8Array(n) // (e)=>e.id === 124
    }
  ]
}

// Next it should clean the data and only provide what data is requested by the client
const return_struct = {
  length: new Uint8Array(4),
  value: new Uint8Array(n)
}

// 1 + 4 + 1 + (n + 4 + n + 1) * x + ( 1 + 4 + n ) * x + 4 + n
// 20 bytes min

