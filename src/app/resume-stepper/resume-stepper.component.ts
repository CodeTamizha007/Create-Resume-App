import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import html2pdf from 'html2pdf.js';



export interface Experience {
  company: string;
  role: string;
  startDate: Date | null;
  endDate: Date | null;
  description: string;
}
@Component({
  selector: 'app-resume-stepper',
  templateUrl: './resume-stepper.component.html',
  styleUrls: ['./resume-stepper.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class ResumeStepperComponent {
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef,private service:ServiceService) {this.loadPhoto();}
  pdf(){
  let detObj={...this.details,...this.role,...this.skills,...this.photoUrls,...this.certifications,...this.experience}
   console.log(detObj);
   
  this.downloadResume()
   console.log(this.experience.value);
   
  } 
   downloadResume() {
    const element = document.getElementById('resumeContent');
    const options = {
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
   
    html2pdf().from(element).set(options).save();
  }
  details = this.fb.group({
    name: ['', Validators.required],
    phoneno: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    mailid: ["", [Validators.required, Validators.email]],
    address: [""],
  });

  role = this.fb.group({
    role: ["", Validators.required],
    roleDescription: ["", Validators.required],
  });

  skills = this.fb.group({
    skill: this.fb.array([]),
  });

  certifications = this.fb.group({
    certifications: this.fb.array([]),
    awards: this.fb.array([]),
  });

  experience = this.fb.group({
    experiences: this.fb.array([] as Experience[]),
  });
  

  
    education = this.fb.group({
      educationDetails: this.fb.array([]),
    });
  
    get eduArr() {
      return this.education.get('educationDetails') as FormArray;
    }
  
    addEducation() {
      this.eduArr.push(
        this.fb.group({
          institutionName: ['', Validators.required],
          startYear: [null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
          endYear: [null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
          course: ['', Validators.required],
          percentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
        })
      );
    }
  
    removeEducation(index: number) {
      this.eduArr.removeAt(index);
    }
  
 
  exp:(Experience | null)[]  | undefined=this.experience.value.experiences
  
 photoUrls = this.fb.group({
    profileUrl: [''],
    linkedinUrl: [''],
    otherUrl: [''],
  });
  selectedFile: File | null = null;
  photoUrl: string | ArrayBuffer | null = null;
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photoUrl = e.target.result;
        this.savePhoto(this.photoUrl);
      };
      reader.readAsDataURL(file);
    }
  }

  savePhoto(photo: string | ArrayBuffer | null): void {
    if (photo) {
      localStorage.setItem('profilePhoto', photo as string);
    }
  }

  loadPhoto(): void {
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
      this.photoUrl = savedPhoto;
    }
  }

  get skillArr() {
    return this.skills.get('skill') as FormArray;
  }

  get certArr() {
    return this.certifications.get('certifications') as FormArray;
  }

  get awardArr() {
    return this.certifications.get('awards') as FormArray;
  }

  get expArr() {
    return this.experience.get('experiences') as FormArray;
  }

  addSkill() {
    this.skillArr.push(this.fb.control(''));
  }

  removeSkills(index: number) {
    this.skillArr.removeAt(index);
  }

  addCertification() {
    this.certArr.push(this.fb.control(''));
  }

  removeCertification(index: number) {
    this.certArr.removeAt(index);
  }

  addAward() {
    this.awardArr.push(this.fb.control(''));
  }

  removeAward(index: number) {
    this.awardArr.removeAt(index);
  }

  addExperience() {
    this.expArr.push(
      this.fb.group({
        company: [''],
        role: [''],
        startDate: [null],
        endDate: [null],
        description: [''],
      })
    );
  }

  removeExperience(index: number) {
    this.expArr.removeAt(index);
  }
}


