// Define the structure for a single role
export interface Role {
    role: string;
    roleDescription: string;
  }
  
  // Define the structure for experience
  export interface Experience {
    company: string;
    role: string;
    startDate: string; // ISO date string
    endDate: string;   // ISO date string
    description: string;
  }
  
  // Define the structure for education details
  export interface EducationDetail {
    institutionName: string;
    startDate: string;
    endDate: string;
    course: string;
    percentage: number;
  }
  
  // Define the structure for the main profile
  export interface Profile {
    name: string;
    phoneno: string;
    mailid: string;
    address: string;
    roles: Role[];
    skill: string[];
    profileUrl: string;
    linkedinUrl: string;
    certifications: string[];
    awards: string[];
    experiences: Experience[];
    educationDetails: EducationDetail[];
    photoUrl: string | ArrayBuffer | null; // Optional photoUrl property
    role:string
    description:string
  }
  
  // Example usage with the provided data
 
  