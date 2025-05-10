import { Computadora } from "./computadora";

export class ComputadoraBuilder {
  procesador?: string;
  ram?: string;
  almacenamiento?: string;
  tarjetaGrafica?: string;
  sistemaOperativo?: string;

  setProcesador(procesador: string): ComputadoraBuilder {
    this.procesador = procesador;
    return this;
  }

  setRam(ram: string): ComputadoraBuilder {
    this.ram = ram;
    return this;
  }

  setAlmacenamiento(almacenamiento: string): ComputadoraBuilder {
    this.almacenamiento = almacenamiento;
    return this;
  }

  setTarjetaGrafica(tarjetaGrafica: string): ComputadoraBuilder {
    this.tarjetaGrafica = tarjetaGrafica;
    return this;
  }

  setSistemaOperativo(sistemaOperativo: string): ComputadoraBuilder {
    this.sistemaOperativo = sistemaOperativo;
    return this;
  }

  build(): Computadora {
    return new Computadora(this);
  }
}

 