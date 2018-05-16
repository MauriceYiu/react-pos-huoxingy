import React, { Component } from 'react';
import './index.scss';
import LeftMenu from './../../components/menu/LeftMenu';
import TopNav from './../../components/topNav/TopNav';

class Index extends Component {
    render() {
        return (
            <div id="index">
                <div className="left-area">
                    <LeftMenu />
                </div>
                <div className="right-area">
                    <div className="top-nav">
                        <TopNav router={this.props.router} />
                    </div>
                    <div className="router-cont">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;