

const obj = {
    edad: null,
    nombre: "Andres Gelvez Suarez",
    saludar: function (){
        return `Hola Como ${this.nombre} como estas`;
    },
};
obj.apellido = null;
const inst = Object.create(obj);
inst.nombre = "Juan";
inst.setNombre = function (){ obj.nombre = inst.nombre };
inst.getNombre = function (){ return obj.nombre; };
console.log(obj);
console.log(inst);
console.log(inst.saludar());





// const data = {
//     nombre: "Andres Gelvez Suarez"
// };
// console.log(obj);
// let ejecutar = obj.saludar.bind(data);
// ejecutar();
// console.log(ejecutar());
// data.nombre = "Pedro Gelvez";
// console.log(ejecutar());