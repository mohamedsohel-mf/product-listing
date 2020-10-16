export const Const = {
	url: process.env.REACT_APP_URL,
	version: 'v1',
	suffix: 'api',
	getUrl: () => `${Const.url}/${Const.suffix}/${Const.version}`,
}