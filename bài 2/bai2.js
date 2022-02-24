
function ghepchuoi(a,b){
    let arr1 = a.split('')
    let arr2 = b.split('')
   
    arr1.splice(1,0,arr2[0])
      arr1.splice(3,0,arr2[1])
      arr1.splice(5,0,arr2[2])
      arr1.splice(7,0,arr2[3])
      arr1.splice(9,0,arr2[4])
     let tong = arr1.join('')
      console.log(tong)
}
ghepchuoi("minh","hello")
ghepchuoi("hellominh","izonewiz")