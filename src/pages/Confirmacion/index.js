import React, { useState, Suspense } from "react";
import { Result} from 'antd';
import { useSelector } from "react-redux";

import { TitlePage } from "../../TitlePage";

export default function Confirmacion() {

    // Obtengo el valor de la suscripcion
    const plan = useSelector(
        state => state.suscripcion.suscripcion
      );

    return (<>
        <TitlePage title="Bienvenido!!!" />
        <Result
            status="success"
            title="Bienvenido!!!"
        />
        <div>Has adquirido el,</div>
        <div className="titulo_plan_conf">Plan {plan.name}</div>
        <div className="costo_plan_conf">S./ {plan.costo} al mes</div>

        <div className="info-result">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed ut perspiciatis unde omnis iste natus error sit voluptatem. Lorem ipsum dolor sit amet, consetetur.</div>

        <a className="link_result">Ir a ver mi plan</a>
    </>);
    
}