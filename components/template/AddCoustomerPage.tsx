import React, { ReactElement, ReactNode, useState } from "react";

const AddCoustomerPage = (): ReactElement => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    postcode: "",
    address: "",
    date: "",
    products: [],
  });
  return (
    <div className="max-w-5xl mx-auto">
      <h1>coustomer</h1>
      <div>AddCoustomerPage</div>
    </div>
  );
};

export default AddCoustomerPage;
