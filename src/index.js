/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {  
    preferences.unshift(0);
    let result = 0;       
    for(let a = 1, len = preferences.length; a < len; a++){          
        let b = preferences[a];
        let c = preferences[b];
        if(a==preferences[c])
        {
          result ++;
        }        
    }
    result = result/3;    
    return result -(result%1);
};
