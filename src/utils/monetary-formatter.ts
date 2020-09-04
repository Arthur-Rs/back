const MonetaryFormatter = (value: number): string => {
  const strValue = value.toLocaleString('BRL', {
    style: 'currency',
    currency: 'BRL',
  });

  return strValue.replace('R$', 'R$ ');
};

const GetValueToMoney = (value: string): number => {
  const number = value
    .replace(/\.|R\$|[^0-9-.]/g, '')
    .replace(/,/g, '.')
    .trim();

  return parseFloat(number) / 100;
};

export { MonetaryFormatter, GetValueToMoney };
