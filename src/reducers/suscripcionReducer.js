const initialProps = {
    suscripcion: []
  };
  
  export default function(state = initialProps, action) {
    switch (action.type) {
      case "SELECT_SUSCRIPCION":
        return {
          ...state,
          suscripcion: [...state.suscripcion, action.payload]
        };
      default:
        return state;
    }
  }