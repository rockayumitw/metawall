import moment from 'moment';

export function dateFormat(value, format = 'YYYY-MM-DD') {
  const now = moment();
  const datetime = moment(value);
  const duration = moment.duration(now.diff(datetime));
  const hours = Math.floor(duration.asHours());
  const days = Math.floor(duration.asDays());
  // eslint-disable-next-line no-nested-ternary
  return hours < 1 ? `${duration.minutes()} 分鐘前` : hours < 24 ? `${hours} 小時前` : days <= 7 ? `${days} 天前` : value ? datetime.format(format) : '';
}

export function ellipsis(value, limit) {
  value = value || '';
  limit = limit || value.length;
  return value.length > limit ? `${value.substring(0, limit)}...` : value;
}
