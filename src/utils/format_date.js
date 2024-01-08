import dayjs from 'dayjs';

/**
 * 格式化月日
 * 接收一个日期，返回xx月xx日
 * @param {string|object} date
 * @returns {String} xx月xx日
 */
export function formatMonthDay(date) {
	return dayjs(date).format('MM月DD日');
}

/**
 * 获取两个日期之间的天数
 * @param {*} date1 开始日期
 * @param {*} date2 结束日期
 * @returns
 */
export function diffValue(date1, date2) {
	return dayjs(date2).diff(date1, 'day');
}
