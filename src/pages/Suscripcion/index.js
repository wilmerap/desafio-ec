import React, { useState, Suspense } from "react";
import { Button, Switch, Card, Divider } from 'antd';
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";


export default function Suscripcion(props) {

    return (<>
    <div><b>Plan de Suscripción</b></div>
    <Switch className="switch_sus" checkedChildren="Estándar" unCheckedChildren="Premium" defaultChecked={1} onChange={() => {alert('cambio')}} />

    <div className="site-card-border-less-wrapper">
    <Card bordered={false} style={{ width: 300 }}>
        <div className="costo-total"><span className="costo-s">S/</span> <span className="costo-sus">59</span> / AL MES</div>
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