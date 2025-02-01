import { UserInput } from '@/components/user-input';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-sm">
      <header className="mb-6">
        <Image src="/banner.webp" alt="app banner" width={390} height={213} />
      </header>
      <section>
        <div className="border border-black rounded-lg py-8 px-6 max-h-[600px]">
          <div className="bg-blue-600 text-white px-2 py-4 rounded-lg text-lg font-semibold">
            Select the language you me to translate into, type your text and hit send!
          </div>
          <UserInput />
        </div>
      </section>
    </main>
  );
}
