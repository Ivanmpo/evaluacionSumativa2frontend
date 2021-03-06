export interface ListaProductos {
  productos: Producto[];
}

export interface Producto {
  id?: number;
  nombre?: string;
  descripcion?: string;
  precio?: number | string;
  cantidad?: number ;
  img?: string;
}