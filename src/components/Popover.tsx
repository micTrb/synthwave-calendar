import React, { useState } from "react";

import { Popover } from "@headlessui/react";

interface Props extends React.PropsWithChildren {
  className?: string;
}

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
  },
]

const MyPopover: React.FC<Props> = ({ className, children }) => {
  return (
    <Popover className="relative h-32 p-auto">
      <Popover.Button className="relative h-32 w-full p-auto">
        {children}
      </Popover.Button>

      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
            {solutions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              > 
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default MyPopover;
