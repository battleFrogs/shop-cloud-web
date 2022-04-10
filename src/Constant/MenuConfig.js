const config = [
    {
        key: "0",
        name: "首页",
        url: "/home/index",
        icon: "StepBackwardOutlined",
    },
    {
        key: "1",
        name: "商品",
        url: "/home/goods",
        icon: "StepBackwardOutlined",
        children: [
            {
                key: 2,
                name: "商品详情",
                url: "/home/goods/goodsDetail",
                icon: "StepForwardOutlined"
            }
        ],
    },
    {
        key: 3,
        name: "待定1",
        url: "/home/page2",
        icon: "DoubleRightOutlined",
        children: [
            {
                key: 4,
                name: "待定1.1",
                url: "/home/page2/pageDetail1",
                icon: "UpCircleOutlined"
            },
            {
                key: 5,
                name: "待定1.2",
                url: "/home/page2/pageDetail2",
                icon: "DownCircleOutlined"

            },

        ],
    },
    {
        key: 6,
        name: "待定2",
        url: "/home/page3",
        icon: "ForwardOutlined",
        children: [
            {
                key: 7,
                name: "待定2.1",
                url: "/home/page3/pageDetail1",
                icon: "ForwardOutlined",
            },
            {
                key: 8,
                name: "待定2.2",
                url: "/home/page3/pageDetail2",
                icon: "ForwardOutlined",
            },

        ],
    },
    {
        key: 9,
        name: "待定3",
        url: "/home/page4",
        icon: "ForwardOutlined",
    },

];


export default config;