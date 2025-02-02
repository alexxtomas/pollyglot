'use client';

import { SendIcon } from '@/components/icons/send-icon';
import { useRef, useState } from 'react';
import { AVAILABLE_COUNTRIES, CountryIcon } from './icons/country-icon';
import { ChevronDown } from 'lucide-react';

const LANGUAGE_MAP = {
  SPAIN: 'Spanish',
  USA: 'English',
  FRANCE: 'French',
  JAPAN: 'Japanese',
};

const COUNTRY_MAP = {
  Spanish: 'SPAIN',
  English: 'USA',
  French: 'FRANCE',
  Japanese: 'JAPAN',
};

export function UserInput() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Spanish');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const handleLanguageClick = (language: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="flex flex-col gap-3 border border-black px-2 py-4 rounded-lg">
      <textarea
        onChange={handleChange}
        ref={textareaRef}
        className="resize-none focus-visible:outline-none max-h-[300px]"
      />
      <div className="w-full flex justify-between items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            <CountryIcon countryName={COUNTRY_MAP[selectedLanguage as keyof typeof COUNTRY_MAP]} />
            <ChevronDown className="w-4 h-4" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            {AVAILABLE_COUNTRIES.map((country) => {
              const language = LANGUAGE_MAP[country as keyof typeof LANGUAGE_MAP];
              return (
                <li key={country} className="flex items-center gap-2 not-prose">
                  <button
                    onClick={handleLanguageClick(language)}
                    className="flex items-center opacity-100 w-full justify-center"
                  >
                    <CountryIcon countryName={country} />
                    <span className="text-md">{language}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="w-fit h-fit transition-transform hover:scale-110">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
