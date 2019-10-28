export const timeDifference = (date1,date2) => {

  date1 = new Date(date1);
  date2 = new Date(date2)

  let difference = date1.getTime() - date2.getTime();

  const daysDifference = Math.floor(difference/1000/60/60/24);
  difference -= daysDifference*1000*60*60*24

  const hoursDifference = Math.floor(difference/1000/60/60);
  difference -= hoursDifference*1000*60*60

  const minutesDifference = Math.floor(difference/1000/60);
  difference -= minutesDifference*1000*60

  // const secondsDifference = Math.floor(difference/1000);

  // return `difference =  ${daysDifference} day/s ${hoursDifference} hour/s ${minutesDifference} minute/s ${secondsDifference} second/s`;
  return `${daysDifference} days`;

}

export const toCurrency = (amount) => {
  return (+amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
