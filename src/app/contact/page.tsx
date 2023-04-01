import { Metadata } from "next";
import AnimationHeader from "../components/AnimationHeader";

export async function generateMetadata(): Promise<Metadata> {
 
  return {
    title: "Contact | Vivek Neupane",
    description:"Greetings! I am a highly skilled and experienced Developer, Programmer, and CTO, with a passion for creating innovative and cutting-edge technology solutions. With a deep understanding of the latest industry trends and a keen eye for detail, I am able to deliver elegant and efficient software solutions that meet the needs of my clients and exceed their expectations. As a natural leader and team player, I thrive in dynamic and fast-paced environments, and am able to guide my teams to success even in the face of the most challenging of obstacles. With a track record of delivering exceptional results and a commitment to staying ahead of the curve, I am confident that I have the skills and experience necessary to help drive your organization to new heights of success. So if you're looking for a cool, professional, and highly skilled Developer, Programmer, and CTO, look no further than me!",
    openGraph: {
      images: ['https://scontent.fmey1-1.fna.fbcdn.net/v/t39.30808-6/245103881_1230779857426799_76874542391346926_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=s_YUrfERfXsAX-rjuhL&_nc_oc=AQnuoTNgZAEnDFlkz6130y4sSVjbrCgxp57DuJC48d1ePB1De58OjxoY-z_yRDsnQ_o&_nc_ht=scontent.fmey1-1.fna&oh=00_AfCLgrOYeOndHHDPbL5jrezfDjdA8XyFM_PB33PfnUsgZw&oe=6428E049'],
    },
  };
}
export default function Contact() {
  return (
    <section className="m-auto flex items-center  sm:items-center md:items-center xl:items-start flex-col gap-8 flex-wrap">
<AnimationHeader title="Hire Me" />
      <div className="grid  mb-8 border border-emerald-500 rounded-lg shadow-sm dark:border-emerald-500 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-transparent border-b border-emerald-500 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r  dark:border-emerald-500">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <svg className="m-auto h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="gmail"><path fill="#ECEFF1" d="M2 2h12v12H2z"></path><path fill="#CFD8DC" d="M8 9.262 14 14V4.646z"></path><path fill="#F44336" d="M14.5 2H14L8 6.738 2 2h-.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2V4.646l6 4.615 6-4.616V14h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"></path></svg>
            <p className="my-4 text-emerald-900 dark:text-emerald-600">
              I am open to work with you for your dream project.<br></br>
             <b className="text-emerald-600 font-normal italic">Email : vivekneupane11@gmail.com</b>
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-left hover:scale-110">
              <a
                className=" hover:scale-110 italic underline text-emerald-600 text-md"
                target="_blank"
                href="mailto:vivekneupane11@gmail.com"
              >
                Contact me on Gmail
              </a>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-transparent border-b border-emerald-500 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r  dark:border-emerald-500">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <svg className="m-auto h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path><path fill="#FAFAFA" fill-rule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" clip-rule="evenodd"></path></svg>
            <p className="my-4 text-emerald-900 dark:text-emerald-600">
              If you need a developer for your project, I am interested.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-left hover:scale-110">
              <a
                className=" hover:scale-110 italic underline text-emerald-600 text-md"
                target="_blank"
                href="https://www.facebook.com/vivekneupane11"
              >
                Be Social on Facebook
              </a>
            </div>
          </figcaption>
        </figure>{" "}
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-transparent border-b border-emerald-500 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r  dark:border-emerald-500">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <svg className="m-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="linkedin"><g fill="#1976D2"><path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path><circle cx="1.75" cy="1.75" r="1.75"></circle></g></svg>
            <p className="my-4 text-emerald-900 dark:text-emerald-600">
              See my journey and hire me.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-left hover:scale-110">
              <a
                className="italic underline text-emerald-600 text-lg  "
                target="_blank"
                href="https://www.linkedin.com/in/vivek-neupane-b99259194/"
              >
                Connect in LinkedIn
              </a>
            </div>
          </figcaption>
        </figure>{" "}
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-transparent border-b border-emerald-500 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r  dark:border-emerald-500">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <svg className="m-auto h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path><path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path></g></svg>
            <p className="my-4 text-emerald-900 dark:text-emerald-600">
              Explore my contents
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-left flex flex-row">
              <a
                className="hover:scale-110  italic underline text-emerald-600 text-md"
                target="_blank"
                href="https://www.youtube.com/channel/UCJoQhaR1_Gx8dpeZdrCCXsg"
              >
                View Youtube
              </a>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
