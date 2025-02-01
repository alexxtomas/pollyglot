'use client';

import { SendIcon } from '@/components/icons/send-icon';
import { useRef } from 'react';
import { AVAILABLE_COUNTRIES, CountryIcon } from './icons/country-icon';
import { ChevronDown } from 'lucide-react';

export function UserInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };
  return (
    <div className="flex flex-col gap-3 border border-black px-2 py-4 rounded-lg">
      <textarea
        onChange={handleChange}
        ref={textareaRef}
        className="resize-none focus-visible:outline-none max-h-[300px]"
      />
      <div className="w-full flex justify-between items-center">
        <details className="dropdown">
          <summary className="btn m-1 px-2">
            <CountryIcon countryName="SPAIN" />
            <ChevronDown className="w-4 h-4" /> {/* Added size here */}
          </summary>
          <ul className="menu dropdown-content bg-base-100 text-base-content rounded-box z-[1] w-52 p-2 shadow">
            {AVAILABLE_COUNTRIES.map((country) => (
              <li key={country} className="flex items-center gap-2 not-prose">
                <div className="flex items-center opacity-100">
                  <CountryIcon countryName={country} />
                </div>
                {country}
              </li>
            ))}
          </ul>
        </details>

        <button className="w-fit h-fit">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
