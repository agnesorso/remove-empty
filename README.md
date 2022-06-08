# remove-empty

<p>
Remove empty properties of an object. Property values that are empty, 
null, undefined, empty arrays and objects. It also cleans every nested object and its objects.

In addition, you can modify (remove and customize) your object property. 
</p>

<br>

<h2>Installation</h2>

<pre>
$ npm install remove-empty
// or
$ yarn add remove-empty
</pre>

<h2>Usage and Examples</h2>

<pre>
const removeEmpty = require('remove-empty');

const obj = {
    food: 'pizza',
    addOn: [],
    selection: {
        opt1: null,
        opt2: undefined,
        opt3: {
            food: 'burger',
            drink: 'coke',
            price: 20,
            dessert: {
                c1: 'halo-halo',
                c2: 'mango float',
                c3: {
                    food: 'adobo'
                }
            }
        },
        opt4: {
            drink: 'sprite',
            price: 5,
            dessert: {
                c1: 'fries'
            }
        }
    }
};
</pre>

<p>Here is the typical way of using <code>remove-empty</code> package. </p>

<pre>
removeEmpty(obj);

console.log(obj);
/* {
     food: 'pizza',
     selection: {
       opt3: {
         food: 'burger',
         drink: 'coke',
         price: 20,
         dessert: { c1: 'halo-halo', c2: 'mango float', c3: { food: 'adobo' } }
       },
       opt4: { drink: 'sprite', price: 5, dessert: { c1: 'fries' } }
     }
   }
*/
</pre>

<h3>modify object: remove / customize</h3>
<p>
To modify your object, you need to declare an Array with the name of property/ies of your choice.
</p>

<pre>
const property = ['food', 'dessert'];
</pre>

<p>
In customizing your object you need to put at least three parameters in your <code>removeEmpty</code> variable: <br>
First is the Object. <br>
Second is the Array of your property names. <br>
Third is the action type (string): <br>
</p>

<ul>
<li>
<em>'removeProperties'</em>  -  remove and clean every property of the object that is in the Array.
</li>
<li>
<em>'customProperties'</em>  -  clean and only show every property of the object that is in the Array.
</li>
</ul>

<pre>
removeEmpty(obj, property, 'removeProperties');

// console.dir shows full object instead of '[Object]'
console.dir(obj, {depth: null});
/* {
     selection: {
       opt3: { drink: 'coke', price: 20 },
       opt4: { drink: 'sprite', price: 5 }
     }
   }
*/
</pre>

<pre>
removeEmpty(obj, property, 'customProperties');

console.dir(obj, {depth: null});
/* {
     food: 'pizza',
     selection: {
       opt3: { food: 'burger', dessert: { c3: { food: 'adobo' } } }
     }
   }
*/
</pre>

<h2>People</h2>
<p>
 <a href="https://github.com/agnesorso">MA Solano</a>
</p>
