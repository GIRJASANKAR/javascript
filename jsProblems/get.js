// Before the optional chaining operator (?.) existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.

// Lodash's _.get method was created as a solution for such use cases.

// Let's write our own version as a get function. The function gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place. The function signature is as such:

// get(john, 'profile.name.firstName'); // 'John'
// get(john, 'profile.gender'); // 'Male'
// get(jane, 'profile.name.firstName'); // undefined

// get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3

/**
 * @param {Object} object
 * @param {string|Array<string>} path
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(object, path, defaultValue) {
    let myobj=object;
     let ans= Array.isArray(path)?path:path.split('.');
     if(myobj!= null){
      for(let i=0;i<ans.length && myobj != null;i++){
        myobj=myobj[ans[i]];
      }
  
     }
      return myobj!==undefined?myobj:defaultValue;
  
  }