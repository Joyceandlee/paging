import React, { Component } from 'react';
import Pagedata from './Pagedata';

import { Pagination } from 'antd';



export default class List extends Component {
    state = {
        data: 0,//初始化
        curpage: 1,//当前页
        limit: 10,//限制条数
        list: []
    }
    componentDidMount() {
        const { limit, curpage } = this.state;
        fetch(`/getList?limit=${limit}&curpage=${curpage}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    list: data.list,
                    data: data.data
                })
            })
    }

    render() {
        return (
            <div>
                <Pagination size="small" total={this.state.data} showSizeChanger onShowSizeChange={this.onchange.bind(this)} onChange={this.onchange.bind(this)} pageSizeOptions={['10', '20', '30', '40']} />
                <Pagedata list={this.state.list} />
            </div>
        )
    }
    //页码改变的回调
    onchange(curpage, limit) {
        console.log(curpage, limit)

        fetch(`/getList?limit=${limit}&curpage=${curpage}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    list: data.list
                })
            })
    }

}
