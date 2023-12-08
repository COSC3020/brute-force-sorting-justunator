function permutations(a, index = 0) {
    var x = 0
    for(let i = index; i <= a.length - 1; i++){ 
        var temp = a[index]; 
        a[index] = a[i]; 
        a[i] = temp; 
        x = permutations(a, index + 1); 
        if(x == 1){
            return 1
        }
        temp = a[index]; 
        a[index] = a[i]; 
        a[i] = temp; 
    }
    if(index >= a.length){
        count++
        flag = isSorted(a)
        if(flag){
            return 1
        }
        else{
            return 0
        }
    }
    return 0;
}
var count = 0
function permutationSort(arr){
    if(arr == []){
        return 0
    }
    if (permutations(arr, 0)==1)
		return count;
}

function isSorted(arr){
    for(var i = 1; i < arr.length; i++)
        if (arr[i] < arr[i-1])
            return false;
    return true;
}

//console.log(permutationSort([1,0,5,2,9,3,1]))
// used https://www.geeksforgeeks.org/print-all-possible-permutations-of-an-array-vector-without-duplicates-using-backtracking/ to assist in creating this code