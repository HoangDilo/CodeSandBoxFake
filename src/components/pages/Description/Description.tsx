import IcDescription from "@/components/icons/IcDescription";
import IcIdea from "@/components/icons/IcIdea";

import "@/styles/pages/SandPackWidget/SandPackWidget.scss";

export default function Description() {
    return (
        <div className="description-area">
            <div className="description-header">
                <button className="desc-tabs">
                    <div className="desc-icons">
                        <IcDescription />
                    </div>
                    <span>Description</span>
                </button>
                <button className="desc-tabs">
                    <div className="desc-icons">
                        <IcIdea />
                    </div>
                    <span>Solution</span>
                </button>
            </div>
            <div className="desc-post-content-scroller">
                <div className="description-body">
                    <p className="text-3xl font-semibold">Todo List</p>
                    <div className="desc-post-info">
                        <div className="author-info-container">
                            <img
                                src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/04/02/cd273738c1c623987ad7.jpg"
                                className="author-avt"
                            />
                            <div className="author-info">
                                <p className="author-name">Kha Banh</p>
                                <p className="author-position">Staff at jail</p>
                            </div>
                        </div>
                        <div className="languages">
                            <span>HTML</span>
                            <span>JS</span>
                        </div>
                        <div className="difficult-level">Easy</div>
                        <div className="time-litmit">30 mins</div>
                        <div className="number-completed">999</div>
                    </div>
                    <div className="desc-post-content">
                        <div className="flex flex-col gap-y-8">
                            <div className="prose dark:prose-invert prose-sm">
                                <p>
                                    You're given some existing HTML for a Todo List app. Add the
                                    following functionality to the app:
                                </p>
                                <ol>
                                    <li>
                                        Add new tasks on clicking the "Submit" button.
                                        <ul>
                                            <li>
                                                The <code>&lt;input&gt;</code> field should be cleared
                                                upon successful addition.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Remove tasks from the Todo List upon clicking the "Delete"
                                        button.
                                    </li>
                                </ol>
                                <h2>Notes</h2>
                                <ul>
                                    <li>
                                        The focus of this question is on functionality, not the
                                        styling. There's no need to write any custom CSS.
                                    </li>
                                    <li>
                                        You may modify the markup (e.g. adding <code>id</code>s,
                                        data attributes, replacing some tags, etc), but the result
                                        should remain the same visually.
                                    </li>
                                    <li>
                                        You may want to think about ways to improve the user
                                        experience of the application and implement them (you get
                                        bonus credit for doing that during interviews).
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden lg:block rounded-md p-4 text-center border-brand-light dark:border-brand-darkest border bg-brand-darker/10">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center h-8 px-3 gap-x-1 text-xs whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 active:bg-neutral-200 dark:active:bg-neutral-800 focus-visible:outline-brand-dark dark:focus-visible:outline-brand disabled:border-neutral-300 dark:disabled:border-neutral-700 disabled:text-neutral-300 dark:disabled:text-neutral-700 disabled:bg-transparent disabled:cursor-not-allowed"
                                >
                                    <div>See what you're building</div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="!h-4 !w-4"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <h1 className="text-neutral-900 dark:text-white text-base font-semibold">
                                    Companies
                                </h1>
                                <div className="flex items-center space-x-2 rounded border p-3 border-neutral-200 dark:border-neutral-800">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="h-8 w-8 text-neutral-500"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"></path>
                                    </svg>
                                    <div className="grow space-y-1">
                                        <span className="block font-semibold text-neutral-900 dark:text-neutral-100 text-xs">
                                            Premium Feature
                                        </span>
                                        <span className="block font-normal text-neutral-600 dark:text-neutral-400 text-xs">
                                            Purchase premium to see companies which ask this question.
                                        </span>
                                    </div>
                                    <a
                                        className="transition-colors inline-flex items-center justify-center h-7 px-2 gap-x-1 text-xs whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-transparent text-white dark:text-neutral-950 bg-brand-dark dark:bg-brand hover:bg-brand-darker dark:hover:bg-brand-light active:bg-brand-darkest dark:active:bg-brand-lighter focus-visible:outline-brand-dark dark:focus-visible:outline-brand disabled:border-transparent disabled:text-white dark:disabled:text-neutral-700 disabled:bg-brand-lighter dark:disabled:bg-neutral-900 disabled:cursor-not-allowed"
                                        href="/pricing"
                                    >
                                        <div>View plans</div>
                                    </a>
                                </div>
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
                                                        href="/questions/user-interface/holy-grail"
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        ></span>
                                                        Holy Grail
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-6">
                                                <span className="pointer-events-auto relative inline-block">
                                                    <span className="sr-only" id=":r30k:">
                                                        Difficulty
                                                    </span>
                                                    <div
                                                        aria-labelledby=":r30k:"
                                                        className="flex items-center gap-x-1.5"
                                                    >
                                                        <span className="font-normal text-xs text-green">
                                                            Easy
                                                        </span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="focus-within:ring-brand group relative flex gap-x-6 p-3 focus-within:ring-2 focus-within:ring-inset hover:bg-neutral-50 dark:hover:bg-neutral-900">
                                        <div className="flex grow items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span className="flex font-medium text-neutral-900 dark:text-neutral-100 text-xs items-center gap-x-2">
                                                    <a
                                                        className="transition-colors focus:outline-none"
                                                        href="/questions/javascript/flatten"
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        ></span>
                                                        Flatten
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-6">
                                                <span className="pointer-events-auto relative inline-block">
                                                    <span className="sr-only" id=":r30l:">
                                                        Difficulty
                                                    </span>
                                                    <div
                                                        aria-labelledby=":r30l:"
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
                                    <li className="focus-within:ring-brand group relative flex gap-x-6 p-3 focus-within:ring-2 focus-within:ring-inset hover:bg-neutral-50 dark:hover:bg-neutral-900">
                                        <div className="flex grow items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span className="flex font-medium text-neutral-900 dark:text-neutral-100 text-xs items-center gap-x-2">
                                                    <a
                                                        className="transition-colors focus:outline-none"
                                                        href="/questions/javascript/promise-any"
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        ></span>
                                                        Promise.any
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-6">
                                                <span className="pointer-events-auto relative inline-block">
                                                    <span className="sr-only" id=":r30m:">
                                                        Difficulty
                                                    </span>
                                                    <div
                                                        aria-labelledby=":r30m:"
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
                            <div className="grid gap-y-4">
                                <h1 className="text-neutral-900 dark:text-white font-semibold">
                                    Similar Questions
                                </h1>
                                <ul className="isolate divide-y overflow-hidden rounded-md border sm:grid border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800">
                                    <li className="focus-within:ring-brand group relative flex gap-x-6 p-3 focus-within:ring-2 focus-within:ring-inset hover:bg-neutral-50 dark:hover:bg-neutral-900">
                                        <div className="flex grow items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span className="flex font-medium text-neutral-900 dark:text-neutral-100 text-xs items-center gap-x-2">
                                                    <a
                                                        className="transition-colors focus:outline-none"
                                                        href="/questions/user-interface/temperature-converter"
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        ></span>
                                                        Temperature Converter
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-6">
                                                <span className="pointer-events-auto relative inline-block">
                                                    <span className="sr-only" id=":r30n:">
                                                        Difficulty
                                                    </span>
                                                    <div
                                                        aria-labelledby=":r30n:"
                                                        className="flex items-center gap-x-1.5"
                                                    >
                                                        <span className="font-normal text-xs text-green">
                                                            Easy
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
                </div>
            </div>
        </div>
    );
}
