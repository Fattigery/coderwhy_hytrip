export const getAssetURL = url => {
	// URL()构造函数返回一个由参数定义的新URL对象。
	// 参数一：相对路径
	// 参数二：基准URL（这里的import.meta.url获取的是当前文件的绝对路径url）
	return new URL(`../assets/img/${url}`, import.meta.url).href;
};
