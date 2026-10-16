const countries = ["+91", "+1", "+44", "+61", "+971"];

export function ContactModal() {
  return (
    <>
      <input id="contact-open" type="checkbox" className="peer/contact sr-only" />
      <div className="fixed inset-0 z-50 hidden place-items-center bg-black/70 p-4 peer-checked/contact:grid">
        <label htmlFor="contact-open" aria-hidden className="absolute inset-0 cursor-default" />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl lg:grid-cols-2"
        >
          <label
            htmlFor="contact-open"
            className="absolute top-3 right-3 z-10 grid size-8 cursor-pointer place-items-center rounded-full bg-white text-xl leading-none text-[#16181f] shadow"
          >
            <span className="sr-only">Close</span>
            ×
          </label>

          <div className="flex flex-col bg-[#6d28d9] px-8 py-10 text-center text-white sm:px-10">
            <h2 id="contact-title" className="text-3xl font-semibold tracking-tight text-[#f0d9ff] sm:text-4xl">
              Have a project in mind? Let’s build something amazing together!
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/90">
              At Wrathcode Technology, we’re always excited to hear from you. Whether you’re looking to develop a stunning website, a high-performance mobile app, a cutting-edge crypto exchange, or a custom software solution — our team is ready to help.
            </p>
            <div aria-hidden className="mx-auto mt-8 w-full max-w-[240px]">
              <svg viewBox="0 0 280 200" className="h-auto w-full">
                <ellipse cx="140" cy="176" rx="90" ry="16" fill="#4c1d95" />
                <rect x="58" y="46" width="120" height="82" rx="8" fill="#ddd6fe" />
                <rect x="66" y="54" width="104" height="58" rx="4" fill="#5b21b6" />
                <rect x="78" y="66" width="48" height="6" rx="3" fill="#e9d5ff" />
                <rect x="78" y="80" width="70" height="6" rx="3" fill="#c4b5fd" />
                <rect x="108" y="128" width="20" height="16" fill="#ddd6fe" />
                <rect x="86" y="142" width="64" height="6" rx="3" fill="#ddd6fe" />
                <circle cx="196" cy="118" r="28" fill="#c4b5fd" />
                <path d="M176 168c8-28 36-28 48-8 8 14 18 18 28 16v18H168v-14c6-4 8-8 8-12z" fill="#a78bfa" />
                <rect x="214" y="132" width="36" height="22" rx="4" fill="#ede9fe" />
              </svg>
            </div>
            <p className="mt-auto pt-8 text-sm leading-relaxed text-white/75">
              Feel free to reach out to us with your queries, ideas, or project requirements. We’ll get back to you as quickly as possible.
            </p>
          </div>

          <form className="bg-[#f6f3fb] px-6 py-10 sm:px-10" action="mailto:sales@wrathcode.com" method="post" encType="text/plain">
            <h3 className="text-2xl font-semibold tracking-tight text-[#16181f]">Get Started with Wrathcode</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-[#16181f]">
                Full Name
                <input name="name" autoComplete="name" className="mt-2 w-full border border-[#d4d4d8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#6d28d9]" />
              </label>
              <label className="block text-sm font-medium text-[#16181f]">
                Email*
                <input name="email" type="email" required autoComplete="email" className="mt-2 w-full border border-[#d4d4d8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#6d28d9]" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-[#16181f]">
              Phone*
              <span className="mt-2 flex border border-[#d4d4d8] bg-white">
                <select name="code" aria-label="Country code" defaultValue="+91" className="border-r border-[#d4d4d8] bg-[#f4f4f5] px-2 text-sm outline-none">
                  {countries.map((code) => (
                    <option key={code}>{code}</option>
                  ))}
                </select>
                <input name="phone" type="tel" required autoComplete="tel" placeholder="123-456-7890" className="w-full px-3 py-2.5 text-sm outline-none" />
              </span>
            </label>
            <label className="mt-4 block text-sm font-medium text-[#16181f]">
              Your Message
              <textarea name="message" rows={5} className="mt-2 w-full resize-y border border-[#d4d4d8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#6d28d9]" />
            </label>
            <button type="submit" className="mt-5 w-full cursor-pointer bg-[#c026d3] px-4 py-3 text-sm font-semibold text-white shadow-[0_4px_0_#86198f]">
              Enquiry Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
