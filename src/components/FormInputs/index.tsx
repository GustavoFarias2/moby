import React from "react";

import {
  Row,
  Col,
  Form,
  Input
} from "antd";

import { Rule } from "antd/lib/form";

const { Item } = Form;

export type FormInputsType = Array<Array<{
  name: string,
  label: string,
  placeholder: string,
  required: boolean,
  rules?: Rule[],
  size?: number,
  type: string,
  textAreaRows?: number
}>>

export interface FormInputsProps {
  name: string,
  inputs: FormInputsType,
  onFinish: (any: any) => void
}

const FormInputs: React.FC<FormInputsProps> = ({
  name,
  inputs,
  onFinish,
  children
}) => (

    <Form
      name={name}
      layout="vertical"
      onFinish={onFinish}
    >

      {inputs.map((formGroup, i) => (

        <Row key={"row" + i}>

          {formGroup.map((input) => (

            <Col
              xs={24}
              md={
                input.size ? input.size : (
                  formGroup.length < 2 ? 12 : (24 / formGroup.length)
                )
              }
              key={input.name}
              style={{ paddingRight: 5, paddingLeft: 5 }}
            >
              <Item
                name={input.name}
                required={input.required}
                label={input.label}
                rules={input.rules}
              >
                {
                  input.type === "textarea" ?
                    <Input.TextArea placeholder={input.placeholder} rows={input.textAreaRows} /> :
                    <Input placeholder={input.placeholder} type={input.type} />
                }
              </Item>
            </Col>

          ))}

        </Row>

      ))}

      <div style={{ marginTop: 20}}>
        {children}
      </div>

    </Form>
  )

export default FormInputs;
