import { createFeatureSelector, createSelector, State } from '@ngrx/store'
export interface UploadState {
  loading: boolean;
  success: string | null;
  error: string | null;
}


export const selectUploadState = createFeatureSelector<UploadState>('filestore');

export const selectLoading = createSelector(
    selectUploadState,
    State=>State.loading
);

export const selectError = createSelector(
    selectUploadState,
    State=>State.error
)