/*
 * @Author: up 
 * @Date: 2019-09-18 19:23:13 
 * @Last Modified by:   up 
 * @Last Modified time: 2019-09-18 19:23:13 
 */
import React, { Component } from 'react'
import { Table } from 'antd';
let dataSource = [];

export default class Pagedata extends Component {
    state = {
        columns: [{
            title: "ID",
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '电影',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '简介',
            dataIndex: 'describe',
            key: 'describe',
        },
        {
            title: '演员',
            dataIndex: 'actor',
            key: 'actor',
        },
        ]
    }
    render() {
        if (this.props.list.length !== 0) {
            dataSource = this.props.list;
            //对数据进行处理 加入key的键值对
            dataSource.map((item, index) => {
                return item.key = JSON.stringify(item.id)
            })
        }
        return (
            <div>
                {
                    dataSource.length && <Table dataSource={dataSource} columns={this.state.columns} />
                }
            </div>
        )
    }
}
