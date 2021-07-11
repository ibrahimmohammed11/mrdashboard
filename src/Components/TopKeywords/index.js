import React, { Fragment, Component } from 'react';
import { Table } from 'antd';




const dataSource = [
    {
      key: '1',
      name: 'Adidas',
      Revenue: 32,
      Rate: '8.61%',
    },
    {
      key: '2',
      name: 'Adidas',
      Revenue: 42,
      Rate: '8.61%',
    },
    {
        key: '2',
        name: 'Adidas',
        Revenue: 42,
        Rate: '8.61%',
      },

  ];
  
  const columns = [
    {
      title: 'Keyword',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Revenue',
      dataIndex: 'Revenue',
      key: 'Revenue',
    },
    {
      title: 'Conversion Rate',
      dataIndex: 'Rate',
      key: 'Rate',
    },
  ];


class TopKeywords extends Component {

    render() {
        return (
            <Fragment>
                <Table dataSource={dataSource} columns={columns} />
            </Fragment>
        )
    }
}
export default TopKeywords;