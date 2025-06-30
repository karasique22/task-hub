import plural from 'ru-plurals';

const getFormattedDays = plural('день', 'дня', 'дней');

export const daysLeft = (endDate: Date): string => {
  const today = new Date();
  const timeDiff = endDate.getTime() - today.getTime();
  const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return getFormattedDays(days);
};
