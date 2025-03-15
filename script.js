const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
for(let i=0;i<arr.length;i++){
	let sum=0;
	for(let j=i;j<arr.length;j++){
		sum+=arr[j];//
		if(sum<=n){
			for(k=i;k<=j;k++){
				console.log(arr[k]);
			}
		}
	}
}	
  // Write your code here
};
//let arr=[1,2,3]//subaarray
/* [1,2,3]
[1,2]
[1]
[2]
[2,3]
[3]
*/

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
