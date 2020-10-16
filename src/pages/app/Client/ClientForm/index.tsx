import React from "react";

import { Button } from "antd";

import FormInputs, { FormInputsType } from "../../../../components/FormInputs";
import MainCard from "../../../../components/MainCard";

const ClientForm: React.FC = () => {

  const formInputs: FormInputsType = [
    [
      {
        name: "name",
        required: true,
        rules: [{ required: true, message: "Insira o nome do cliente por favor" }],
        label: "Nome",
        placeholder: "Nome",
        type: "text"
      }
    ],
    [
      { name: "email", required: false, label: "Email", placeholder: "Email do Cliente", type: "email" },
      { name: "phone", required: false, label: "Telefone", placeholder: "Telefone do Cliente", type: "text", size: 4 },
      { name: "cellphone", required: false, label: "Celular", placeholder: "Celular do Cliente", type: "password", size: 4 }
    ],
    [
      { name: "email", required: false, label: "Email", placeholder: "Email do Cliente", type: "email" },
      { name: "phone", required: false, label: "Telefone", placeholder: "Telefone do Cliente", type: "text", size: 4 },
      { name: "cellphone", required: false, label: "Celular", placeholder: "Celular do Cliente", type: "password", size: 4 }
    ],
    [
      { name: "email", required: false, label: "Email", placeholder: "Email do Cliente", type: "email" },
      { name: "phone", required: false, label: "Telefone", placeholder: "Telefone do Cliente", type: "text", size: 4 },
      { name: "cellphone", required: false, label: "Celular", placeholder: "Celular do Cliente", type: "password", size: 4 }
    ],
    [
      { name: "email", required: false, label: "Email", placeholder: "Email do Cliente", type: "email" },
      { name: "phone", required: false, label: "Telefone", placeholder: "Telefone do Cliente", type: "text", size: 4 },
      { name: "cellphone", required: false, label: "Celular", placeholder: "Celular do Cliente", type: "password", size: 4 }
    ],
    [
      { name: "email", required: false, label: "Email", placeholder: "Email do Cliente", type: "email" },
      { name: "phone", required: false, label: "Telefone", placeholder: "Telefone do Cliente", type: "text", size: 4 },
      { name: "cellphone", required: false, label: "Celular", placeholder: "Celular do Cliente", type: "password", size: 4 }
    ],
    [
      { name: "email", required: false, label: "Email", placeholder: "Email do Cliente", type: "email" },
      { name: "phone", required: false, label: "Telefone", placeholder: "Telefone do Cliente", type: "text", size: 4 },
      { name: "cellphone", required: false, label: "Celular", placeholder: "Celular do Cliente", type: "password", size: 4 }
    ],
    [
      { name: "email", required: false, label: "Email", placeholder: "Email do Cliente", type: "email" },
      { name: "phone", required: false, label: "Telefone", placeholder: "Telefone do Cliente", type: "text", size: 4 },
      { name: "cellphone", required: false, label: "Celular", placeholder: "Celular do Cliente", type: "password", size: 4 }
    ],
    [
      { name: "email", required: false, label: "Email", placeholder: "Email do Cliente", type: "email" },
      { name: "phone", required: false, label: "Telefone", placeholder: "Telefone do Cliente", type: "text", size: 4 },
      { name: "cellphone", required: false, label: "Celular", placeholder: "Celular do Cliente", type: "password", size: 4 }
    ],
    [
      { name: "observation", required: false, label: "Observações", placeholder: "Observações adicionais", type: "textarea", size: 24, textAreaRows: 4 }
    ]
  ]

  const handleSubmit = (v: any) => {
    console.log(v)
  }

  return (

    <MainCard
      title="Cadastrar Cliente"
      extraRoute="/client"
      extraSpan="Voltar"
    >

      <FormInputs
        name="client_form"
        inputs={formInputs}
        onFinish={handleSubmit}
      >

        <Button
          htmlType="submit"
          style={{
            position: "absolute",
            right: 15,
            bottom: 15,
          }}
        >
          Cadastrar
        </Button>

      </FormInputs>

    </MainCard>

  )

}

export default ClientForm;

