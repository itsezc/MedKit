import React from 'react';

import { ApolloProvider, useMutation, gql } from '@apollo/client';

import { Layout, Typography } from 'antd';
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!, $deviceID: String!) {
		login(email: $email, password: $password, deviceID: $deviceID) {
			token
		}
	}
`;

export default () => {

      const { Title } = Typography;
      const { Header, Content, Footer } = Layout;

      const deviceID = 'web';

      const [processLogin, { loading }] = useMutation(LOGIN_MUTATION, {
		onCompleted: async (data) => {
			console.log(data)
		}
	});

      const onFinishFailed = (errorInfo: any) => {
            console.log('Failed', errorInfo);
      }

      return(
            <>
                  <Layout>
                        <Header />
                        <Content style={{ paddingTop: '10%' }}>
                              <Row>
                                    <Col span={8} />

                                    <Col span={8}>
                                          <Card>
                                                <Title level={2}>
                                                      MedKit
                                                </Title>

                                                <Form 
                                                      onFinish={processLogin}
                                                      onFinishFailed={onFinishFailed}
                                                      name='login'
                                                >
                                                      <Form.Item
                                                            name='email'
                                                            rules={[{required: true, message: 'Please enter an email!'}]}
                                                      >
                                                            <Input
                                                                  placeholder='Email'
                                                                  prefix={<UserOutlined className='site-form-item-icon' />}
                                                            />
                                                      </Form.Item>

                                                      <Form.Item
                                                            name='password'
                                                            rules={[{required: true, message: 'Please enter a password!'}]}
                                                      >
                                                            <Input.Password
                                                                  placeholder='Password' 
                                                                  prefix={<LockOutlined className='site-form-item-icon' />}
                                                            />
                                                      </Form.Item>

                                                      <Form.Item
                                                            name='remember'
                                                            valuePropName='checked'
                                                            noStyle
                                                      >
                                                            <Row>
                                                                  <Col span={12}>
                                                                        <Checkbox>
                                                                              Remember me
                                                                        </Checkbox>
                                                                  </Col>
                                                                  <Col span={12}>
                                                                        <a className='xyz' style={{ float: 'right'}}>
                                                                              Forgot Password
                                                                        </a>
                                                                  </Col>
                                                            </Row>

                                                      </Form.Item>
                                                      <p />
                                                      <Form.Item>
                                                            <Button
                                                                  type='primary' 
                                                                  htmlType='submit'
                                                            >
                                                                  Login
                                                            </Button>
                                                      </Form.Item>
                                                </Form>
                                          </Card>
                                    </Col>

                                    <Col span={8} />
                              </Row>   
                        </Content>
                        <Footer />
                  </Layout>               
            </>
      );
}