const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const template = {
  name: '',
  email: '',
  phone: '',
  address: {
    street: '',
    city: '',
    state: '',
    zip: ''
  }
};

const getInput = async (input) => {
  for (const [key, value] of Object.entries(input)) {
    if (typeof value === 'object') {
      await getInput(value);
    } else if (value === '') {
      input[key] = await new Promise(resolve => rl.question(`Enter ${key}: `, resolve));
    }
  }
};

getInput(template).then(() => {
  console.log(JSON.stringify(template));
  rl.close();
});
