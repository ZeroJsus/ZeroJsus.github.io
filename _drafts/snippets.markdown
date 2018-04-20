数组扁平化
const flatten = arr => arr.reduce((a,v)=>a.concat(v),[])
