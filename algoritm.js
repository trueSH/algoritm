Array.prototype.linearIndexOf = function(val) {
    var count = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
            return i;
        }
        count++;
    }

    return -1;
};

Array.prototype.binaryIndexOf = function(val) {
    var lo = 0;
    var hi = this.length -1;
    var count = 0;

    while (lo <= hi && val >= this[lo] && val <= this[hi]) {
        var mid = Math.floor((lo + hi) / 2);

        if (this[mid] === val) {
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

Array.prototype.bubbleSort = function() {
    var arr = this.slice(0);

    function swap(i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for(var i = 1; i < arr.length; i++) {
        for(var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(j, j+1);
            }
        }
    }
    return arr;
};

Array.prototype.insertionSort = function() {
    var arr = this.slice(0);

    function swap(i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for(var i = 1; i < arr.length; i++) {
        for(var j = i; j > 0 && arr[j-1] > arr[j]; j--) {
            swap(j-1, j);
        }
    }
    return arr;
};

Array.prototype.selectionSort = function() {
    var arr = this.slice(0);

    function swap(i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }



};
