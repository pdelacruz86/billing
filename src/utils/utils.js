
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
    return list.filter(f)[0]
  }
  
  /**
   *
   * generate GUID
   *
   */
  
  function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
  
  /**
   *
   * generate guid Block
   *
   */
  
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  
  /**
   * Deep copy the given object considering circular structure.
   * This function caches all nested objects and its copies.
   * If it detects circular structure, use cached copy to avoid infinite loop.
   *
   * @param {*} obj
   * @param {Array<Object>} cache
   * @return {*}
   */
  export function deepCopy (obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
      return obj
    }
  
    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
      return hit.copy
    }
  
    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
      original: obj,
      copy
    })
  
    Object.keys(obj).forEach(key => {
      copy[key] = deepCopy(obj[key], cache)
    })
  
    return copy
  }
  
  /**
   *
   * function to escape JS
   * @input complete string to scape
   *
   */
   function escape (input) {
    var escape = ''
  
    var i = 0
  
    //for every word in the string iterate and try to escape the words
    for (i = 0; i < input.length; i++) {
      escape = escape + javascriptEscapeCode(input.charAt(i), false)
    }
  
    return escape
   }
  
  /**
   *
   * Replace any especial char into a good string representation
   *
   * @original is the char to validate
   */
   function javascriptEscapeCode(original)
   {
    var thecharchar=original.charAt(0);
    switch(thecharchar) {
      case '\r': return "\\r"; break;
        case '\n': return "\\n"; break; //newline
        case '\v': return "\\v"; break; 
        case '\'': return "\\'"; break;
        case '"': return "\\\""; break;
        case '\&': return "\\&"; break;
        case '\\': return "\\\\"; break;
        case '\t': return "\\t"; break;
        case '\b': return "\\b"; break;
        case '\f': return "\\f"; break;
        default:
        return original;
        break;
      }
    }
  
  /**
   *
   * generate GUID
   *
   */
   export function generateGUIDValue(ext) {
    return guid() + "." + ext;
  }
    
  
  /**
   *
   * Module publi properties
   *
   */
  export function escapeJavascript(input){
    return escape(input);
  }
  
  /**
   * forEach for object
   */
  export function forEachValue (obj, fn) {
    Object.keys(obj).forEach(key => fn(obj[key], key))
  }
  
  export function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }
  
  export function isPromise (val) {
    return val && typeof val.then === 'function'
  }
  
  export function assert (condition, msg) {
    if (!condition) throw new Error(`[vuex] ${msg}`)
  }
  
  export function formatDate(date) {
      var d = new Date(date)
  
      return [ (d.getMonth()+1).padLeft(),
                      d.getDate().padLeft(),
                      d.getFullYear()].join('/')+
                      ' ' +
                    [ d.getHours().padLeft(),
                      d.getMinutes().padLeft(),
                      d.getSeconds().padLeft()].join(':');
  }

export function move(old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};