import * as datas from './data'
var Mock = require('mockjs');

Mock.mock(/http:\/\/localhost:3000\/array[\s\S]*?/,datas.G2data);
Mock.mock('/bgdata',datas.Bgdata);
