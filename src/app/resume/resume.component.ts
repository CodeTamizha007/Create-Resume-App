
import { Component } from '@angular/core';
import html2pdf from 'html2pdf.js';
import { Profile } from '../templete.interface';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  photo: any;
  //profile:Profile;
  constructor(private service:ServiceService){
     
     const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
      this.photo = savedPhoto;
    }
    //this.profile=this.service.profile
     

  };

  profile: Profile= {
    role:"Angular Developer",
    description:`Experienced Angular Developer with 2.7 years of experience in developing and maintaining dynamic 
        high-performance web applications. Proficient in Angular, HTML5, CSS3, JavaScript, TypeScript,
        Node.js, Express.js, and MongoDB.`,
    name: "SAKTHIPRAKASH V",
    phoneno: "9080768571",
    mailid: "blessme1799@gmail.com",
    address: "244,BAJANAI KOVIL STREET\nthuvaranthal village of kuppam",
    roles: [
      {
        role: "Angular Developer",
        roleDescription: `Experienced Angular Developer with 2.7 years of experience in developing and maintaining dynamic 
        high-performance web applications. Proficient in Angular, HTML5, CSS3, JavaScript, TypeScript,
        Node.js, Express.js, and MongoDB.`
      },
      {
        role: "Angular Developer",
        roleDescription: `Experienced Angular Developer with 2.7 years of experience in developing and maintaining dynamic 
        high-performance web applications. Proficient in Angular, HTML5, CSS3, JavaScript, TypeScript,
        Node.js, Express.js, and MongoDB.`
      },{
        role: "Angular Developer",
        roleDescription: `Experienced Angular Developer with 2.7 years of experience in developing and maintaining dynamic 
        high-performance web applications. Proficient in Angular, HTML5, CSS3, JavaScript, TypeScript,
        Node.js, Express.js, and MongoDB.`
      }
    ],
    skill: [
      "zcxv",
      "zcvx",
      "zvcx"
    ],
    profileUrl: "zxcvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
    linkedinUrl: "zxcvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
    certifications: [
      "zxcv",
      "zxcv",
      "zxcv",
      "zxcv",
      "zcxv",
    ],
    awards: [
      "zcvx",
      "zxcv",
      "zxcv",
      "zxcv",
      "zxcv",
    ],
    experiences: [
      {
        company: "zvxc",
        role: "zxccv",
        startDate: "2043-12-31T18:30:00.000Z",
        endDate: "2001-03-31T18:30:00.000Z",
        description: `Experienced Angular Developer with 2.7 years of experience in developing and maintaining dynamic 
        high-performance web applications. Proficient in Angular, HTML5, CSS3, JavaScript, TypeScript,
        Node.js, Express.js, and MongoDB.`
      },
      {
        company: "zvxc",
        role: "zxccv",
        startDate: "2043-12-31T18:30:00.000Z",
        endDate: "2001-03-31T18:30:00.000Z",
        description: `Experienced Angular Developer with 2.7 years of experience in developing and maintaining dynamic 
        high-performance web applications. Proficient in Angular, HTML5, CSS3, JavaScript, TypeScript,
        Node.js, Express.js, and MongoDB.`
      }
    ],
    educationDetails: [
      {
        institutionName: "cvzx",
        startDate: "2043-12-31T18:30:00.000Z",
        endDate: "2043-12-31T18:30:00.000Z",
        course: "vxc",
        percentage: 34
      },
      {
        institutionName: "x x",
        startDate: "2043-12-31T18:30:00.000Z",
        endDate: "2043-12-31T18:30:00.000Z",
        course: "xcv",
        percentage: 4
      }
    ],
    photoUrl: null // Example value, can be string, ArrayBuffer, or null
  };

  downloadPDF() {
    const element = document.getElementById('resume-content');
    const options = {
      filename: `${this.profile.name}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  }
  
  

  
}

