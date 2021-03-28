import dayjs from 'dayjs';

export const useFormatDate = (date: string, format: string): string => {
	return dayjs(date).format(format);
};
