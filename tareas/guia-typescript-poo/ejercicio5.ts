abstract class Persona {
  protected nombre: string;
  protected apellido: string;
  protected direccion: string;
  protected telefono: number;
  protected edad: number;
  constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }
  esMayorDeEdad(): void {
    if (this.edad >= 18) console.log(`${this.nombre} es mayor de edad.`);
    else {
      console.log(`${this.nombre} es menor de edad.`);
    }
  }
  abstract mostrarDatosPersonales(): void;
}

class Empleado extends Persona {
  private sueldo: number = 0; // Asignación de un valor por defecto

  cargarSueldo(sueldoParam: number): void {
    this.sueldo = sueldoParam;
  }
  imprimirSueldo(): void {
    console.log(this.sueldo);
  }
  // Implementamos el método abstracto 'mostrarDatosPersonales'
  mostrarDatosPersonales(): void {
    console.log(
      `Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`
    );
  }
}

const juanLopez = new Empleado(
  "Juan",
  "Lopez",
  "Colonia las colinas, casa 10-A, Santa Tecla",
  12139032,
  32
);
juanLopez.cargarSueldo(341);
juanLopez.imprimirSueldo();
juanLopez.mostrarDatosPersonales();
