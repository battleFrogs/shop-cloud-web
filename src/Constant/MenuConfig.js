const config = [
    {
        key: "1",
        name: "商品",
        url: "/page1",
        children: [
            {
                key: 2,
                name: "商品详情",
                url: "/page1/pageDetail1",
            }
        ],
    },
    {
        key: 3,
        name: "待定1",
        url: "/page2",
        children: [
            {
                key: 4,
                name: "待定1.1",
                url: "/page2/pageDetail1"
            },
            {
                key: 5,
                name: "待定1.2",
                url: "/page2/pageDetail2"
            },

        ],
    },
    {
        key: 6,
        name: "待定2",
        url: "/page3",
        children: [
            {
                key: 7,
                name: "待定2.1",
                url: "/page3/pageDetail1"
            },
            {
                key: 8,
                name: "待定2.2",
                url: "/page3/pageDetail2"
            },

        ],
    },
    {
        key: 9,
        name: "待定3",
        url: "/page4"
    },

];


export default config;