
import * as moment from 'moment';


const selectNumbers = (obj) => {
  let laHora = [];

  obj.forEach((element) => {
    laHora.push(element.time);

  });


  let hour1 = [];
  let hour2 = [];
  let DateHour=[];
  for (let i = 0; i < laHora.length; i++) {
    hour1[i] = laHora[i].replace('T', ' ');
    hour2[i] = hour1[i].split('.');
    DateHour[i]=hour2[i][0];
  }




  return (
    DateHour
  )
}

export default selectNumbers