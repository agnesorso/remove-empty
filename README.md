# remove-empty

<p>
Remove empty properties of an object. Property values that are empty, 
null, undefined, empty arrays and objects. It also checks and remove those within 
objects inside objects.
</p>

<br>

<h2>Installation</h2>

<pre>
$ npm install remove-empty
// or
$ yarn add remove-empty
</pre>

<h2>Example</h2>

<pre>
const removeEmpty = require('remove-empty');

const obj = {
    food: 'pizza',
    addOn: {},
    price: 10,
    drinks: {
        name: 'pepsi',
        prices: {
            opt1: null,
            opt2: 5,
            opt3: undefined,
            opt4: {}
        }
    },
    location: ''
};

removeEmpty(obj);

console.log(obj);
/* {
     food: 'pizza',
     price: 10,
     drinks: { name: 'pepsi', prices: { opt2: 5 } }
   }
*/
</pre>

<h2>People<h2>
<p>
 <a href="https://github.com/agnesorso">MA Solano</a>
</p>
