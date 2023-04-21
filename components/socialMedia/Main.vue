<template>
  <div class="min-h-full">
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pb-4 lg:pt-5"
    >
      <div class="flex flex-shrink-0 items-center px-6">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
          alt="Your Company"
        />
      </div>

      <div class="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
        <!-- Navigation bar Starts Here -->
        <nav class="mt-6 px-3">
          <div class="space-y-1">
            <button
              class="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 px-3 w-full py-2"
              type="button"
            >
              Sign Up
            </button>

            <a
              v-for="item in projects"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-6 w-6 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}

              <component
                :is="item.dropdown"
                :class="[
                  item.current
                    ? 'text-dark-500'
                    : 'text-dark-400 group-hover:text-dark-500',
                  'ml-8 h-6 w-6 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>
        <!-- Navigation bar Ends Here -->
      </div>
    </div>

    <div class="flex flex-col lg:pl-64">
      <main class="flex-1">
        <div class="border pb-2">
          <div
            class="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          >
            <!-- Display of heading and description goes here -->
            <span class="font-semibold text-4xl"
              >{{ heading }}
              <span class="ml-2 mt-1 text-xs text-gray-600">{{
                headingDescription
              }}</span></span
            >
          </div>
        </div>
      </main>

      <div class="mt-6 px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between">
          <div><span class="font-semibold text-xl">STREAMS</span></div>
        </div>
        <div>
          <span class="text-xs text-gray-600"
            >Customize your stream by selecting relevant topics and accounts to
            stay up-to-date with the latest news and trends</span
          >
        </div>
      </div>

      <SocialMediaStreams />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RectangleGroupIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";

// Show list of projects created
const projects = [
  { name: "Home", href: "#" },
  { name: "Website  Builder", href: "#" },
  { name: "SEO", href: "#" },
  { name: "Blogs and Content", href: "#" },
  { name: "Social+", href: "#", dropdown: ChevronDownIcon },
  { name: "SEM", href: "#" },
  { name: "Projects", href: "#", dropdown: ChevronDownIcon },
  { name: "Demo1", href: "#" },
  { name: "Streams", href: "#" },
  { name: "Posts", href: "#" },
  { name: "Calendar", href: "#" },
  { name: "Network", href: "#", icon: RectangleGroupIcon },
];

interface Props {
  heading: string;
  headingDescription?: string;
}
// Define Props
const props = withDefaults(defineProps<Props>(), {
  heading: "HipSocial Streams",
});
</script>
