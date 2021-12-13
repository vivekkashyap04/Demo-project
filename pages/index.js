import Head from 'next/head'
import { useState, useEffect } from "react";
import { Layout } from 'antd';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from '../component/header';
import Demo from '../component/Todo';

export default function Home() {
  const { Header, Footer, Sider, Content } = Layout;
  const [todoArray, setTodoArray] = useState([]);
  useEffect(() => {
    setTodoArray(JSON.parse(localStorage.getItem("todo")));
  },[todoArray])
  console.log(todoArray);
  return (
    <div>
      <Layout>
      <Sider>Sider</Sider>
      <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 ,color:'white',textAlign:'center'}}>
        To-do-App
        </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 760 }}>
          <Demo />
          {todoArray.map((item,index) => {
            return (
            <div key={index}>
              <h2>{item.todo.task}</h2>
              </div>
            )
          })}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    </div>
  )
}
