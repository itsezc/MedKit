import React from 'react';

//components
import Header from '../../components/Header/index';
import Sidenav from '../../components/Sidenav/index';
import Footer from '../../components/Footer/index';

//layout
import { Layout } from 'antd';
import { Col, Row } from 'antd';

//data display
import { Card } from 'antd';

//navigation
import { Breadcrumb } from 'antd';

//icons and general
import { Typography } from 'antd';
import { HomeFilled } from '@ant-design/icons';

export default () => {
      
      const { Title } = Typography;

      return(
            <>
                  <Layout style={{ minHeight: '100vh' }}>
                        <Layout.Sider collapsed={true} style={{ height: '100vh', position: 'fixed', overflow: 'auto', left: 0, zIndex: 1 }}>
                              <Sidenav />
                        </Layout.Sider>

                        <Layout>
                        <Layout.Header style={{ background: '#fff', position: 'fixed', width: '100%' }}>
                              <Header />
                        </Layout.Header>

                        <Layout.Content className='content'>
                              <Breadcrumb>
                                    <Breadcrumb.Item> <HomeFilled /> </Breadcrumb.Item>
                                    <Breadcrumb.Item> Dashboard </Breadcrumb.Item>
                              </Breadcrumb>

                              <div className='page-container'>
                                    <Title> Welcome to Medkit... </Title>

                                    <Row gutter={16}>
                                          <Col span={6}>
                                                <Row>
                                                      <Card
                                                            className='content-container'
                                                            title='Appointments'
                                                            bordered={false}
                                                      >
                                                            <div className='dash-card'> xyz </div>
                                                      </Card>
                                                </Row>
                                                <p />
                                                <Row>
                                                      <Card
                                                            className='content-container'
                                                            title='Appointments'
                                                            bordered={false}
                                                      >
                                                            <div
                                                                  className='dash-card'
                                                                  style={{ color: '#ff0000' }}
                                                            > 
                                                                  -15 
                                                            </div>
                                                      </Card>
                                                </Row>
                                          </Col>

                                          <Col span={6}>
                                                <Row>
                                                      <Card
                                                            className='content-container'
                                                            title='Appointments'
                                                            bordered={false}
                                                      >
                                                            <div className='dash-card'> xyz </div>
                                                      </Card>
                                                </Row>
                                                <p />
                                                <Row>
                                                      <Card
                                                            className='content-container'
                                                            title='Appointments'
                                                            bordered={false}
                                                      >
                                                            <div
                                                                  className='dash-card'
                                                                  style={{ color: '#00b200' }}
                                                            > 
                                                                  +5 
                                                            </div>
                                                      </Card>
                                                </Row>
                                          </Col>

                                          <Col span={12}>
                                                <Card
                                                      className='content-container'
                                                      title='Appointments'
                                                      bordered={false}
                                                >
                                                      xyz
                                                </Card>
                                          </Col>
                                    </Row>

                              </div>
                              
                        </Layout.Content>

                        <Layout.Footer>
                              <Footer />
                        </Layout.Footer>   
                        </Layout>                     
                  </Layout>  
            </>
      );
}