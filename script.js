function validEmail(str) {
  //your JS code here.
	let arr1= str.split('@');
  if(arr1.length!=2)return false;
  if(arr1[0].length==0)return false;

  let arr2 = arr1[1].split('.');
  if(arr2[0].length==0)return false;
  for(let i=1;i<arr2.length;i++){
    if(arr2[i].length!=2 && arr2[i].length!=3)return false;
  }
  return true;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
