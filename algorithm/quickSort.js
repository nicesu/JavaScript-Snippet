//  快速排序思想：
// （1）在数据集之中，选择一个元素作为"基准"（pivot）。
// （2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
// （3）对"基准"左边和右边的两个子集，利用递归进行下次比较， 不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
// 

let test = [85, 24, 63, 45, 17, 31, 96, 50]


// 
const quickSort = (arr) => {
  if (!Array.isArray(arr)) throw new Error('must be array')
  if (arr.length < 1) return arr

  // 这里选择了序列的中间值作为基准
  let index = Math.floor(arr.length / 2)
  let pivot = arr[index]
  arr.splice(index, 1)

  let left = []
  let right = []
  for(var i = 0, len = arr.length; i < len; i++) {
      if(arr[i] < pivot) {
          left.push(arr[i])
      } else {
          right.push(arr[i])
      }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

// in-place partition
function qSort(array) {
  // 交换元素位置
  function swap(array, i, k) {
    console.log(i, k)
    var temp = array[i];
    array[i] = array[k];
    array[k] = temp;
  }

  // 数组分区，左小右大
  function partition(array, left, right) {
    var storeIndex = left;        
    var pivot = array[right]; // 直接选最右边的元素为基准元素
    for (var i = left; i < right; i++) {
      if (array[i] < pivot) {
        swap(array, storeIndex, i);
        storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
      }
    }
    swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
    console.log('ddd:', storeIndex)
    console.log('array:', array)
    return storeIndex;
  }
  function sort(array, left, right) {
    if (left > right) {
      return;
    }
    var storeIndex = partition(array, left, right);
    sort(array, left, storeIndex - 1);
    sort(array, storeIndex + 1, right);
  }
  sort(array, 0, array.length - 1);
  return array;
}


console.log(qSort(test))
