/* eslint-disable */
import React, { Component } from 'react';
import './topNav.scss';
import dateUtil from './../../utils/date';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeInfoActions from './../../actions/storeInfo';

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeInfo: {},
            nowTime:''
        };
        this.startMarq = this.startMarq.bind(this);
        this.stopMarq = this.stopMarq.bind(this);
        this.logout = this.logout.bind(this);
    }
    render() {
        let date = new Date();
        const timerStr = dateUtil(date, '-');
        let weekArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const nowWeek = weekArr[date.getDay()];
        let storeInfo = this.state.storeInfo;
        let nowTime = date.getHours() + ':' + (date.getMinutes()>10?date.getMinutes():('0'+date.getMinutes()));
        let _this = this;
        this.nowTimer = setInterval(function(){
            date = new Date();            
            nowTime = date.getHours() + ':' + (date.getMinutes()>10?date.getMinutes():('0'+date.getMinutes()));
            _this.setState({
                nowTime
            })
        },1000);
        return (
            <div id="top-nav">
                <span className="welcome">欢迎光临 {storeInfo.storeName}</span>
                <div className="marq">
                    <marquee direction="left" align="bottom" height="25" width="100%" scrollamount="4" scrolldelay="1"
                        onMouseOver={this.stopMarq}
                        onMouseOut={this.startMarq}
                        ref={marq => this.marq = marq}
                    >温馨提示：开班后，须在24小时内进行交班，否则系统将强制交班！</marquee>
                </div>
                <div className="now-clerk">
                    <span className="logout" onClick={this.logout}>[退出]</span>
                    <span className="clerk-name">{storeInfo.employeeName}</span>
                    <div className="now-time">
                        <span className="all-time">{timerStr}</span>
                        <span className="week">{nowWeek} {this.state.nowTime}</span>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        let storeInfo = JSON.parse(sessionStorage.getItem("storeInfo"));
        this.setState({
            storeInfo
        });
        this.props.actions.saveStoreInfo(storeInfo);
    }
    componentWillUnmount(){
        clearInterval(this.nowTimer);
    }
    stopMarq() {
        this.marq.onmouseover = function () {
            this.stop();
        };
    }
    startMarq() {
        this.marq.onmouseout = function () {
            this.start();
        };
    }
    logout(){
        this.props.router.push("/");
    }
}

const mapStateToProps = (state)=>{
    return {
        storeInfo:state.storeInfo
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actions:bindActionCreators(storeInfoActions,dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNav);