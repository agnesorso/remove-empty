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
                c2: '',
                c3: {},
                dessert: 'mango float'
            }
        },
        opt4: {
            drink: 'sprite',
            price: 5,
        }
    }
};
</pre>

<h3>Default</h3>
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
         dessert: { 
                c1: 'halo-halo', 
                dessert: 'mango float' 
         }
       },
       opt4: { drink: 'sprite', price: 5 }
     }
   }

*/
</pre>

<h2>Modify Object: remove / customize</h2>
<p>
To modify your object, you need to declare an Array with the name of property/ies of your choice.
</p>

<p>
In modifying your object you need to put at least three parameters in your <code>removeEmpty</code> variable:
</p>

<ul>
<li>First is the Object.</li>
<li>Second is the Array of your property names.</li>
<li>Third is the action type</li>
</ul>

<h2>action type: 'removeProperties'</h2>
<p>Clean and remove every property of the object that is in the Array.
Unless the property itself is an object, it will not be removed and will continue checking for similar properties.</p>

<pre>
const property = ['food', 'dessert'];
</pre>

<p>Now, we will use the provided object (obj) and property above as an example.</p>

<pre>
removeEmpty(obj, property, 'removeProperties');

// console.dir shows full object instead of '[Object]'
console.dir(obj, {depth: null});
/* {
     selection: {
       opt3: { 
            drink: 'coke',
            price: 20,
            dessert: {
                c1: 'halo-halo'
            }
       },
       opt4: { drink: 'sprite', price: 5 }
     }
   }
*/
</pre>

<h2>action type: 'customProperties'</h2>
<p>Clean and show every property of the object that is in the Array.
If the property is not in the array but is an object, it will continue checking for similar properties.</p>

<pre>
removeEmpty(obj, property, 'customProperties');

console.dir(obj, {depth: null});
/* {
     food: 'pizza',
     selection: { 
            opt3: {
                food: 'burger',
                dessert: {
                    dessert: 'mango float' 
                }
            }
     }
   }

*/
</pre>

<h2>People</h2>
<p>
 <a href="https://github.com/agnesorso">MA Solano</a>
</p>
