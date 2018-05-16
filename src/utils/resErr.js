import {
    message
} from "antd";
import {
    hashHistory
} from "react-router";

const errorFun = (errInfo) => {
    message.error(errInfo);
};

export const catchError = (error) => {
    let errInfo = "";
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // window.location.href = window.location.href.split('#')[0] + '#/login';
                errInfo = "帐号失效，请重新登录";
                hashHistory.push('/');
                break;
            case 403:
                errInfo = "权限不足";
                break;
            default:
                errInfo = "系统错误";
                break;
        }
        errorFun(errInfo);
    }
}