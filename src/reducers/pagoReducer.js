const initialProps = {
    datospago : []
  };
  
  export default function(state = initialProps, action) {
    switch (action.type) {
      case "DATOS_PAGO_SUSCRIPCION":
        return {
          datospago:  action.payload
        };
      default:
        return state;
    }
  }