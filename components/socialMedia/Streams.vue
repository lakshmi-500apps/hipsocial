<template>
  <div class="ml-[79rem]">
    <!-- On click of Add Stream button we will open a slideout where user can see integrated accounts and can select which gridster to been shown  -->
    <button
      @click="open = true"
      type="button"
      class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <PlusCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Add Stream
    </button>
  </div>

  <!-- Add Stream Sidebar Starts Here -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <div class="border px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle
                        class="text-base font-semibold leading-6 text-gray-900"
                        >Add a Stream</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          @click="open = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <Listbox as="div" v-model="selectedAccount">
                      <div class="relative mt-2">
                        <ListboxButton
                          class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <span class="block truncate"
                            ><div class="flex">
                              <div>
                                <UserCircleIcon class="h-10 w-10" />
                              </div>
                              <div class="text-2xl ml-1">
                                {{ selectedAccount.name }}
                              </div>
                              <div
                                class="ml-[-11.4rem] mt-[1.8rem] text-gray-500 text-xs"
                              >
                                {{ selectedAccount.account }}
                              </div>
                            </div></span
                          >
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
                            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          >
                            <ListboxOption
                              as="template"
                              v-for="option in integratedAccounts"
                              :key="option.id"
                              :value="option"
                              v-slot="{ active, selectedAccount }"
                            >
                              <li
                                :class="[
                                  active
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9',
                                ]"
                              >
                                <span
                                  :class="[
                                    selectedAccount
                                      ? 'font-semibold'
                                      : 'font-normal',
                                    'block truncate',
                                  ]"
                                >
                                  <div class="flex">
                                    <div>
                                      <component
                                        :is="option.icon"
                                        :class="[
                                          'text-dark-400 group-hover:text-dark-500',
                                          'mr-3 h-6 w-6 flex-shrink-0',
                                        ]"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div>{{ option.name }}</div>
                                  </div></span
                                >
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                    <div v-if="selectedAccount.account == 'Facebook'">
                      <button
                        type="button"
                        @click="(showStreams = true), (showPosts = true)"
                        class="mt-4 ml-1 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Posts
                      </button>
                      <button
                        type="button"
                        @click="(showStreams = true), (showMentions = true)"
                        class="ml-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Mentions
                      </button>
                      <button
                        type="button"
                        @click="(showStreams = true), (showEvents = true)"
                        class="ml-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Events
                      </button>
                      <button
                        type="button"
                        @click="(showStreams = true), (showTimeline = true)"
                        class="ml-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Timeline
                      </button>
                    </div>
                    <div
                      v-if="
                        (selectedAccount.account == 'Instagram' ||
                          'LinkedIn') &&
                        selectedAccount.account != 'Facebook'
                      "
                    >
                      <button
                        type="button"
                        class="mt-4 ml-1 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Posts
                      </button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- Add Stream Sidebar Ends Here -->
  <div v-if="showStreams">
    <SocialMediaStreamHeader />
    <hr class="w-[22.333333%] ml-[1.6rem] mt-1" />
    <SocialMediaStream :showPosts="showPosts" :showEvents="showEvents" :showTimeline="showTimeline" :showMentions="showMentions" />
  </div>
  <SocialMediaStreamRefresh />
</template>
<script setup lang="ts">
import {
  CheckIcon,
  ChevronUpDownIcon,
  PlusCircleIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/vue/20/solid";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const open = ref(false);
const showStreams = ref(false);
const showPosts = ref(false);
const showTimeline = ref(false);
const showMentions = ref(false);
const showEvents = ref(false);

// List of Integrated Accounts
const integratedAccounts = [
  {
    id: 0,
    name: "Hipsocial Testing",
    icon: UserCircleIcon,
    account: "Facebook",
  },
  { id: 1, name: "Mantra LinkedIn", icon: UserCircleIcon, account: "LinkedIn" },
  {
    id: 2,
    name: "Mantra Instagram",
    icon: UserCircleIcon,
    account: "Instagram",
  },
];
const selectedAccount = ref(integratedAccounts[0]);
</script>
