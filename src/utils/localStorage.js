export const getStateLocalStoraga = () => {
    const suscripcionStorage = localStorage.getItem("suscripcion");
    if (suscripcionStorage === null) return undefined;
    return JSON.parse(suscripcionStorage);
  };
  
  export const setStateLocalStorage = state => {
    localStorage.setItem("suscripcion", JSON.stringify(state));
  };