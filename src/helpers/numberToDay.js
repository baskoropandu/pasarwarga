export default function numberToDay(string,num) {
  const library = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']
  let dayNumber = 0 
  
  library.forEach((day,i) => {
    if(string === day){
      dayNumber = i + 1
    }
  })
  console.log(dayNumber);
  num += dayNumber
  console.log((num % 7) - 1);
  let specificDay = library[(num % 7) - 1]
  return specificDay
}
