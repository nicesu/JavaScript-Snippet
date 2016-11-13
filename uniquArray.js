let arr = [1, 1, 1, 2, 3, 2, 4];

const es6 = arr => Array.from(new Set(arr));

const filter = arr => arr.filter((value, index, array) => index <= array.indexOf(value)); 

const reduce = arr => arr.reduce((ret, cur) => {
    if(ret.indexOf(cur) === -1) ret.push(cur);
    return ret;
  }, [])

const json = arr => {
    let res = [],
        obj = {};
    arr.forEach(value => {
        //将 1 和 '1' 区分开
        let key = typeof(value) + value;
        !obj.hasOwnProperty(key) && (res.push(value), obj[key] = 1);
    })
    return res;
}

const sort = arr => {
    arr.sort();
    for (let i = arr.length; i > 0; i--) {
        if ( arr[i] === arr[ i - 1 ] ) { // use == if '2' eq 2, else ===
            arr.splice( i, 1 );
        }
    }
    return arr;
}


const foreach = arr => {
    arr.forEach(value => {
        res.indexOf(value) == -1 && res.push(value);
    }, res = []);
    return res;
}

console.log(reduce(arr))