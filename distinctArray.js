function distinctArray(arr) {
    
    let obj ={}
    for(let i=0;i<arr.length;i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1   
    }
    let newArr = []
    
    for(const key in obj) {
        if(obj[key] === 1) {
            newArr.push(key)
        }
    }
    
    return newArr
   
}

console.log(distinctArray([1,2,3,3,4,5,4,5,6]))
