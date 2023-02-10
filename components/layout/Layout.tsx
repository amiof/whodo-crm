import Link from "next/link";
import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex flex-col  h-screen">
      <header className=" w-full p-5 max-w-5xl mx-auto flex justify-between">
        <h2 className="text-green-500 font-bold ">wodo-crm</h2>
        <button className="text-black bg-green-500 rounded-md px-2 py-3 font-bold" type="button">
          <Link href="/add-coustomer">add coutomer</Link>
        </button>
      </header>
      <div className="min-h-full w-full">{children}</div>
      <footer className="text-black bg-green-500 p-3 text-center font-bold mt-auto">
        <p>the nextjs coures | nextjs crm </p>
      </footer>
    </div>
  );
};

export default Layout;
