export default function Solution() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-y-6 p-4">
      <div className="flex items-center justify-between gap-x-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h1 className="lg:text-2xl lg:font-semibold sm:text-xl sm:font-semibold text-lg font-semibold text-neutral-900 dark:text-white">
            <span>Tabs Solution</span>
          </h1>
        </div>
        <div>
          <label className="mb-2 block sr-only">
            <span className="block font-medium text-neutral-900 dark:text-neutral-100 text-xs">
              Framework
            </span>
          </label>
          <select
            aria-label="Framework"
            className="flex items-center py-0 rounded-full transition-colors border border-neutral-300 dark:border-neutral-700 focus-visible:border-neutral-300 dark:focus-visible:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 focus-visible:outline-brand-dark dark:focus-visible:outline-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-0 h-8 text-xs"
            id=":rn:"
          >
            <option value="react">React</option>
            <option value="vanilla">Vanilla JS</option>
          </select>
        </div>
      </div>
      <section className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <div className="group block flex-shrink-0">
          <span className="sr-only" id=":ro:">
            Author
          </span>
          <div aria-labelledby=":ro:" className="flex items-center gap-x-3">
            <div>
              <span className="pointer-events-auto relative inline-block">
                <img
                  alt="Yangshun Tay"
                  className="inline-block h-8 w-8 rounded-full"
                  src="/img/team/yangshun.jpg"
                />
              </span>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <span className="block font-semibold text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                Yangshun Tay
              </span>
              <span className="block font-normal text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                Ex-Meta Staff Engineer
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-1.5">
          <span className="sr-only" id=":rp:">
            Languages
          </span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 flex-shrink-0 text-neutral-400 dark:text-neutral-500"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
          </svg>
          <div aria-labelledby=":rp:" className="flex items-center gap-x-2">
            <span className="font-semibold text-xs inline-flex items-center rounded px-2 py-0.5 bg-orange-600 text-white dark:bg-neutral-800 dark:text-orange-600">
              HTML
            </span>
            <span className="font-semibold text-xs inline-flex items-center rounded px-2 py-0.5 bg-sky-500 text-white dark:bg-neutral-800 dark:text-sky-500">
              CSS
            </span>
            <span className="font-semibold text-xs inline-flex items-center rounded px-2 py-0.5 bg-yellow-500 text-black dark:bg-neutral-800 dark:text-yellow-500">
              JS
            </span>
          </div>
        </div>
        <span className="pointer-events-auto relative inline-block">
          <span className="sr-only" id=":rq:">
            Difficulty
          </span>
          <div aria-labelledby=":rq:" className="flex items-center gap-x-1.5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-neutral-400 dark:text-neutral-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z"></path>
            </svg>
            <span className="font-normal text-xs text-yellow-500">Medium</span>
          </div>
        </span>
        <span className="pointer-events-auto relative inline-block">
          <span className="sr-only" id=":rr:">
            Recommended duration to spend during interviews
          </span>
          <div aria-labelledby=":rr:" className="flex items-center gap-x-1.5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-neutral-400 dark:text-neutral-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
            </svg>
            <span className="font-normal text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
              15 mins
            </span>
          </div>
        </span>
        <span className="pointer-events-auto relative inline-block">
          <span className="sr-only" id=":rs:">
            Users completed
          </span>
          <div aria-labelledby=":rs:" className="flex items-center gap-x-1.5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-neutral-400 dark:text-neutral-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
            </svg>
            <span className="font-normal text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
              1301 completed
            </span>
          </div>
        </span>
      </section>
      <div className="flex flex-col gap-y-8">
        <div className="prose dark:prose-invert prose-sm">
          <h2 className="group scroll-mt-28">Solution</h2>
          <p>
            Implementing a basic (not fully accessible) Tabs component in React
            is quite simple due to the fact that only one state value is needed,
            the currently active tab item. React also helps to keep the state
            and the UI in sync, which is more troublesome to do so in Vanilla
            JavaScript.
          </p>
          <p>
            For simplicity sake, we'll create an{" "}
            <a
              className="transition-colors font-medium text-brand-dark dark:text-brand hover:text-brand-dark dark:hover:text-brand hover:underline"
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noreferrer noopener"
              target="_blank"
            >
              uncontrolled
            </a>{" "}
            Tabs component where the state is managed within the Tabs component.
            During interviews, do clarify with your interviewer if they want you
            to implement a controlled or uncontrolled component.
          </p>
          <h3 className="group scroll-mt-28">Props (API Design)</h3>
          <p>
            Part of the complexity of building a component is designing the API
            for it. In the case of React, it would be the props of the
            component. At the bare minimum, we will need the following props:
          </p>
          <ul>
            <li>
              <code>items</code>: A list of item objects. Each item is an object
              with the fields:
              <ul>
                <li>
                  <code>value</code>: A unique identifier for the tab item.
                </li>
                <li>
                  <code>label</code>: The text label to show in the tab item.
                </li>
                <li>
                  <code>panel</code>: The contents to show in the tab panel when
                  the item is active.
                </li>
              </ul>
            </li>
            <li>
              <code>defaultValue</code>: The default tab item/panel to show. In
              case the <code>defaultValue</code> is not provided, we'll use the
              first item as the value. This is assuming that <code>items</code>{" "}
              is non-empty.
            </li>
          </ul>
          <p>
            For controlled components, there will be a <code>value</code> and{" "}
            <code>onChange</code> props instead of a <code>defaultValue</code>{" "}
            prop.
          </p>
          <h2>Test Cases</h2>
          <ul>
            <li>All the provided items should be displayed.</li>
            <li>The default active item should be reflected correctly.</li>
            <li>
              Selecting the tab items updates the tabpanel's contents with the
              active tabs's panel details.
            </li>
            <li>
              Test that you are able to initialize multiple instances of the
              component, each with independent states.
            </li>
          </ul>
          <h2>Accessibility</h2>
          <p>
            Accessibility is a huge factor of a good Tabs component. The{" "}
            <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel">
              ARIA Authoring Practices Guide for Tabs
            </a>{" "}
            has a long list of guidelines for the ARIA roles, states, and
            properties to add to the various elements of a Tab.{" "}
            <a href="/questions/user-interface/tabs-ii">Tabs II</a> and{" "}
            <a href="/questions/user-interface/tabs-iii">Tabs III</a> will focus
            on improving the accessibility of Tabs component.
          </p>
        </div>
        <div className="grid gap-y-4">
          <h1 className="text-neutral-900 dark:text-white font-semibold">
            Try these questions next
          </h1>
          <ul className="isolate divide-y overflow-hidden rounded-md border sm:grid border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800">
            <li className="focus-within:ring-brand group relative flex gap-x-6 p-3 focus-within:ring-2 focus-within:ring-inset hover:bg-neutral-50 dark:hover:bg-neutral-900">
              <div className="flex grow items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="flex font-medium text-neutral-900 dark:text-neutral-100 text-xs items-center gap-x-2">
                    <a
                      className="transition-colors focus:outline-none"
                      href="/questions/user-interface/tabs-ii"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Tabs II
                    </a>
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="pointer-events-auto relative inline-block">
                    <span className="sr-only" id=":rt:">
                      Difficulty
                    </span>
                    <div
                      aria-labelledby=":rt:"
                      className="flex items-center gap-x-1.5"
                    >
                      <span className="font-normal text-xs text-yellow-500">
                        Medium
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
