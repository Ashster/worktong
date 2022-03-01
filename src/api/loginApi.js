// 目前暂时为mock数据
// 以下为注册界面获取职位信息列表
const posData = [{
        value: '技术',
        label: '技术类',
        children: [{
                value: '技术研发',
                label: '技术研发类',
                children: [{
                        value: '前端研发',
                        label: '前端研发工程师'
                    },
                    {
                        value: '后端研发',
                        label: '后端研发工程师'
                    },
                    {
                        value: '客户端研发',
                        label: '客户端研发工程师'
                    },
                    {
                        value: 'SQL研发',
                        label: 'SQL研发工程师'
                    },
                    {
                        value: '游戏研发',
                        label: '游戏研发工程师'
                    },
                ]
            },
            {
                value: '质量管理',
                label: '质量管理类',
                children: [{
                        value: '测试',
                        label: '测试工程师'
                    },
                    {
                        value: '质量管理',
                        label: '质量管理工程师'
                    },
                    {
                        value: '安全',
                        label: '安全工程师'
                    },
                ]
            },
            {
                value: '算法大数据',
                label: '算法大数据类',
                children: [{
                        value: '人工智能',
                        label: '人工智能研究员'
                    },
                    {
                        value: 'NLP',
                        label: 'NLP算法工程师'
                    },
                    {
                        value: 'CV',
                        label: 'CV算法工程师'
                    },
                    {
                        value: '数据分析',
                        label: '数据分析科学家'
                    },
                ]
            },
        ]
    },
    {
        value: '产品',
        label: '产品类',
        children: [{
                value: '产品',
                label: '产品类',
                children: [{
                        value: '产品策划',
                        label: '产品策划'
                    },
                    {
                        value: '产品经理',
                        label: '产品经理'
                    },
                    {
                        value: '产品运营',
                        label: '产品运营'
                    },
                ]
            },
            {
                value: '项目',
                label: '项目类',
                children: [{
                        value: '项目管理',
                        label: '项目管理'
                    },
                    {
                        value: '项目经理',
                        label: '项目经理'
                    },
                ]
            },
        ]
    },
    {
        value: '服务',
        label: '服务类',
        children: [{
                value: '销售',
                label: '销售类',
                children: [{
                        value: '销售经理',
                        label: '销售经理'
                    },
                    {
                        value: '商业分析',
                        label: '商业分析经理'
                    },
                    {
                        value: '大客户销售',
                        label: '大客户销售经理'
                    },
                ]
            },
            {
                value: '客服',
                label: '客服类',
                children: [{
                        value: '客服管理',
                        label: '客服管理'
                    },
                    {
                        value: '海外客服',
                        label: '海外客服'
                    },
                ]
            },
        ]
    },
    {
        value: '企业',
        label: '企业类',
        children: [{
                value: '人力',
                label: '人力资源类',
                children: [{
                        value: 'HR',
                        label: 'HR招聘经理'
                    },
                    {
                        value: '人才研究分析',
                        label: '人才研究分析经理'
                    },
                ]
            },
            {
                value: '行政',
                label: '行政类',
                children: [{
                        value: '部门秘书',
                        label: '部门秘书'
                    },
                    {
                        value: '高管秘书',
                        label: '高管秘书'
                    },
                ]
            },
            {
                value: '财务',
                label: '财务类',
                children: [{
                        value: '财务分析',
                        label: '财务分析经理'
                    },
                    {
                        value: '审计',
                        label: '高级审计经理'
                    },
                    {
                        value: '报表会计',
                        label: '报表会计师'
                    },
                    {
                        value: '采购会计',
                        label: '采购会计师'
                    },
                    {
                        value: '核算会计',
                        label: '核算会计师'
                    },
                    {
                        value: '税务',
                        label: '税务管理经理'
                    },
                ]
            },
            {
                value: '法律',
                label: '法律类',
                children: [{
                        value: '法律顾问',
                        label: '法律顾问'
                    },
                    {
                        value: '公共策略',
                        label: '公共策略经理'
                    },
                ]
            },
        ]
    },
    {
        value: '设计',
        label: '设计类',
        children: [{
                value: '设计',
                label: '设计类',
                children: [{
                        value: '视觉设计',
                        label: '视觉设计师'
                    },
                    {
                        value: '体验设计',
                        label: '体验设计师'
                    },
                    {
                        value: '交互设计',
                        label: '交互设计师'
                    },
                ]
            },
            {
                value: '游戏美术',
                label: '游戏美术类',
                children: [{
                        value: '3D美术',
                        label: '3D美术师'
                    },
                    {
                        value: '动画设计',
                        label: '动画设计师'
                    },
                    {
                        value: '特效设计',
                        label: '特效设计师'
                    },
                    {
                        value: '2D设计',
                        label: '2D设计师'
                    },
                ]
            },
        ]
    },
]
const depData = [{
        value: '总办',
        label: '总办',
        children: [{
                value: '总办办公室',
                label: '总办办公室',
            },
            {
                value: '总办秘书处',
                label: '总办秘书处'
            }
        ]
    },
    {
        value: '平台发展事业群',
        label: '平台发展事业群',
        children: [{
                value: '平台项目一组',
                label: '平台项目一组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
            {
                value: '平台项目二组',
                label: '平台项目二组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            }, {
                value: '平台项目三组',
                label: '平台项目三组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
        ]
    },
    {
        value: '智慧产业事业群',
        label: '智慧产业事业群',
        children: [{
                value: '智慧项目一组',
                label: '智慧项目一组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
            {
                value: '智慧项目二组',
                label: '智慧项目二组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            }, {
                value: '智慧项目三组',
                label: '智慧项目三组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
        ]
    },
    {
        value: '游戏娱乐事业群',
        label: '游戏娱乐事业群',
        children: [{
                value: '游戏项目一组',
                label: '游戏项目一组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
            {
                value: '游戏项目二组',
                label: '游戏项目二组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            }, {
                value: '游戏项目三组',
                label: '游戏项目三组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
        ]
    },
    {
        value: '效能提升事业群',
        label: '效能提升事业群',
        children: [{
                value: '效率项目一组',
                label: '效率项目一组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
            {
                value: '效能项目二组',
                label: '效能项目二组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            }, {
                value: '效能项目三组',
                label: '效能项目三组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
        ]
    },
    {
        value: '商业战略事业群',
        label: '商业战略事业群',
        children: [{
                value: '商业项目一组',
                label: '商业项目一组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
            {
                value: '投资项目一组',
                label: '投资项目一组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
            {
                value: '投资项目二组',
                label: '投资项目二组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
            {
                value: '投资项目三组',
                label: '投资项目三组',
                children: [{
                        value: '技术组',
                        label: '技术组'
                    },
                    {
                        value: '产品组',
                        label: '产品组'
                    },
                    {
                        value: '运营组',
                        label: '运营组'
                    },
                    {
                        value: '秘书处',
                        label: '秘书处'
                    },
                ]
            },
        ]
    },
]
export function getPosData() {
    return posData;
}
export function getDepData() {
    return depData;
}