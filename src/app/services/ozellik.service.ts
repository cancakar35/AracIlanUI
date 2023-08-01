import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

export abstract class OzellikService<T> {
    base_api_url = environment.apiURL;
    constructor(private httpClient:HttpClient, private apiUrl:string) {
    }

    getAll() : Observable<T[]>{
        return this.httpClient.get<T[]>(this.base_api_url+this.apiUrl);
    }

    getById(id:number|string) : Observable<T>{
        return this.httpClient.get<T>(this.base_api_url+this.apiUrl+"/"+id)
    }
}