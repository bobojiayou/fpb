# fpb
> fpb.js is a JavaScript library providing functions for your Functional programming

## Getting Started
## install
>  Install via npm

```
npm install fpb
```

## Use && Feature
### -  1、Function first 
>     funtion is the first argument 
    
e.g    
```
   fpb.filter(x=> x<3, [2,3,4])  //==> [2]
   fpb.map(x=> x*2, [2,3,4])  //==> [4, 6, 8]
```
### -  2、Everything is auto curried
>  fpb.js providing A lot of functions, and Most of them are auto curried , except 'chain', 'reduce', 'reduceRight', 'curry'

e.g   
```
   fpb.filter(x=> x<3)( [2,3,4])  //==> [2]
   fpb.map(x=> x*2)( [2,3,4])  //==> [4, 6, 8]
   fpb.add(1, 2) //=> 3
   fpb.add(1)(2) //=> 3
   
   let add = (x, y, z) = x + y + z
   let addN = fpb.curry(add)
   addN(1)(2)(3) //==> 6
   addN()(1)(2)()(3) //==> 6
   addN(1, 2)(3) // ==> 6
```
### -  3、compose
>  you can compose funtions easily. see a huge example
-  
e.g   
```
 const every = fpb.every,
    values = fpb.values,
    add = fpb.add,
    filter = fpb.filter,
    compose = fpb.compose,
    let filterBigThan2 = filter(x => x > 2)
    let add10 = add(10)
    sum = fpb.sum
        let obj = {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }
  let composeFn = compose(add10, sum, filterBigThan2, values)
  composeFn(obj) //==> 17
```
### -  4、chainAble (lazy chain)
> the functions in fpb.js also support chain calls, you can also code in OOP style if you like，and all the functions is lazy call, they would not execute until the force functions executed
e.g   
```
 const stooges1 = [{ name: 'curly', age: 25 }, { name: 'moe', age: 21 }, { name: 'larry', age: 23 }];
 const a1 = fpb.chain(stooges1)
    .map(function (stooge) { return stooge.name + ' is ' + stooge.age; })
    .size()
    .log()
    .force() //=> 3
```


## License
