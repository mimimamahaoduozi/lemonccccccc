import ajax from './fetch'

//请求表格数据
export const getBgdata = (eventType,time,subType) => ajax('http://localhost:3000/bgdata',{
    eventType:eventType || 'EVENT_TYPE',
    from:time-3600000,
    to:time,
    subType:subType,
});

//请求G2数据
export const getG2data = (eventType,time,subType) => ajax('http://localhost:3000/g2data',{
    eventType:eventType || 'EVENT_TYPE',
    from:time-3600000,
    to:time,
    subType:subType,
});


