import projects from "../constant/project";
import web from "../../public/web.png";
import android from "../../public/android.png";
import apple from "../../public/apple.png";
import Image from "next/image";
import AnimationHeader from "./components/AnimationHeader";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
 
  return {
    title: "Vivek Neupane",
    description:"Greetings! I am a  skilled and experienced Developer, Programmer, and CTO, with a passion for creating innovative and cutting-edge technology solutions. With a deep understanding of the latest industry trends and a keen eye for detail, I am able to deliver elegant and efficient software solutions that meet the needs of my clients and exceed their expectations. As a natural leader and team player, I thrive in dynamic and fast-paced environments, and am able to guide my teams to success even in the face of the most challenging of obstacles. With a track record of delivering exceptional results and a commitment to staying ahead of the curve, I am confident that I have the skills and experience necessary to help drive your organization to new heights of success. So if you're looking for a cool, professional, and highly skilled Developer, Programmer, and CTO, look no further than me!",
    openGraph: {
      images: ["https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    },
  };
}
export default function Home() {
  return (
    <main className=" m-auto flex flex-col items-center  sm:items-center md:items-center xl:items-start   ">
<AnimationHeader title="Projects" />
      <div className="m-auto flex justify-center sm:justify-center md:justify-center xl:justify-start flex-row gap-8 flex-wrap w-[95%] md:w-[100%] mt-5 md:mt-2 ">
        {projects.map((e) => {
          return (
            <div
              key={e.name}
              className=" relative max-w-sm sm:max-w-md  lg:max-w-md  xl:max-w-sm custom:max-w-xs  bg-teal-50 border border-gray-100 rounded-lg shadow-lg dark:bg-gray-900 backdrop-blur-lg dark:border-gray-900"
            >
              <a
                target="_blank"
                href={e.demoLink ? e.demoLink : e.androidLink}
                style={{ width: "100%", height: "200px" }}
              >
                <img
                loading="lazy"
                  className="rounded-lg h-[250px] custom:h-[200px]"
                  src={e.thumbnail}
                  style={{ objectFit: "cover",width: "100%" }}
                  height="250px"
                  width="200px"
                  alt="avatar"
                />
                <section className="p-1 rounded-lg absolute top-[230px] custom:top-[180px] left-[42%]  bg-gray-100 hover:scale-125 dark:bg-gray-800 ">
                  <img
                  loading="lazy"
                    className="rounded-lg h-[36px] w-[36px]  "
                    src={e.logo}
                    style={{ objectFit: "cover" }}
                    height="36px"
                    width={"36px"}
                    alt="avatar"
                  />
                </section>
              </a>
              <div className="p-5">
                <a
                  target="_blank"
                  href={e.demoLink ? e.demoLink : e.androidLink}
                >
                  <h5 className="my-2 mt-4 text-2xl font-bold tracking-tight text-emerald-600/100">
                    {e.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-emerald-600 dark:text-emerald-700">
                  {e.description}
                </p>
                {e.tools.map((tool) => (
                  <button
                    key={tool}
                    type="button"
                    className="py-2 px-5 mr-2 mb-2 text-sm font-medium text-emerald-700 focus:outline-none bg-transparent rounded-full border border-gray-200 hover:shadow-md  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 hover:bg-emerald-600 hover:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {tool}
                  </button>
                ))}
                <section className="flex justify-start items-center mt-4">
                  {e.webLink && (
                    <a target="_blank" href={e.webLink}>
                      <Image
                        src={web}
                        loading="lazy"
                        style={{
                          height: "25px",
                          width: "25px",
                          marginRight: "22px",
                        }}
                        alt="web"
                      />
                    </a>
                  )}
                  {e.androidLink && (
                    <a target="_blank" href={e.androidLink}>
                      <Image
                      loading="lazy"
                        src={android}
                        style={{
                          height: "25px",
                          width: "25px",
                          marginRight: "22px",
                        }}
                        alt="web"
                      />
                    </a>
                  )}
                  {e.iosLink && (
                    <a target="_blank" href={e.iosLink}>
                      <Image
                      loading="lazy"
                        src={apple}
                        style={{
                          height: "25px",
                          width: "25px",
                          marginRight: "22px",
                        }}
                        alt="web"
                      />
                    </a>
                  )}
                </section>
              </div>
            </div>
          );
        })}
      </div>{" "}
    </main>
  );
}
