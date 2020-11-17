import React, { useState, Suspense } from "react";
import { Result} from 'antd';
import { useSelector } from "react-redux";

export default function Confirmacion(props) {


    // Obtengo el valor de la suscripcion
    const plan = useSelector(
        state => state.suscripcion.suscripcion
      );

    return (<>
        <Result
            status="success"
            title="Bienvenido!!!"
        />
        <div>Has adquirido el,</div>
        <div className="titulo_plan_conf">Plan {plan.name}</div>
        <div className="costo_plan_conf">S./ {plan.costo} al mes</div>

        <div className="info-result">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed ut perspiciatis unde omnis iste natus error sit voluptatem. Lorem ipsum dolor sit amet, consetetur.</div>

    </>);
    
}