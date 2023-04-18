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

        <div class="mt-6 px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between">
            <div><span class="font-semibold text-xl">STREAMS</span></div>
          </div>
          <div>
            <span class="text-xs text-gray-600"
              >Customize your stream by selecting relevant topics and accounts
              to stay up-to-date with the latest news and trends</span
            >
          </div>
        </div>

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

        <!-- View of seleted streams data in gridster view Starts Here -->
        <SocialMediaFaceBook
          :postMessages="messages"
          :openPostView="openPostView"
          :Timeline="timelinePosts"
          :openTimelineView="openTimelineView"
          :Events="events"
          :openEventsView="openEventsView"
          :Mentions="Mentions"
          :openMentionView="openMentionView"
        />
        <!-- View of seleted streams data in gridster view Ends Here -->
      </main>

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
                                    Hipsocial Testing
                                  </div>
                                  <div
                                    class="ml-[-11.4rem] mt-[1.8rem] text-gray-500 text-xs"
                                  >
                                    Facebook
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
                        <button
                          type="button"
                          @click="(openPostView = true), (open = false)"
                          class="mt-4 ml-1 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Posts
                        </button>
                        <button
                          type="button"
                          @click="(openMentionView = true), (open = false)"
                          class="ml-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Mentions
                        </button>
                        <button
                          type="button"
                          @click="(openEventsView = true), (open = false)"
                          class="ml-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Events
                        </button>
                        <button
                          type="button"
                          @click="(openTimelineView = true), (open = false)"
                          class="ml-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Timeline
                        </button>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
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
import { RectangleGroupIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import {
  CheckIcon,
  ChevronUpDownIcon,
  PlusCircleIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/vue/20/solid";
import AppConfig from "@/app.config";

// Declaring Variables
const messages = ref([]);
const timelinePosts = ref([]);
const events = ref([]);
const Mentions = ref([]);
const openPostView = ref(false);
const openTimelineView = ref(false);
const openEventsView = ref(false);
const openMentionView = ref(false);
const open = ref(false);

const getOptions = {
  params: {
    fields:
      "message,from{picture,name},updated_time,full_picture,likes.summary(1){id,can_post,name,picture,username},comments.limit(10).summary(1).order(reverse_chronological){comment_count,like_count,message,from{name,picture},created_time,comments{message,name,from{name,picture}}},shares,attachments",
  },
};

interface Props {
  heading: string;
  headingDescription?: string;
}
// Define Props
const props = withDefaults(defineProps<Props>(), {
  heading: "HipSocial Streams",
});

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

// List of Integrated Accounts
const integratedAccounts = [
  { id: 0, name: "Hipsocial Testing", icon: UserCircleIcon },
  { id: 1, name: "Mantra LinkedIn", icon: UserCircleIcon },
  { id: 2, name: "Mantra Instagram", icon: UserCircleIcon },
];
const selectedAccount = ref(integratedAccounts[0]);

// Call each method to get data of integrated facebook account data
onMounted(async () => {
  await setTimeout(() => {
    getPostMessages();
    getTimelineMessages();
    getEvents();
    getMentions();
  }, 2000);
});

// To get Facebook Posts Data
const getPostMessages = () => {
  const { data: items } = useAuthLazyFetch(
    AppConfig.getFaceBookPostsUrl,
    getOptions
  );
  messages.value = items.value.data;
};

// Facebook Timeline Data get call
const getTimelineMessages = () => {
  const { data: items } = useAuthLazyFetch(
    AppConfig.getFaceBookTimelineUrl,
    getOptions
  );
  timelinePosts.value = items.value.data;
};

// Get Facebook Events Data
const getEvents = () => {
  const { data: items } = useAuthLazyFetch(AppConfig.getFaceBookEventsUrl, "");
  events.value = items.value.data;
};

// Get FaceBook Mentions Data
const getMentions = () => {
  const { data: items } = useAuthLazyFetch(
    AppConfig.getFaceBookMentionsUrl,
    ""
  );
  Mentions.value = items.value.data;
};
</script>
