const formatValue = (
  value: number | string,
  type?: 'income' | 'outcome',
): string => {
  const parsedValue = Number(value);
  const formatedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(parsedValue);

  return type === 'outcome' ? `- ${formatedValue}` : formatedValue;
};

export default formatValue;
