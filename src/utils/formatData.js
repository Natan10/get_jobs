export const formatDate = (date) => {
  let plain_date = Date.parse(date);
  let current = new Date(plain_date);

  const day = current.getDate();
  const month = current.getMonth();
  const year = current.getFullYear();

  const formatted_date = day + "/" +(month + 1) + "/" + year;

  return formatted_date;
}