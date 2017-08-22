Array.prototype.linearIndexOf = function(val) {
    var count = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
            console.log('count: ' + count);
            return i;
        }
        count++;
    }
    console.log('count: ' + count);

    return -1;
};

Array.prototype.binaryIndexOf = function(val) {
    var lo = 0;
    var hi = this.length -1;
    var count = 0;

    while (lo <= hi && val >= this[lo] && val <= this[hi]) {
        var mid = Math.floor((lo + hi) / 2);

        if (this[mid] === val) {
            console.log('count: ' + count);
            return mid;
        } else if (this[mid] > val) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
        count++;
    }

    return -1;
};

Array.prototype.interpolationIndexOf = function(val) {
    var lo = 0;
    var hi = this.length -1;
    var count = 0;

    while (lo <= hi && val >= this[lo] && val <= this[hi]) {
        var mid = lo + Math.floor((hi - lo) * (val - this[lo]) / (this[hi] - this[lo]));

        if (this[mid] === val) {
            console.log('count: ' + count);
            return mid;
        } else if (this[mid] > val) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
        count++;
    }
    console.log(count);
    return -1;
};
