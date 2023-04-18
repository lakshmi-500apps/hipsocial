<template>
  <div>
    <!-- Dropdown Options for Social Media Starts Here -->
    <Listbox as="div" v-model="selected">
      <div class="relative mt-2">
        <ListboxButton
          class="relative ml-[96rem] mb-1 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <span class="truncate">{{ selected.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute ml-[96rem]  z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              as="template"
              v-for="option in options"
              :key="option.id"
              :value="option"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-3 pr-9',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ option.name }}</span
                >
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <!-- Dropdown Options for Social Media Ends Here -->
  </div>
  <SocialMediaMain
    heading="Social+"
    headingDescription="Market and Promote your product on all social media channels from one place."
  />
</template>
<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { ChevronUpDownIcon } from "@heroicons/vue/24/outline";

// Social Media Options for dropdown
const options = [
  { id: 1, name: "View All" },
  { id: 2, name: "Facebook" },
  { id: 3, name: "LinkedIn" },
  { id: 4, name: "Instagram" },
];
const selected = ref(options[0]);
</script>
