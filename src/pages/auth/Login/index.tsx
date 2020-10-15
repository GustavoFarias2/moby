import React from 'react';

import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Card,
  Form,
  Typography,
  Input,
  Checkbox,
  Button
} from "antd";

import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Item } = Form;

const Login: React.FC = () => {

  return (
    <Row align="middle" justify="center" style={{ height: "100%", backgroundColor: "Background" }}>
      <Col sm={24} md={12}>

        <Card style={{ padding: "0 50px" }}>

          <Form
            name="login_form"
            initialValues={{ remember: true }}
            onFinish={(v) => console.log(v)}
          >

            <Title level={3} style={{ marginTop: 20, marginBottom: 30 }}>
              Bem vindo ao Moby
            </Title>

            <Item
              name="username"
              rules={[{ required: true, message: "Insira seu usuario para continuar" }]}
            >
              <Input prefix={<UserOutlined style={{ marginRight: 5 }} />}
                placeholder="Usuário"
              />
            </Item>

            <Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined style={{ marginRight: 5 }} />}
                placeholder="Senha"
                type="password"
              />
            </Item>

            <Item name="remember" valuePropName="checked" style={{ marginBottom: 5 }}>
              <Checkbox>Lembrar me</Checkbox>
            </Item>

            <Link to="forgot">
              Esqueci a senha
            </Link>

            <Item style={{ marginTop: 10 }}>
              <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>
                Entrar
              </Button>
              Or <Link to="register">register now!</Link>
            </Item>
          </Form>

        </Card>

      </Col>
    </Row>
  )

}

export default Login;
