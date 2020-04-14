import React from 'react';

import { Layout } from 'antd';

//icons
import { UserOutlined } from '@ant-design/icons';

export default (props:any) => {

      const { Header } = Layout;

      return(
            <>
                  <div className='header-right'>
                        <UserOutlined />
                  </div>
            </>
      );
}