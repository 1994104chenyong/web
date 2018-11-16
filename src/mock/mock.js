import Mock from "mockjs";
Mock.mock(/getProductList/,{
    productList:{sp:{
            title:"饰品",
            list: [
                {
                    name: '潘多拉',
                    url: '/detail/pdl',
                    hot:'@boolean'
                },
                {
                    name: 'Gucci',
                    url: 'http://gucci.com',
                    hot:'@boolean'
                },
                {
                    name: 'coach',
                    url: 'http://coach.com',
                    hot:'@boolean'
                },
                {
                    name: '爱马仕',
                    url: 'http://ams.com',
                    hot:'@boolean'
                }
            ]
        },
        mz:{
            title:"美妆",
            list: [
                {
                    name: '迪奥',
                    url: '/detail/dior',
                    hot:'@boolean'
                },
               {
                    name: 'YSL',
                    url: '/detail/yslqd',
                    hot:'@boolean'
                },
                {
                    name: 'LV',
                    url: 'http://lv.com',
                    hot:'@boolean'
                },
                {
                    name: 'channel',
                    url: 'http://channel.com',
                    hot:'@boolean'
                }
            ]
        },}});
Mock.mock(/getNewsList/,{
    newsList:[
        {
            name: '@ctitle',
            url: '@curl',
        },
        {
            name: '@ctitle',
            url: '@curl',
        },
        {
            name: '@ctitle',
            url: '@curl',
        },
        {
            name: '@ctitle',
            url: '@curl',
        }
    ],
});Mock.mock(/getBrandList/, [
    {
        title: 'YSL圣罗兰羽毛气垫',
        description: '自然，光泽，闪光/珠光，哑光',
        imgSrc: '../../../../static/img/yslqd.jpg',
        href: '/detail/yslqd',
        saleOut: false
    },
    {
        title: '圣罗兰 YSL圆管口红',
        description: '持久唇釉唇膏,滋润保湿持久饱和',
        imgSrc: '../../../../static/img/ysllip.jpg',
        href: '/detail/ysllip',
        saleOut: false
    },
    {
        title: 'Dior迪奥香水',
        description: '迪奥小姐花漾淡香水,花果香调',
        imgSrc: '../../../../static/img/dior.jpg',
        href: '/detail/dior',
        saleOut: true
    },
    {
        title: '潘多拉',
        description: '浪漫白兰花纯纯的爱串珠手链',
        imgSrc: '../../../../static/img/pdl.jpg',
        href: '/detail/pdl',
        saleOut: false
    }
]);