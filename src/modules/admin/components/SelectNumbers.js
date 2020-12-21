// export function SelectNumbers(obj) {
//   let losnumeros=[];
  
//   obj.forEach((element)=>{
//     losnumeros.push(element.value);
//   });
//   return losnumeros;
// };



const selectNumbers = (obj) => {
  let losnumeros=[];
  
  obj.forEach((element)=>{
    losnumeros.push(parseFloat(element.value));
  });
  return (
    losnumeros
  )
}

export default selectNumbers
