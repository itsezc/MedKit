import React from 'react';

//navigation
import { Menu } from 'antd';

//data display
import { Avatar } from 'antd';

//icons
import { HomeOutlined, FormOutlined, LogoutOutlined, MessageFilled } from '@ant-design/icons';

export default (props:any) => {

      const { SubMenu } = Menu;

      return (
            <>
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
            </>
      );
}