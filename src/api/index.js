import ajax from './fetch'

//请求表格数据
export const getBgdata = () => ajax('/bgdata');

//请求G2数据
export const getG2data = () => ajax('http://localhost:3000/array');


