import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "CTO at Medicos International",
};

export default function About() {
  return (
    <section className="m-auto flex pr-6 text-left flex-col mt-6 gap-8 flex-wrap max-w-[60%]">
      <h1 className="font-normal text-4xl   ">About Me</h1>
      <div className=" text-emerald-500  text-3xl flex justify-between">
        <p> Hey, I'm Vivek.</p>{" "}
        <section className="flex gap-2 mt-2 mr-10">

          <svg
            className="h-7 w-7 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#03A9F4"
              d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
            ></path>
          </svg>
          <svg
            className="h-7 w-7 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            ></path>
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            ></path>
          </svg>
          <svg
            className="h-7 w-7 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0288d1"
              d="M8.421 14h.052 0C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5 5.789 5 4 6.945 4 9.5 4 12 5.736 14 8.421 14zM4 17H13V43H4zM44 26.5c0-5.247-4.253-9.5-9.5-9.5-3.053 0-5.762 1.446-7.5 3.684V17h-9v26h9V28h0c0-2.209 1.791-4 4-4s4 1.791 4 4v15h9C44 43 44 27.955 44 26.5z"
            ></path>
          </svg>
          <svg
            className="h-8 w-8 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
        </section>
      </div>
      <img className="rounded-md" height={400} style={{height:'400px',objectFit:'cover'}} src="https://scontent.fmey1-1.fna.fbcdn.net/v/t39.30808-6/245103881_1230779857426799_76874542391346926_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=s_YUrfERfXsAX-rjuhL&_nc_oc=AQnuoTNgZAEnDFlkz6130y4sSVjbrCgxp57DuJC48d1ePB1De58OjxoY-z_yRDsnQ_o&_nc_ht=scontent.fmey1-1.fna&oh=00_AfCLgrOYeOndHHDPbL5jrezfDjdA8XyFM_PB33PfnUsgZw&oe=6428E049" alt="medicos"/>
      <div className="prose font-roboto text-2xl prose-neutral dark:prose-invert text-emerald-800 dark:text-emerald-600">
        <p>
          Chief Technology Officer (CTO) of Medicos International.Medicos
          International is a tech startup in the healthcare industry.
        </p>
        <br></br>

        <p>
          I love creative work. I believe creativity is what makes our lives
          better, which in turn contributes to spreading joy to others as well.
          I am highly passionate about coding and creative works such as content
          creation, writing, music, and many more.
        </p>
        <br></br>

        <p className="italic flex justify-center items-center text-2xl ">
          "If you really desire something from the heart, then the whole
          universe will work towards getting you that."
          <img className="rounded-xl" height={200} style={{height:'300px',margin:'30px',objectFit:'contain'}} src="https://scontent.fmey1-1.fna.fbcdn.net/v/t1.6435-9/80044280_2166122840363201_4312569755606188032_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Qzpt8LNX6aMAX_UzSbb&_nc_ht=scontent.fmey1-1.fna&oh=00_AfCWJEPZOUpCzQLlQaiyU8SPf3pXXWJscvMJ_E7kOUwOtQ&oe=644ACC64" alt="medicos"/>

        </p>
        <br />
        <p className="mb-8">
          Because of my interest and dedication in software development. I
          became the Chief Technology Officer at Medicos International. Our apps
          are serving{" "}
          <span className="font-bold underline">half a million users</span> now.
        </p>
        <p className="mb-8">
          I have also successfully conducted web development workshops. In that
          workshop, I have tutored more than{" "}
          <span className="font-bold underline">30 graduates</span> about Web
          development.
        </p>
        <p className="mb-8">
          Even though the journey is just in its beginning phase, I am grateful
          for everything.
        </p>
      </div>
    </section>
  );
}
