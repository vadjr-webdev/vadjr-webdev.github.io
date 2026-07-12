function Bio() {
  return (
    <>
      <div id="bio">
        <div className="flex items-center gap-2">
          <span className="icon text-(--accent)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
            </svg>
          </span>
          <span className="work">Web Developer</span> |{" "}
          <span id="status" className="text-(--accent)">
            #OpenToWork
          </span>
        </div>
        <div
          id="bio_img"
          className="inline-flex items-center gap-1.25 mt-2 mb-6"
        >
          <h1 className="text-4xl font-bold">
            Virgilio Delfin Jr<span className="text-(--accent)">.</span>
          </h1>
        </div>
        <div id="bio_desc" className="mb-6">
          <p>
            Dedicated to clean code, robust performance, and continuous growth
            in modern tech stacks.
          </p>
        </div>
        <div id="bio_cta" className="w-100 flex gap-3 items-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-semibold bg-(--accent) text-(--background) rounded-full py-2 px-4 hover:bg-(--accent-glow) hover:text-emerald-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>{" "}
            Let's Connect
          </a>
          <a href="/" className="text-(--accent)">
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Bio;
