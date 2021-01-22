import dayjs from 'dayjs';

export default function useFormatDate(date, format) {
	return dayjs(date).format(format);
}
