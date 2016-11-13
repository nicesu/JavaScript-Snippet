function deepClone(obj) {
    var _toString = Object.prototype.toString;
    var res = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor(): {};

    //null, undefined, non-Object, function
    if(!obj || typeof obj !== 'object') {
        return obj;
    }

    //Date
    if(_toString.call(obj) === '[object Date]') {
        return new Date(obj.getTime());
    }

    //RegExp
    if(_toString.call(obj) === '[object RegExp]') {
        var flag = [];
        obj.global && flag.push('g');
        obj.mutiline && flag.push('m');
        obj.ignoreCase && flag.push('i');
        return new RegExp(obj.source, flag.join(''));
    }

    //DOM Node
    if(obj.nodeType && obj.cloneNode) {
        return obj.cloneNode(true);
    }
    
    for(var key in obj) {
        res[key] = typeof obj[key] === 'object'? deepClone(obj[key]) : obj[key];
    }

    return res;
}

var test = {
    key1: 'hhe',
    go: 'sulihuang',
    hehhe: {
        haha: 'aaa',
        dddd: 'dddd'
    }
}

var test2 = new Date();

console.log(deepClone(test2));