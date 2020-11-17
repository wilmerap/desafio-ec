const initialProps = {
    suscripcion: [{name: "Estándard", costo: 29.00}]
  };
  
  export default function(state = initialProps, action) {
    switch (action.type) {
      case "SELECT_SUSCRIPCION":
        return {
          suscripcion:  action.payload
        };
      default:
        return state;
    }
  }