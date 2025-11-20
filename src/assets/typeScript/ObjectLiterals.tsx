import React from "react";

interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

const ObjectLiterals = () => {
  const person: Person = {
    age: 38,
    firstName: "Roger",
    lastName: "Urbano",
    address: {
      country: "Canada",
      houseNo: "620",
      street: "",
    },
  };
  return (
    <>
      <div className="active">ObjectLiterals</div>
      <div>ObjectLiterals</div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

export default ObjectLiterals;
