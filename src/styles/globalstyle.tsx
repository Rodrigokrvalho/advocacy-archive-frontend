import { Mukta } from 'next/font/google';

const mukta = Mukta({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function GlobalStyles() {
  return (
    <style jsx global>
      {`
        :root {
          --font-mukta: ${mukta.style.fontFamily};
        }
      `}
    </style>
  );
}