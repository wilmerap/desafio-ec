import React, { useState } from 'react';
import { Row, Col, Card, Form, Input, Button, Drawer } from 'antd';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Datos(props) {

    const [form] = Form.useForm();
    const history = useHistory();
    const [valcvc, setValcvc] = useState();
    const [nombre, setNombre] = useState();
    const [TDD, setTDD] = useState();
    const [fVenc, setFvenc] = useState();
    const [CVV, setCVV] = useState();
    const [errorFecha, setErrorFecha] = useState("");
    const [errorTDC, setErrorTDC] = useState("");
    const [errorCVV, setErrorCVV] = useState("");

    // Obtengo el valor de la suscripcion
    const plan = useSelector(
        state => state.suscripcion.suscripcion
      );

    // Validacion de FOrmulario

    const onChangeNombre = (e) => {
        const value = e.target.value;
        setNombre(value);
    }

    const onChangeNumberTDC = (e) => {
        setErrorTDC("");
        setTDD();
        const value = e.target.value;
        
        // Valido Tarjetas de Credito o Debito Visa o MasterCard
        if ( !value.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/) && !value.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)) {
            setErrorTDC("error");
        } else {
            setErrorTDC("success");
            setTDD(value);
        }

    }
    const onChangeFecha = (e) => {
        setErrorFecha("");
        setFvenc();
        const value = e.target.value;

        // Valido Fecha de Caducidad
        if ( !value.match(/^\d{2}\/\d{2}$/) ) {
            setErrorFecha("error");
        } else {
            setErrorFecha("success");
            setFvenc(value);
        }

      };

      const onChangeCVV = (e) => {
        setErrorCVV("");
        setCVV();
        const value = e.target.value;

        // Valido Codigo CVV
        if ( !value.match(/^[0-9]{3,3}$/) ) {
            setErrorCVV("error");
        } else {
            setErrorCVV("success");
            setCVV(value);
        }

        
      }

      // Guardo y envio formulario
      const guardarCambios = (values) => {
          const valuesForm = {
              NOMBRE: nombre,
              TDD: TDD,
              FVENC: fVenc,
              CVV: CVV
          };

          if( nombre && TDD && fVenc && CVV) {
            console.log(valuesForm);
            history.push("/confirmacion");
          }

          
      }

    return (
    <>
    <Card bordered={false} style={{ width: 300, top: 20}}>
      <Form
        
        layout={"vertical"}
        form={form}
        className="ant-advanced-search-form"
        initialValues={{
            cvc: valcvc,
          }}
        scrollToFirstError
      >

        <Form.Item
            name="nombre_apellidos"
            label="Nombre y Apellidos"
            rules={[
            {
                required: true,
                message: "El nombre y apellidos es obligatorio",
            },
            ]}
        >
        <Input
            onChange={onChangeNombre}
            style={{ textTransform: "uppercase" }}
        />
        </Form.Item>
        <Form.Item
            name="numero_tarjeta"
            label="Número de tarjeta"
            rules={[
            {
                required: true,
                message: "El numero de tarjeta es obligatorio",
            },
            ]}
            hasFeedback
            validateStatus={errorTDC}
        >
        <Input 
            placeholder=".... .... .... ...." 
            suffix="CARD"
            onChange={onChangeNumberTDC} 
        />
        </Form.Item>
        <Row>
            <Col span={11}>
                <Form.Item
                    name="f_expira"
                    label="F. Expira"
                    rules={[
                    {
                        required: true,
                        message: "La fecha expira es obligatoria"
                    },
                    ]}
                    hasFeedback
                    validateStatus={errorFecha}
                >
                <Input
                    placeholder="MM/AA"
                    maxLength={5}
                    onChange={onChangeFecha}
                 />
                </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
                <Form.Item
                    name="cvc"
                    label="CVC"
                    rules={[
                    {
                        required: true,
                        message: "El numero cvc es obligatorio",
                    },
                    ]}
                    hasFeedback
                    validateStatus={errorCVV}
                >
                <Input
                    maxLength={3}
                    onChange={onChangeCVV}
                />
                </Form.Item>
            </Col>
        </Row>
        <Button type="dashed" block onClick={guardarCambios}>Pagar S/ {plan.costo}</Button>
      </Form>
    </Card>
    </>);
    
}