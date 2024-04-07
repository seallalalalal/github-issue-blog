import { Card, Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex animate-pulse">
          <div className="flex-shrink-0">
            <span className="block size-12 rounded-large bg-gray-200"></span>
          </div>

          <div className="ms-4 mt-2 w-full">
            <p className="h-4 w-2/5 rounded-full bg-gray-200"></p>

            <ul className="mt-5 space-y-3">
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex animate-pulse">
          <div className="flex-shrink-0">
            <span className="block size-12 rounded-large bg-gray-200"></span>
          </div>

          <div className="ms-4 mt-2 w-full">
            <p className="h-4 w-2/5 rounded-full bg-gray-200"></p>

            <ul className="mt-5 space-y-3">
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex animate-pulse">
          <div className="flex-shrink-0">
            <span className="block size-12 rounded-large bg-gray-200"></span>
          </div>

          <div className="ms-4 mt-2 w-full">
            <p className="h-4 w-2/5 rounded-full bg-gray-200"></p>

            <ul className="mt-5 space-y-3">
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex animate-pulse">
          <div className="flex-shrink-0">
            <span className="block size-12 rounded-large bg-gray-200"></span>
          </div>

          <div className="ms-4 mt-2 w-full">
            <p className="h-4 w-2/5 rounded-full bg-gray-200"></p>

            <ul className="mt-5 space-y-3">
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
              <li className="h-4 w-full rounded-full bg-gray-200"></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
