import dayjs from 'dayjs';

export default function useFormatDate(date: string, format: string) {
	return dayjs(date).format(format);
}
