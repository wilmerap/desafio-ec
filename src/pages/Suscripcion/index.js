import React, { useState, Suspense } from "react";
import { Button, Switch, Card, Divider } from 'antd';
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

// Redux
import { selectSuscripcionAction } from "../../actions/suscripcionActions";

export default function Suscripcion() {

    // Inicializacion del dispach y ejecucion de las acciones.
    const dispatch = useDispatch();
    const Suscripcion = state => dispatch(selectSuscripcionAction(state));


    const selectPlan = (checked) => {
      
      if ( !checked ) {
        Suscripcion({name: "Premium", costo: 59.00});
      } else {
        Suscripcion({name: "Estándard", costo: 29.00});
      }

    }

    // Obtengo el valor de la suscripcion
    const costo = useSelector(
      state => state.suscripcion.suscripcion.costo
    );

    return (<>
    <div><b>Plan de Suscripción</b></div>
    <Switch className="switch_sus" checkedChildren="Estándar" unCheckedChildren="Premium" defaultChecked={1} onChange={selectPlan} />

    <div className="site-card-border-less-wrapper">
    <Card bordered={false} style={{ width: 300 }}>
    <div className="costo-total"><span className="costo-s">S/</span> <span className="costo-sus">{costo}</span> / AL MES</div>
        <p className="text-sus">Loren ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
    <Divider dashed />
      <ul className="lista-opciones">

        <li> Loren ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</li>
        <li> Loren ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</li>
        <li> Loren ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</li>
        <li> Loren ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</li>

      </ul>
    </Card>
    <Link
        to={"/datos"}
    >
    <Button type="dashed" block>
      Suscribirme
    </Button>
    </Link>
    </div>

    </>);
    
}