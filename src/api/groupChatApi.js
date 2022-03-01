// 获取群聊列表Api Mock
const gChatData = [{
            value: '我加入的群聊',
            label: '我加入的群聊',
        },
        {
            value: '我管理的群聊',
            label: '我管理的群聊',
        },
        {
            value: '我创建的群聊',
            label: '我创建的群聊',
        },
    ]
    //为了采用UserList组件，处理一边数据，加上isLeaf属性

const addLeafProp = (listdata) => {
    for (let i = 0; i < listdata.length; i++) {
        if (listdata[i].children && listdata[i].children.length) {
            listdata[i].isLeaf = false;
            addLeafProp(listdata[i].children);
        } else {
            listdata[i].isLeaf = true;
            listdata[i].children = [{
                    id: '20000001',
                    name: '投产群3'
                },
                {
                    id: '20000002',
                    name: '测试组2'
                },
                {
                    id: '20000002',
                    name: '运营三号'
                }
            ]
        }
    }
}
export function getGChatList() {
    addLeafProp(gChatData);
    return gChatData;
}