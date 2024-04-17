"use client";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import icon from "./favicon.ico";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [cText1, setText1] = useState(
    " # Welcome to my React Markdown Previewer!"
  );

  function handlechange(e: any) {
    setText1(e.target.value);
  }
  const [cText2, setText2] = useState("## This is a sub-heading...");

  function handlechange2(e: any) {
    setText2(e.target.value);
  }
  const [cText3, setText3] = useState(
    "### And here's some other cool stuff:  "
  );

  function handlechange3(e: any) {
    setText3(e.target.value);
  }

  const [cText4, setText4] = useState(
    "Heres some code, `<div></div>`, between 2 backticks.  "
  );

  function handlechange4(e: any) {
    setText4(e.target.value);
  }
  const [cText5, setText5] = useState(
    "// this is multi-line code: function anotherExample(firstLine, lastLine){if (firstLine == '```' && lastLine == '```') { return multiLineCode;}"
  );

  function handlechange5(e: any) {
    setText5(e.target.value);
  }
  const [cText6, setText6] = useState(
    "You can also make text **bold**... whoa!  "
  );

  function handlechange6(e: any) {
    setText6(e.target.value);
  }
  const [cText7, setText7] = useState("Or _italic_.  ");

  function handlechange7(e: any) {
    setText7(e.target.value);
  }
  const [cText8, setText8] = useState("Or... wait for it... **_both!_**  ");

  function handlechange8(e: any) {
    setText8(e.target.value);
  }
  const [cText9, setText9] = useState(
    "And feel free to go crazy ~~crossing stuff out~~.  "
  );

  function handlechange9(e: any) {
    setText9(e.target.value);
  }
  const [cText10, setText10] = useState("##There's also ");

  function handlechange10(e: any) {
    setText10(e.target.value);
  }
  const [cText11, setText11] = useState("https://www.freecodecamp.org");

  function handlechange11(e: any) {
    setText11(e.target.value);
  }
  const [cText12, setText12] = useState("Wild Header ");

  function handlechange12(e: any) {
    setText12(e.target.value);
  }
  const [cText13, setText13] = useState("Wild Header ");

  function handlechange13(e: any) {
    setText13(e.target.value);
  }
  const [cText14, setText14] = useState("Wild Header ");

  function handlechange14(e: any) {
    setText14(e.target.value);
  }
  const [cText15, setText15] = useState("Your content can ");

  function handlechange15(e: any) {
    setText15(e.target.value);
  }

  const [cText16, setText16] = useState("Your content can ");

  function handlechange16(e: any) {
    setText16(e.target.value);
  }
  const [cText17, setText17] = useState("Your content can ");

  function handlechange17(e: any) {
    setText17(e.target.value);
  }
  const [cText18, setText18] = useState(" And of course there are lists.  ");

  function handlechange18(e: any) {
    setText18(e.target.value);
  }
  const [cText19, setText19] = useState("     Some are bulleted.  ");

  function handlechange19(e: any) {
    setText19(e.target.value);
  }
  const [cText20, setText20] = useState("And there are numbered lists too.  ");

  function handlechange20(e: any) {
    setText20(e.target.value);
  }
  const [cText21, setText21] = useState(". Use just 1s if you want!  ");

  function handlechange21(e: any) {
    setText21(e.target.value);
  }
  const [cText22, setText22] = useState(
    "https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
  );

  function handlechange22(e: any) {
    setText22(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#a8dadc]">
      <div className=" m-auto w-[40vw] h-[30vh] border-[0.1vh] border-black shadow-2xl">
        <div className=" w-[100%] h-[15%] bg-[#6DC2C5] p-[0.5vw] flex gap-[1vw] font-semibold">
          <Image src={icon} alt="icon" className=" w-[1vw] h-[2vh]"></Image>
          Editor
        </div>
        <div className=" bg-[#D3EDEE] h-[85%] overflow-auto p-[0.7vh]	">
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange}
          >
            {cText1}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange2}
          >
            {cText2}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange3}
          >
            {cText3}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange4}
          >
            {cText4}
          </textarea>
          <textarea className=" bg-transparent resize-none w-[100%]">
            ```
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange5}
          >
            {cText5}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange6}
          >
            {cText6}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange7}
          >
            {cText7}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange8}
          >
            {cText8}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange9}
          >
            {cText9}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange10}
          >
            {cText10}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange11}
          >
            {cText11}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange12}
          >
            {cText12}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange13}
          >
            {cText13}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange14}
          >
            {cText14}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange15}
          >
            {cText15}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange16}
          >
            {cText16}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange17}
          >
            {cText17}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange18}
          >
            {cText18}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange19}
          >
            {cText19}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange20}
          >
            {cText20}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange21}
          >
            {cText21}
          </textarea>
          <textarea
            className=" bg-transparent resize-none w-[100%]"
            onChange={handlechange22}
          >
            {cText22}
          </textarea>
        </div>
      </div>
      <br></br>
      <div className=" m-auto w-[50vw] h-[130vh] border-[0.1vh] border-black shadow-2xl">
        <div className=" w-[100%] h-[5%] bg-[#6DC2C5] p-[0.5vw] flex gap-[1vw] font-semibold">
          <Image src={icon} alt="icon" className=" w-[1vw] h-[2vh]"></Image>
          Previewer
        </div>
        <div className=" bg-[#D3EDEE] h-[95%] p-[2vh] overflow-auto">
          <p className=" font-bold text-[2vw]"> {cText1}</p>
          <hr className=" bg-black h-[0.3vh] w-[100%]"></hr>
          <br></br>
          <p className=" font-semibold text-[1.5vw]"> {cText2}</p>
          <hr className=" bg-black h-[0.2vh] w-[100%]"></hr>
          <br></br>
          <p className=" font-medium text-[1.3vw]"> {cText3}</p>
          <br></br>
          <p className=" text-[1.3vw]"> {cText4}</p> <br></br>
          <p className=" text-[1.3vw] bg-white"> {cText5}</p> <br></br>
          <p className=" text-[1.3vw] font-bold"> {cText6}</p> <br></br>
          <p className=" text-[1.3vw] italic"> {cText7}</p> <br></br>
          <p className=" text-[1.3vw] font-bold italic"> {cText8}</p> <br></br>
          <p
            className=" text-[1.3vw] "
            style={{ textDecoration: "line-through" }}
          >
            {cText9}
          </p>
          <br></br>
          <p className=" text-[1.3vw]"> {cText10}</p> <br></br>
          <Link href={cText11} className=" underline text-[blue]">
            Link
          </Link>
          <br></br>
          <table>
            <tr>
              <th className=" p-[1vw] border-[0.1vh] border-black">
                {cText12}
              </th>
              <th className=" p-[1vw] border-[0.1vh] border-black">
                {cText13}
              </th>
              <th className=" p-[1vw] border-[0.1vh] border-black">
                {cText14}
              </th>
            </tr>
            <tr>
              <td className=" p-[1vw] border-[0.1vh] border-black">
                {cText15}
              </td>
              <td className=" p-[1vw] border-[0.1vh] border-black">
                {cText16}
              </td>
              <td className=" p-[1vw] border-[0.1vh] border-black">
                {cText17}
              </td>
            </tr>
          </table>
          <br></br>
          <ul>
            <li>{cText18}</li>
            <li className=" list-disc">{cText19}</li>
          </ul>
          <br></br>
          <ol className=" list-decimal">
            <li>{cText20}</li>
            <li>{cText21}</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
