export const mdArr = [
    {
        id: 1,
        title: "vue.nextTick",
        data: require('./nextTick.md'),
        intro:'nextTick是vue中的一个常用api，其用法和目的是将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。',
        time:'2020-01-27',
        markdom: ""
    },
    {
        id: 2,
        title: "服务器配置",
        data: require('./serverconfig.md'),
        time:'2019-11-21',
        intro:'该文章主要讲的是个人使用阿里云服务器时的ssh配置，方便登入阿里云',
        markdom: ""
    },
    {
        id: 3,
        title: 'sharp应用',
        data: require('./sharp.md'),
        time:'2019-11-20',
        intro:'sharp是一个高效的node.js图片处理插件，这篇文章主要讲的是运用sharp来自动生成雪碧图',
        markdom: ""
    },
    {
        id: 4,
        title: 'flux理解',
        data: require('./flux.md'),
        time:'2019-02-03',
        intro:'flux是一种数据流框架，更像一种架构思想；vuex就是以flux为基础来设计的；我们是有必要来了解flux的设计思想',
        markdom: ""
    }

]