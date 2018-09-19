import * as datas from './data'
var Mock = require('mockjs');

Mock.mock(/http:\/\/localhost:3000\/g2data[\s\S]*?/,datas.G2data);
Mock.mock(/http:\/\/localhost:3000\/bgdata[\s\S]*?/,datas.Bgdata);
