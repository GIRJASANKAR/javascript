Array.prototype.last = function() {
    let len = this?.length;
    if(len){
        return this[len-1];
    }
    return -1;
};
