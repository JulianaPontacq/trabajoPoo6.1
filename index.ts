import { ComputadoraBuilder } from "./ComputadoraBuilder";

const computadoraPersonalizada = new ComputadoraBuilder()
  .setProcesador("Intel Core i7")
  .setRam("16GB")
  .setAlmacenamiento("1TB SSD")
  .setTarjetaGrafica("NVIDIA RTX 3060")
  .setSistemaOperativo("Windows 11")
  .build();

computadoraPersonalizada.mostrarEspecificaciones(); // Aquí se ejecuta el console.log de Computadora.ts
