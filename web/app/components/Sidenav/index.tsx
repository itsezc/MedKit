import React from 'react';

import { Layout, Menu } from 'antd';
import { Avatar } from 'antd';
import { HomeOutlined, FormOutlined, LogoutOutlined, MessageFilled } from '@ant-design/icons';

export default (props:any) => {

      const { Sider } = Layout;
      const { SubMenu } = Menu;

      return (
            <>
                  <Layout>
                        <Sider collapsed={true} style={{ height: '100vh' }}>
                              <div className='logo' />

                              <Menu
                                    theme='dark'
                                    defaultSelectedKeys={props.active}
                                    mode='inline'
                              >
                                    <Menu.Item key='1'>
                                          <HomeOutlined />
                                          <span> Dashboard </span>
                                    </Menu.Item>

                                    <Menu.Item key='2'>
                                          <FormOutlined />
                                          <span> Reports </span>
                                    </Menu.Item>

                                    <div className='side-bottom'>
                                          <Avatar 
                                                className='logout-btn'
                                                shape='square' 
                                                size='large'
                                                icon={<LogoutOutlined />} 
                                          />
                                    </div>
                              </Menu>
                        </Sider>
                  </Layout>
            </>
      );
}