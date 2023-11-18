import { FaArrowRightLong } from "react-icons/fa6";

export default function InfoPage() {
  return (
    <div className="pt-9 mb-20">
      <div className="flex text-white space-x-24 justify-center px-20 py-9">

        <div className="bg-[#1F2B1B] flex flex-col justify-center align-center gap-8 w-60 h-60 border-2 boder-white rounded-full cursor-pointer">
          <p className="text-center text-white text-lg font-bold">Simple sign up</p>
          <p className="pl-5">Start today and achieve your goals...</p>
          <div className="flex justify-center">
            <FaArrowRightLong />
          </div>
        </div>

        <div className="bg-[#1F2B1B] flex flex-col justify-center align-center gap-8 w-60 h-60 border-2 boder-white rounded-full cursor-pointer">
          <p className="text-center text-white text-lg font-bold">View contributions</p>
          <p className="pl-4">See how fellow members have contributed</p>
          <div className="flex justify-center">
            <FaArrowRightLong />
          </div>
        </div>
        <div className="bg-[#1F2B1B] flex flex-col justify-center align-center gap-8 w-60 h-60 border-2 boder-white rounded-full cursor-pointer">
          <p className="text-center text-white text-lg font-bold">Financial status</p>
          <p className="pl-4">View finacial status of the stockvel</p>
          <div className="flex justify-center">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
}
