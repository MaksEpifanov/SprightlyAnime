export const getCurrentDate = (date: string): string => {
  const ms = Date.parse(date);
  const userDate = new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
  return userDate.format(ms);
};

export const example = '';
