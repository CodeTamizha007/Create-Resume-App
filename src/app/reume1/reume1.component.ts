import { Component } from '@angular/core';
import html2pdf from 'html2pdf.js';

interface Profile {
  name: string;
  phoneno: string;
  mailid: string;
  address: string;
  roles: Array<{ role: string, roleDescription: string }>;
  skill: string[];
  profileUrl: string;
  linkedinUrl: string;
  certifications: string[];
  awards: string[];
  experiences: Array<{ company: string, role: string, startDate: string, endDate: string, description: string }>;
  educationDetails: Array<{ institutionName: string, startYear: number, endYear: number, course: string, percentage: number }>;
  photoUrl: string | null;
}
@Component({
  selector: 'app-reume1',
  templateUrl: './reume1.component.html',
  styleUrls: ['./reume1.component.css']
})
export class Reume1Component {
  sakthiProfile: Profile = {
    name: "SAKTHIPRAKASH V",
    phoneno: "9080768571",
    mailid: "blessme1799@gmail.com",
    address: "244,BAJANAI KOVIL STREET\nthuvaranthal village of kuppam",
    roles: [
      { role: "zcv", roleDescription: "zcxv" },
      { role: "zxcv", roleDescription: "zvxc" }
    ],
    skill: ["zcxv", "zcvx", "zvcx"],
    profileUrl: "zxcvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
    linkedinUrl: "zxcvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
    certifications: ["zcxv"],
    awards: ["zcvx", "zxcv"],
    experiences: [
      {
        company: "zvxc",
        role: "zxccv",
        startDate: "2043-12-31T18:30:00.000Z",
        endDate: "2001-03-31T18:30:00.000Z",
        description: "xCX"
      }
    ],
    educationDetails: [
      { institutionName: "cvzx", startYear: 433, endYear: 433, course: "vxc", percentage: 34 },
      { institutionName: "x x", startYear: 4344, endYear: 444, course: "xcv", percentage: 4 }
    ],
    photoUrl: null
  };

  downloadPDF() {
    const element = document.getElementById('resume-content');
    const options = {
      filename: `${this.sakthiProfile.name}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  }
}
