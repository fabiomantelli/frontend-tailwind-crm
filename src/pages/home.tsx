import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Inter } from "next/font/google";
import api from "./api/api";

import ContactTable from "@/components/ContactTable";

import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

interface ContactProps {
  firstname: string;
  lastname: string;
  zip: string;
  phone_mobile: string;
  mail: string;
}

export default function Home() {
  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      api.defaults.headers.common["DOLAPIKEY"] = token;
      router.push("/");
    }
  }, []);

  const handleContacts = async () => {
    try {
      const token = localStorage.getItem("token");
      api.defaults.headers.common["DOLAPIKEY"] = token;

      const { data } = await api.get<ContactProps[]>("/contacts", {
        headers: {
          DOLAPIKEY: token,
        },
        params: {
          limit: 10,
        },
      });

      setContacts(data);

      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar toggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <main>
        <div>
          <h1>Welcome, Z36!</h1>
        </div>
        <button
          className="w-96 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={handleContacts}
        >
          Contacts
        </button>

        <ContactTable contacts={contacts} />
      </main>
    </>
  );
}
