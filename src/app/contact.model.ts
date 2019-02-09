export  class ContactModel {

  constructor(private  name: string, private email: string, private phone: string, private address: string) {

  }


getName(): string {
return this.name;
}

  getEmal(): string {
    return this.email;
  }
  getPhone(): string {
    return this.phone;
  }
  getAddres(): string {
    return this.address;
  }
}


