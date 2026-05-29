import {createAction, props} from '@ngrx/store';


export const uploadFile = createAction(
    '[Upload] file upload' ,
    props<{formdata:FormData}>()
);

export const uploadFileSuccess=createAction(
    '[Upload] file upload success',
    props<{msg:string}>()
);

export const uploadFilefailure=createAction(
    '[Upload] file upload failure',
    props<{error:string}>()
)