import React from 'react';
import { Breadcrumb, Layout, Menu, theme, FloatButton } from 'antd';
import { Route } from 'react-router-dom';
import { RouterList } from '../../router/Router';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

export const TopBar = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout" style={{ width: "100%" }}>
            <Header style={{ alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
                <FloatButton.Group shape="circle">
                    <FloatButton.BackTop visibilityHeight={0} />
                </FloatButton.Group>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    <RouterList />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};