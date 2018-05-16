import instance from './../index';

export const getGoodsType = (storeId) => {
    return instance({
        url: "index",
        method: "GET",
        params:{
            storeId
        }
    }).then(res => {
        if (res) {
            if (res.status === 200) {
                return Promise.resolve(res.data);
            }
        }

    })
}

// 创建订单

export const createOrder = (time,storeId)=>{
    return instance({
        url: "create-orders?createTime="+time+"&storeId="+storeId,
        method: "PUT"
    }).then(res => {
        if (res) {
            if (res.status === 200) {
                return Promise.resolve(res.data);
            }
        }

    })
}

// 获取当前订单的商品

export const getNowOrderGoods = (orderId)=>{
    return instance({
        url: "orders/"+orderId,
        method: "GET"
    }).then(res => {
        if (res) {
            if (res.status === 200) {
                return Promise.resolve(res.data);
            }
        }

    })
}

// 商品添加等操作
export const addGoodsByApi = (goodsId,orderId,amount,goodsCount=1)=>{
    let data = {};
    if(amount){
        data = {
            productCount:goodsCount,
            productId:goodsId,
            amount
        };
    }else{
        data = {
            productCount:goodsCount,
            productId:goodsId
        };
    }
    return instance({
        url: "orders/"+orderId+"/add",
        method: "POST",
        data
    }).then(res => {
        if (res) {
            if (res.status === 200) {
                return Promise.resolve(res.data);
            }
        }

    })
}

// 商品减少操作
export const reduceGoods = (goodsId,orderId,goodsCount=1)=>{
    return instance({
        url: "orders/"+orderId+"/remove",
        method: "POST",
        data:{
            productCount:goodsCount,
            productId:goodsId
        }
    }).then(res => {
        if (res) {
            if (res.status === 200) {
                return Promise.resolve(res.data);
            }
        }

    })
}