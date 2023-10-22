import Image from "next/image";
import React from 'react'
import SEO from "../components/SEO/SEO";
import Header from "../components/header/header";
import CustomButton from "../components/button/Button";
import { getYear } from "date-fns";
import { HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={"text-center font-sans "}>
      <SEO title="Welcome to Visor" description="Streamlining assessment for educators" />
      <Header />
      <main className="">
        <section className="flex flex-col items-center gap-3 md:flex-row md:justify-between 
        ">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl font-bold">
              Unlock Your Students Potential with <span className={'text-green-500'}>Visor</span>
            </h1>
            <p>
              Are you ready to supercharge the learning journey and assess your students/trainee with confidence? Look no further! Visor is here to revolutionize the way you prepare for assessments
            </p>
            <HStack className="my-2">
              <CustomButton text="Get started for free" variant="solid" />
              <CustomButton text="Create an assessment" variant="outline" />
            </HStack>
          </div>
          <Image width={400} height={400} alt="schoolbag" src={'/landingpage/schoolbag.png'} quality={1} layout="responsive" />
        </section>
        <section className="border-t-2 my-4 pt-4 flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <h1 className="text-4xl">Why choose Visor?</h1>
          <div className="flex items-center">

            <div className="text-left">
              <h1>Hello Bros, look here</h1>
            </div>
            <Image width={400} height={400} alt="schoolbag" src={'/landingpage/rocket.png'} quality={1} layout="responsive" />
          </div>
        </section>
      </main>

      <footer className={" p-2 text-sm flex justify-between unset border-t-2"}>
        <p>Copyright &copy; Visor {getYear(new Date())}</p>
        <HStack>
          <p>Privacy Policy</p>
          <p>Terms and Condition </p>
        </HStack>
      </footer>
    </div>
  );
}
