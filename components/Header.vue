<template>
    <div>
        <nav class="fixed top-0 w-full py-5 bg-zinc-800 z-50">
        <div class="container mx-auto px-2">
            <div class="w-full flex  flex-col lg:flex-row">
                <div class=" flex justify-between  lg:flex-row">
                    <NuxtLink class="flex items-center text-gray-200" to="/">MM</NuxtLink>
                    <button data-collapse-toggle="navbar-nav-example" type="button"
                        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-nav-example" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden w-full lg:flex lg:pl-11 " id="navbar-nav-example">
                    <ul class="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4">
                        <li>
                            <NuxtLink to="/about"
                                class="flex items-center justify-between text-gray-200 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3 capitalize">about
                                me</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/project"
                                class="flex items-center justify-between text-gray-200 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3 capitalize">projects</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>                                                
    </div>
</template>
