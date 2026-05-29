import { createReducer, on, State } from "@ngrx/store";
import * as fileAction from './file-action'; 

export interface UploadState {
  loading: boolean;
  success: string | null;
  error: string | null;
}

export const initialState: UploadState = {
  loading: false,
  success: null,
  error: null
};

export const uploadReducer = createReducer(initialState,
    on(fileAction.uploadFile,state =>({
        ...state,
        loading:true,
        error:null
    })),

    on(fileAction.uploadFileSuccess,(state,{msg})=>({
        ...state,
        loading:false,
        success:msg,
        error:null
    })),
    on(fileAction.uploadFilefailure,(state,{error})=>({
        ...state,
        loading:false,
        error
    }))
)