import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-landing-dash',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing-dash.html',
  styleUrl: './landing-dash.css',
})
export class LandingDash {
  fileForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.fileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      files: this.fb.array([]),
    });
  }

  get files(): FormArray {
    return this.fileForm.get('files') as FormArray;
  }

  addFiles() {
    this.files.push(
      this.fb.group({
        file: [null, [Validators.required]],
        fileName: ['', [Validators.required]],
      }),
    );
  }

  removeFile(index: number) {
    this.files.removeAt(index);
  }
  onFileChange(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.files.at(index).patchValue({
        file: file,
        fileName: file.name,
      });
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('name', this.fileForm.value.name);
    formData.append('email', this.fileForm.value.email);
    this.files.value.forEach((item: any) => {
      formData.append('file', item.file);
    });

    //store action dispatch--->>
  }
}
