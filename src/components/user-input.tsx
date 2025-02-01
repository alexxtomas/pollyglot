'use client';

import { SendIcon } from '@/components/icons/send-icon';
import { useRef } from 'react';
import { CountryIcon } from './icons/country-icon';
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
        className="resize-none focus-visible:outline-hidden max-h-[300px]"
      />
      <div className="w-full flex justify-between">
        <button title="Language to translate">
          <CountryIcon countryName="SPAIN" />
          <ChevronDown />
        </button>
        <button className="w-fit h-fit">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
