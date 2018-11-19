import Vue from 'vue'
import Router from 'vue-router'
import commonality from '@/assets/js/commonality.js'
// import progressz from '@/assets/js/progressz.js'

// 首页
import index from '@/views/index'
// 进度条
import enter from '@/views/homePage/enter'
// 信用卡
import credit from '@/views/credit'
// 贷款
import loan from '@/views/loan'
// 保险
import safe from '@/views/safe'
// 用户
import user from '@/views/user'
// 卡详情
import card from '@/views/card'
import apply from '@/views/apply'
import loanDetails from '@/views/loanDetails'
import progress from '@/views/homePage/progress'
import queryResult from '@/views/homePage/queryResult'
import recordDetails from '@/views/homePage/recordDetails'
import banInformation from '@/views/creditCard/banInformation'
import agreement from '@/views/creditCard/agreement'
import deuteronomy from '@/views/creditCard/deuteronomy'
import safeDetails from '@/views/Insurance/safeDetails'
import safeDetailsCopy from '@/views/Insurance/safeDetailsCopy'
import estimate from '@/views/Insurance/estimate'
import estimateCopy from '@/views/Insurance/estimateCopy'
import message from '@/views/subscriber/message'
import alter from '@/views/subscriber/alter'
import upload from '@/views/subscriber/upload'
import userHttp from '@/views/subscriber/userHttp'
import sign from '@/views/sign'
// 首页公共底部
import footer from '@/views/public/footer'
import put from '@/views/subscriber/put'
import feedback from '@/views/subscriber/feedback'
import aboutUs from '@/views/subscriber/aboutUs'
import createCard from '@/views/subscriber/createCard'
import carry from '@/views/subscriber/carry'
import customer from '@/views/subscriber/customer'
import system from '@/views/subscriber/system'
import extension from '@/views/subscriber/extension'
import help from '@/views/subscriber/help'
import subCard from '@/views/subscriber/subCard'
import general from '@/views/subscriber/general'
import bankProgress from '@/views/subscriber/bankProgress'
// 订单详情头部
import orderHead from '@/views/public/orderHead'
import cardHui from '@/views/public/cardHui'
import foot from '@/views/public/foot'
// 订单详情内容
import orderDetails from '@/views/order/orderDetails'
import loanDetailed from '@/views/order/loanDetailed'
import safeDetailed from '@/views/order/safeDetailed'
import noOrder from '@/views/order/noOrder'

Vue.use(commonality)
    // Vue.use(progressz)
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: index,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/loan',
            component: loan,
            meta: {
                title: '贷款'
            }
        },
        {
            path: '/credit',
            component: credit,
            meta: {
                title: '信用卡'
            }
        },
        {
            path: '/safe',
            component: safe,
            meta: {
                title: '保险'
            }
        },
        {
            path: '/user',
            component: user,
            meta: {
                title: '用户中心'
            }
        },
        {
            path: '/orderHead',
            component: orderHead,
            children: [{
                    path: '/orderHead/orderDetails',
                    component: orderDetails,
                    meta: {
                        title: '信用卡'
                    }
                },
                {
                    path: '/orderHead/loanDetailed',
                    component: loanDetailed,
                    meta: {
                        title: '贷款'
                    }
                },
                {
                    path: '/orderHead/safeDetailed',
                    component: safeDetailed,
                    meta: {
                        title: '保险'
                    }
                }
            ]
        },
        {
            path: '/foot',
            component: foot,
            children: [{
                    path: '/foot/system',
                    component: system,
                    meta: {
                        title: '消息通知'
                    }
                },
                {
                    path: '/foot/extension',
                    component: extension,
                    meta: {
                        title: '推广费用'
                    }
                },
                {
                    path: '/foot/help',
                    component: help,
                    meta: {
                        title: '帮助中心'
                    }
                },
                {
                    path: '/foot/subCard',
                    component: subCard,
                    meta: {
                        title: '分销机制'
                    }
                },
                {
                    path: '/foot/carry',
                    component: carry,
                    meta: {
                        title: '我要提现'
                    }
                },
                {
                    path: '/estimate',
                    component: estimate,
                    meta: {
                        title: '车险'
                    }
                },
                {
                    path: '/estimateCopy',
                    component: estimateCopy,
                    meta: {
                        title: '车险'
                    }
                },
                {
                    path: '/enter',
                    component: enter,
                    meta: {
                        title: '办卡进度'
                    }
                },
                {
                    path: '/deuteronomy',
                    component: deuteronomy,
                    meta: {
                        title: '查看视频'
                    }
                },
                {
                    name: 'card',
                    path: '/card',
                    component: card,
                    meta: {
                        title: '推荐信用卡'
                    }
                },
                {
                    name: 'general',
                    path: '/general',
                    component: general,
                    meta: {
                        title: '申请流程'
                    }
                },
                {
                    name: 'safeDetails',
                    path: '/safeDetails',
                    component: safeDetails,
                    meta: {
                        title: '推荐保险'
                    }
                },
                {
                    path: '/safeDetailsCopy',
                    component: safeDetailsCopy,
                    meta: {
                        title: '推荐保险'
                    }
                },
                {
                    path: '/progress',
                    component: progress,
                    meta: {
                        title: '输入进度'
                    }
                },
                {
                    path: '/queryResult',
                    component: queryResult,
                    meta: {
                        title: '查询进度'
                    }
                },
                {
                    path: '/recordDetails',
                    component: recordDetails,
                    meta: {
                        title: '记录详情'
                    }
                },
                {
                    path: '/bankProgress',
                    component: bankProgress,
                    meta: {
                        title: '银行进度'
                    }
                }
            ]
        },
        {
            path: '/cardHui',
            component: cardHui,
            children: [{
                    name: 'loanDetails',
                    path: '/loanDetails',
                    component: loanDetails,
                    meta: {
                        title: '一键申请'
                    }
                }

            ]
        },

        {
            path: '/apply',
            component: apply,
            meta: {
                title: '立即申请'
            }
        },

        {
            path: '/banInformation',
            name: banInformation,
            component: banInformation,
            meta: {
                title: '推荐银行'
            }
        },
        {
            path: '/agreement',
            component: agreement,
            meta: {
                title: '协议标题'
            }
        },
        {
            path: '/message',
            component: message,
            meta: {
                title: '我的信息'
            }
        },
        {
            path: '/alter',
            component: alter,
            meta: {
                title: '修改'
            }
        },
        {
            path: '/upload',
            component: upload,
            meta: {
                title: '用户类型'
            }
        },
        {
            path: '/sign',
            component: sign,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/userHttp',
            component: userHttp,
            meta: {
                title: '用户协议'
            }
        },
        {
            path: '/put',
            component: put,
            meta: {
                title: '完善信息'
            }
        },
        {
            path: '/feedback',
            component: feedback,
            meta: {
                title: '意见反馈'
            }
        },
        {
            path: '/aboutUs',
            component: aboutUs,
            meta: {
                title: '关于我们'
            }
        },
        {
            path: '/createCard',
            component: createCard,
            meta: {
                title: '办卡须知'
            }
        },
        {
            path: '/noOrder',
            component: noOrder,
            meta: {
                title: '未申请记录'
            }
        },
        {
            path: '/customer',
            component: customer,
            meta: {
                title: '客户管理'
            }
        }

    ]
})