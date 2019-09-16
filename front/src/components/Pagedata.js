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
            dataSource = this.props.list
        }
        // this.props.list.length !== 0 ? dataSource = this.props.list : [];
        return (
            <div>
                {
                    dataSource.length && <Table dataSource={dataSource} columns={this.state.columns} rowkey="id" />
                }
            </div>
        )
    }
}
