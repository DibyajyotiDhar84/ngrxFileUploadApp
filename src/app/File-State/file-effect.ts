import { inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as fileAction from './file-action'
import { catchError, map, mergeMap, of } from "rxjs";
import { FileService } from "../file-service";



@Injectable()
export class uploadEffect {
     action$ = inject(Actions);
     fileService = inject(FileService);
     upload$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(fileAction.uploadFile),
            mergeMap(({formdata})=>{
                debugger;
                formdata.forEach((value, key) => {
        console.log(`✅ Effect received -> ${key}:`, value);
    });
                
                return this.fileService.uploadFile(formdata).pipe(
                    map(res=>fileAction.uploadFileSuccess({msg:res.msg})),
                    catchError(err=>of(fileAction.uploadFilefailure({error:err})))
                )
            })
        );
    });
}