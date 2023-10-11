import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SupportService {

  public _usuario: |any; //todo aqui falta importar y crear la interface de tipo _usuario

  private baseUrl: string = "https://www.dikeninternational.com/angular_service/api/usuario/authUser.php";


  constructor(private http: HttpClient) { }



  GetLoginAuth(p_Username:string,p_Password:string)
{
  const url= "https://www.dikeninternational.com/angular_service/api/usuario/authUser.php";

  const body={p_Username,p_Password};

  return this.http.post<any>( url, body )
  .pipe(

    map(resp=>{
      resp.ok;
      this._usuario={
        id:resp.id,
        // Nombre:resp.Nombre,
        Usuario:resp.usuario,
        email:resp.email,
        message:resp.message,
        ok:resp.ok,
        // Departamento:resp.Departamento,
        // EsServicio:resp.EsServicio,
        // DepartamentoId:resp.DepartamentoId,
        // data:resp.data,
        // Imagen:resp.Imagen,
        // BigDataUsuarioId:resp.BigDataUsuarioId,
        // Apellidos:resp.Apellidos

      }
      localStorage.setItem('datalogin',JSON.stringify( this._usuario))
      return resp.ok;
    }),
    catchError( err => of(err.error.msg) )

  );
}





}
