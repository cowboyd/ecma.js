# javascript.js

How often do you have code like this?

```js
import Thing from 'my/thing';
import OtherThing from 'other/thing';

// :-/
const { assign, keys } = Object;

//....

function assignThings() {
  return assign(new Thing(), new OtherThings());
}

```

For every other piece of code out there, it's very straight
forward. You import a name from a module, and then you use it later.
However, for builtin functions, which are really no different, you
have to either use them from a dynamically scoped global
object. e.g. `Object.assign`, or destructure them as a constant
assignment from the dynamically scoped global object.

The `javascript` module lets you treat all of your symbolic imports
the same, no exceptions:

``` javascript
import Thing from 'my/thing';
import OtherThing from 'other/thing';
import { assign, keys } from 'javascript/object';
```


### Details
For each JavaScript global supported, that global is the default
export, then, any properties of that global are exported as named
values.

So for example, the `Math` global has the properties `Math.PI` (the
constant), and `Math.pow` (raise any number to a power). We could
define a function to compute the area of a circle like so:

``` javascript
import { PI, pow } from 'javascript/math';

export function area(radius) {
  return PI * pow(radius, 2);
}
```

By the same token, you could also define it this way:

``` javascript
import Math from 'javascript/math';

export function area(radius) {
  return Math.PI * Math.pow(radius, 2);
}
```

Although that wouldn't have much value over just using the global,
dynamically scoped constant.

There are currently exports for:

* `javascript/array`
* `javascript/number`
* `javascript/object`
* `javascript/string`
