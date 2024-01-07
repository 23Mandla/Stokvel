import Image from "next/image";
import us from "/public/why-us.jpg";
import {
  FaLaptop,
  FaUsers,
  FaChartLine,
  FaFileLines,
  FaRegComments,
  FaCalendar,
} from "react-icons/fa6";

export default function WhyUs() {
  return (
    <div className="pb-24 pt-14 px-10 bg-[#70874a]">
      <h1 className="text-center text-white text-5xl mb-5 border-b w-1/2 m-auto py-2">Why join us</h1>

      <div className="grid grid-cols-2 pt-10">
        <div className="flex justify-center">
          <Image src={us} alt="" height={500} width={500} className="rounded" />
        </div>

        <div className="flex flex-col gap-10 justify-center">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-white flex items-center gap-5 place-content-end">
              <div>
                <h1 className="font-bold text-right">View Portfolio</h1>
                <p className="text-right">Overview of your investment</p>
              </div>
              <span className="border rounded-full p-2.5 block">
                <FaLaptop className="text-2xl text-gray-400" />
              </span>
            </div>

            <div className="text-white flex  items-center gap-5">
              <span className="border rounded-full p-2.5">
                <FaUsers className="text-2xl text-gray-400" />
              </span>
              <div>
                <h1 className="font-bold">View members</h1>
                <p>View membership contributons</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-white flex items-center gap-5 place-content-end">
              <div>
                <h1 className="font-bold text-right">Statements</h1>
                <p className="text-end">View and print Statements</p>
              </div>
              <span className="border rounded-full p-2.5">
                <FaFileLines className="text-2xl text-gray-400" />
              </span>
            </div>

            <div className="text-white flex items-center gap-5">
              <span className="border rounded-full p-2.5">
                <FaChartLine className="text-2xl text-gray-400" />
              </span>
              <div>
                <h1 className="font-bold">Financial perfomance</h1>
                <p>View groups financial perfomance</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-white flex items-center gap-5 place-content-end">
              <div>
                <h1 className="font-bold text-right">Connect</h1>
                <p className="tetx-right">Chat with members</p>
              </div>

              <span className="border rounded-full p-2.5">
                <FaRegComments className="text-2xl text-gray-400" />
              </span>
            </div>

            <div className="text-white flex items-center gap-3">
              <span className="border rounded-full p-2.5">
                <FaCalendar className="text-2xl text-gray-400" />
              </span>
              <div>
                <h1 className="font-bold">Events</h1>
                <p>Organize events with members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
