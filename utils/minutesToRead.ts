export default function countMinutes(value: string): string {
  value.replace(/(\r\n|\n|\r)/g, ' ').trim();
  const count = value.split(/\s+/g).length - 1;
  const minutes = count / 150;
  if (minutes < 1) {
    return '1 min';
  } if (minutes === 60) {
    const minute = `${minutes.toFixed(0)} min`;
    return minute;
  } if (minutes < 60) {
    const minutesStr = `${minutes.toFixed(0)} min`;
    return minutesStr;
  } if (minutes === 60) {
    return '1 Hour';
  }
  return 'More than 1 Hour';
}