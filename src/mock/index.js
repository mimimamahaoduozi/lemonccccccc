// import eventDate from './event'
var Mock = require('mockjs');
var data = require('./g2data/index');
var bgdata = require('./bgdata/index')

Mock.mock('/array',data);
Mock.mock('/bgdata',bgdata);
