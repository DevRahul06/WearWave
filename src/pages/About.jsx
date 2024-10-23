import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewLatterBox from "../components/NewLatterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            beatae voluptatibus cupiditate explicabo, saepe nihil praesentium ut
            tempora sequi fuga rerum odit ab placeat, alias doloremque soluta,
            quisquam natus a!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            laudantium itaque quod, quos praesentium tenetur voluptatem mollitia
            laborum reprehenderit ducimus perspiciatis quisquam exercitationem
            commodi consequatur quae nobis alias, explicabo voluptates.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            sunt placeat velit distinctio nostrum facilis labore. Nostrum illum
            pariatur nemo voluptas corrupti quia iusto impedit! Incidunt
            praesentium quas rem excepturi?
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col gap-2 md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed nemo aperiam delectus consectetur, expedita harum quas laborum esse excepturi nisi odio corporis nostrum adipisci sequi magnam sit ad quis?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed nemo aperiam delectus consectetur, expedita harum quas laborum esse excepturi nisi odio corporis nostrum adipisci sequi magnam sit ad quis?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed nemo aperiam delectus consectetur, expedita harum quas laborum esse excepturi nisi odio corporis nostrum adipisci sequi magnam sit ad quis?</p>
        </div>
      </div>

      <NewLatterBox />

    </div>
  );
};

export default About;
