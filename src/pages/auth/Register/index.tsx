import React from 'react';

import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Card,
  Form,
  Typography,
  Input,
  Button
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined
} from '@ant-design/icons';

const { Title } = Typography;
const { Item } = Form;

const Register: React.FC = () => {

  return (
    <Row align="middle" justify="center" style={{ height: "100%", backgroundColor: "Background" }}>
      <Col sm={24} md={12}>

        <Card style={{ padding: "0 50px" }}>

          <Form
            name="register_form"
            initialValues={{ remember: true }}
            onFinish={(v) => console.log(v)}
          >

            <Title level={3} style={{ marginTop: 20, marginBottom: 30 }}>
              Criar uma conta!
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
              name="email"
              rules={[{ required: true, message: "Insira seu email para continuar" }]}
            >
              <Input prefix={<MailOutlined style={{ marginRight: 5 }} />}
                placeholder="Email"
                type="email"
              />
            </Item>

            <Item
              name="password"
              rules={[{ required: true, message: "Insira sua senha para continuar!" }]}
            >
              <Input
                prefix={<LockOutlined style={{ marginRight: 5 }} />}
                placeholder="Senha"
                type="password"
              />
            </Item>

            <Item
              name="password_confirmation"
              rules={[{ required: true, message: "Confirme sua senha para continuar!" }]}
            >
              <Input
                prefix={<LockOutlined style={{ marginRight: 5 }} />}
                placeholder="Senha"
                type="password"
              />
            </Item>

            <Item style={{ marginTop: 10 }}>
              <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>
                Criar!
              </Button>
              <Link to="login">Voltar</Link>
            </Item>
          </Form>

        </Card>

      </Col>
    </Row>
  )

}

export default Register;
