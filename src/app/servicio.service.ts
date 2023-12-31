import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  {
    providedIn: 'root'
  })

export class ServicioService 
{
  
  private Url: string = 'https://inventariosback.onrender.com';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) 
  {
     let body = JSON.parse('' + res);
     return body || {};
   }
   private handleError<T>(operation = 'operation', result?: T) 
   { 
      return (error: any): Observable<T> => {
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T)

    };
   }

   
//#region Metodos catalogo

  // Método Listar de los Tipos de documentos 
  getCatalogos(): Observable<any>
  {

    return this.http.get(this.Url + "/catalogo" , httpOptions);
   
  }

  
  getListarCatalogoEsp(fil:any): Observable<any>
  {

    return this.http.get(this.Url + "/catalogo" + fil , httpOptions);
   
  }

  //-------------------------------------------------------------
 // Método mostrar un solo Tipo de documento  

  getCatalogo(id:any): Observable<any> {
  return this.http.get(this.Url + "/catalogo"+id , httpOptions);
}
  //-------------------------------------------------------------
 // Método para insertar un nuevo Tipo de documento 

 async insertCatalogo(CatalogoD:any): Promise<any> {
  
  return new Promise((resolve, reject) => {
    this.http.post(this.Url + "/catalogo", CatalogoD, httpOptions).toPromise()
  });
}

  //-------------------------------------------------------------
 // Método para modificar un  Tipo de documento

 async updateCatalogo(cadena:any): Promise<any> {

  return new Promise((resolve, reject) => {
    this.http.put(this.Url + "/catalogo", cadena, httpOptions).toPromise()
  });
}
//#endregion

//#region METODOS CONTACTOS
  // Método Listar los contactos
  getContactos(): Observable<any>
  {

    return this.http.get(this.Url + "/contacto" , httpOptions);
   
  }

  getListarContactoEsp(fil:any): Observable<any>
  {

    return this.http.get(this.Url + "/contacto" + fil , httpOptions);
   
  }
  //-------------------------------------------------------------
 // Método mostrar un solo contacto

  getContacto(id:any): Observable<any> {
  return this.http.get(this.Url + "/contacto"+id , httpOptions);
}
  //-------------------------------------------------------------
 // Método para insertar un nuevo Contacto

 async insertContacto(ContactoD:any): Promise<any> {

  return new Promise((resolve, reject) => {
    this.http.post(this.Url + "/contacto", ContactoD, httpOptions).toPromise()
  });
}

  //-------------------------------------------------------------
 // Método para modificar un contacto

 async updateContacto(cadena:any): Promise<any> {

  return new Promise((resolve, reject) => {
    this.http.put(this.Url + "/contacto", cadena, httpOptions).toPromise()
  });
}
//#endregion

//#region METODOS PERSONAL
  // Método Listar los contactos
  getPersonals(): Observable<any>
  {

    return this.http.get(this.Url + "/personal" , httpOptions);
   
  }

  getListarPersonalEsp(fil:any): Observable<any>
  {

    return this.http.get(this.Url + "/personal" + fil , httpOptions);
   
  }
  //-------------------------------------------------------------
 // Método mostrar un solo contacto

  getPersonal(id:any): Observable<any> {
  return this.http.get(this.Url + "/personal"+id , httpOptions);
}
  //-------------------------------------------------------------
 // Método para insertar un nuevo Contacto

 async insertPersonal(PersonalD:any): Promise<any> {

  return new Promise((resolve, reject) => {
    this.http.post(this.Url + "/personal", PersonalD, httpOptions).toPromise()
  });
}

  //-------------------------------------------------------------
 // Método para modificar un contacto

 async updatePersonal(cadena:any): Promise<any> {

  return new Promise((resolve, reject) => {
    this.http.put(this.Url + "/personal", cadena, httpOptions).toPromise()
  });
}
//#endregion

//#region METODOS MATERIA PRIMA
  // Método Listar la Materia Prima
  getMateria_Primas(): Observable<any>
  {
    return this.http.get(this.Url + "/materia-prima" , httpOptions);
  }

  getListarMateriaprimaEsp(fil:any): Observable<any>
  {

    return this.http.get(this.Url + "/materia-prima" + fil , httpOptions);
   
  }
  //-------------------------------------------------------------
 // Método mostrar un solo Materia Prima

  getMateriaprima(id:any): Observable<any> {
  return this.http.get(this.Url + "/materia-prima"+id , httpOptions);
}
  //-------------------------------------------------------------
 // Método para insertar un nuevo Materia Prima

 async insertMateriaprima(MateriaPrimaD:any): Promise<any> {

  return new Promise((resolve, reject) => {
    this.http.post(this.Url + "/materia-prima", MateriaPrimaD, httpOptions).toPromise()
  });
}

 // -------------------------------------------------------------
 // Método para modificar un contacto

 async updateMateriaprima(cadena:any): Promise<any> {

  return new Promise((resolve, reject) => {
    this.http.put(this.Url + "/materia-prima", cadena, httpOptions).toPromise()
  });
}
//#endregion

//#region METODOS PRODUCCION
// Método Listar los contactos
getProduccions(): Observable<any>
{

  return this.http.get(this.Url + "/produccion" , httpOptions);
 
}

getListarProduccionEsp(fil:any): Observable<any>
{

  return this.http.get(this.Url + "/produccion" + fil , httpOptions);
 
}
//-------------------------------------------------------------
// Método mostrar un solo contacto

getProduccion(id:any): Observable<any> {
return this.http.get(this.Url + "/produccion"+id , httpOptions);
}
//-------------------------------------------------------------
// Método para insertar un nuevo Contacto

async insertProduccion(PersonalD:any): Promise<any> {

return new Promise((resolve, reject) => {
  this.http.post(this.Url + "/produccion", PersonalD, httpOptions).toPromise()
});
}

//-------------------------------------------------------------
// Método para modificar un contacto

async updateProduccion(cadena:any): Promise<any> {

return new Promise((resolve, reject) => {
  this.http.put(this.Url + "/produccion", cadena, httpOptions).toPromise()
});
}
//#endregion

//#region METODOS PRODUCTO
getProductos(): Observable<any>
{

  return this.http.get(this.Url + "/producto" , httpOptions);
 
}

getListarProductoEsp(fil:any): Observable<any>
{

  return this.http.get(this.Url + "/producto" + fil , httpOptions);
 
}
//-------------------------------------------------------------
// Método mostrar un solo Materia Prima

getProducto(id:any): Observable<any> {
return this.http.get(this.Url + "/producto"+id , httpOptions);
}
//-------------------------------------------------------------
// Método para insertar un nuevo Materia Prima

async insertProducto(ProductoD:any): Promise<any> {

return new Promise((resolve, reject) => {
  this.http.post(this.Url + "/producto", ProductoD, httpOptions).toPromise()
});
}

// -------------------------------------------------------------
// Método para modificar un contacto

async updateProducto(cadena:any): Promise<any> {

return new Promise((resolve, reject) => {
  this.http.put(this.Url + "/producto", cadena, httpOptions).toPromise()
});
}
//#endregion

//#region METODOS TABLA DE PASO
getTpasos(): Observable<any>
{

  return this.http.get(this.Url + "/producto-materia-prima" , httpOptions);
 
}

getListarTpasoEsp(fil:any): Observable<any>
{

  return this.http.get(this.Url + "/producto-materia-prima" + fil , httpOptions);
 
}
//-------------------------------------------------------------
// Método mostrar un solo Materia Prima

getTpaso(id:any): Observable<any> {
return this.http.get(this.Url + "/producto-materia-prima"+id , httpOptions);
}
//-------------------------------------------------------------
// Método para insertar un nuevo Materia Prima

async insertTpaso(ProductoD:any): Promise<any> {

return new Promise((resolve, reject) => {
  this.http.post(this.Url + "/producto-materia-prima", ProductoD, httpOptions).toPromise()
});
}

// -------------------------------------------------------------
// Método para modificar un contacto

async updateTpaso(cadena:any): Promise<any> {

return new Promise((resolve, reject) => {
  this.http.put(this.Url + "/producto-materia-prima", cadena, httpOptions).toPromise()
});
}
//#endregion
}