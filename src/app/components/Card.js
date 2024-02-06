import Image from "next/image";

export default function Card({ data }) {
  return (
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow relative">
      <div className="absolute opacity-50 z-10 top-16">
        <Image src="/imrankhan.png" alt="Imran Khan" width={800} height={800} />
      </div>
      <div className="flex w-full items-center justify-between space-x-6 p-3">
        <div className="flex-1 truncate ">
          <p>
            <Image
              src={"data:image/png;base64," + data.adrress}
              alt="Address"
              width={500}
              height={300}
            />
          </p>
          <div className="flex items-center justify-between space-x-3 flex-row-reverse">
            <div className="flex flex-col justify-center items-center w-full">
              <p className="text-sm font-semibold px-4">:نام</p>
              <h3 className="self-start relative w-40 h-14">
                <Image
                  src={"data:image/png;base64," + data.name}
                  fill
                  alt="Name"
                  objectFit="contain"
                  objectPosition="top left"
                />
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <p className="text-sm font-semibold">:والد کا نام</p>
              <h3 className="relative w-40 sm:w-30 h-14">
                <Image
                  src={"data:image/png;base64," + data.fatherName}
                  fill
                  objectFit="contain"
                  alt="Father Name"
                  objectPosition="top left"
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <div className="relative -mr-px inline-flex w-0 flex-1 flex-col items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <span>:شناختی کارڈنمبر</span> <span> {data.cnic}</span>
            </div>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <div className="relative -mr-px inline-flex flex-col w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <span> :گھرانہ نمبر</span> <span>{data.gharanaNo}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <div className="relative -mr-px inline-flex w-0 flex-1 flex-col items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <span>:بلاک کوڈ</span>
              <span>{data.blockCode}</span>
            </div>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <div className="relative -mr-px inline-flex w-0 flex-1 flex-col items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <span>:سلسلہ نمبر</span>
              <span>{data.silsilaNo}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <div className="relative -mr-px inline-flex w-0 flex-1 flex-col items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <span>:عمر</span>
              <span>{data.age}</span>
            </div>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <div className="relative -mr-px inline-flex w-0 flex-1 flex-col items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <span>:موبائل نمبر</span>
              <span>{data.phoneNo}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="-ml-px flex w-0 flex-1">
            <div className="relative -mr-px inline-flex w-0 flex-1 flex-col items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <span>:انتخابی نشان</span>
              <span>
                <Image src="/racket.jpg" alt="Racket" width={80} height={80} />
              </span>
            </div>
          </div>
          <div className="flex w-0 flex-1">
            <div className="relative -mr-px inline-flex w-0 flex-1 flex-col items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <span>:حلقہ نمبر</span>
              <span>NA-246</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center justify-between space-x-3 flex-row-reverse">
            <p className="text-gray-900 text-[12px] font-bold">پولنگ سٹیشن</p>
            <p className="text-[12px] font-bold">
              {data.pollingStationName} - {data.pollingStationNo}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
