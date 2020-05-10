const formatDate = (date: Date | string): string => {
  const formattedDate = new Date(date).toLocaleDateString('pt-br');

  return formattedDate;
};

export default formatDate;
