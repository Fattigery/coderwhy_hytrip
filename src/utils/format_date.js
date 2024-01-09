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
 * 获取两个日期之间的天数差
 * @param {*} startDate 开始日期
 * @param {*} endDate 结束日期
 */
export function getDiffDate(startDate, endDate) {
	return dayjs(endDate).diff(startDate, 'day');
}
