export const getAssetURL = url => {
	// 参数一：相对路径
	// 参数二：当前文件的路径url
	return new URL(`../assets/img/${url}`, import.meta.url).href;
};
