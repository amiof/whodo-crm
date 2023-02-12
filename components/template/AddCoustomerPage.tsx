import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import Form from "../module/Form";

const AddCoustomerPage = (): ReactElement => {
  const [form, setForm] = useState<object>({
    name: "",
    lastName: "",
    email: "",
    postcode: "",
    address: "",
    products: [],
  });
  type data = undefined | object;
  const router = useRouter();
  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      postalCode: "",
      address: "",
      products: [],
    });
    router.push("/");
  };
  const saveHandler = async () => {
    try {
      let Data;
      await axios.post("/api/coustomer", form).then((res) => {
        Data = res.data;
      });
      console.log(Data);

      // if (Data.status == "200") router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="ml-5">coustomer</h1>
      <Form></Form>
      <div className="flex justify-evenly ">
        <button
          onClick={cancelHandler}
          className="text-red-600 border-red-600 border px-2 py-1 hover:text-white"
        >
          cancel
        </button>
        <button
          onClick={saveHandler}
          className="text-green-600 border-green-600 border px-2 py-1 hover:text-white"
        >
          {" "}
          save
        </button>
      </div>
    </div>
  );
};

export default AddCoustomerPage;
