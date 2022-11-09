class Student {
    givenName: string = "";
    familyName: string = "";
    birthDate: Date = new Date();
   
    constructor();
    constructor(familyName: string, givenName: string);
    constructor(familyName: string, givenName: string, birthDate: Date);
   
    constructor(familyName?: string, givenName?: string, birthDate?: Date) {
      if (givenName != null) {
        this.givenName = givenName;
      }
      if (familyName != null) {
        this.familyName = familyName;
      }
      if (birthDate != null) {
        this.birthDate = birthDate;
      }
    }
    getFullName(): string {
        if(!this.givenName || !this.familyName){
            throw new Error("Student\'s given and/or family name is not set.");
        }            
        return this.familyName + ' ' + this.givenName;
    }
    
