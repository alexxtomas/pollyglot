import { Chat } from '@/components/chat';
import { SendIcon } from '@/components/icons/send-icon';
import { UserInput } from '@/components/user-input';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-sm">
      <header className="mb-1">
        <Image
          src="/banner.webp"
          alt="app banner"
          width={430}
          height={213}
          className="rounded-lg"
        />
      </header>
      <section>
        <div className=" rounded-lg h-[600px]">
          <div className="bg-blue-600 text-white px-2 py-4 rounded-lg text-md font-semibold w-full text-center">
            Select the language you me to translate into, type your text and hit send. We'll
            automatically detect the language you're using!
          </div>
          <Chat />
        </div>
      </section>
    </main>
  );
}
