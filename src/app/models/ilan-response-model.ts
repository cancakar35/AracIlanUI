import { AracDetail } from "./arac-detail";
import { IlanDetail } from "./ilan-detail";

export interface IlanResponseModel {
    ilan:IlanDetail;
    arac:AracDetail;
    resimler:string[]
}
