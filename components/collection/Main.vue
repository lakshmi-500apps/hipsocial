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
            >Sign Up</button>

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

    <CollectionList
      :heading="heading"
      :headingDescription="headingDescription"
      :messages="messages"
      :timelinePosts="timelinePosts"
      :events="events"
      :Mentions="Mentions"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
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
import AppConfig from "@/app.config";

// Declaring Variables
const messages = ref([]);
const timelinePosts = ref([]);
const events = ref([]);
const Mentions = ref([]);
const getOptions={
    params:{
      fields:"message,from{picture,name},updated_time,full_picture,likes.summary(1){id,can_post,name,picture,username},comments.limit(10).summary(1).order(reverse_chronological){comment_count,like_count,message,from{name,picture},created_time,comments{message,name,from{name,picture}}},shares,attachments"
    }
  }

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
  const { data: items } = useAuthLazyFetch(AppConfig.getFaceBookPostsUrl, getOptions);
  messages.value = items.value.data;
};

// Facebook Timeline Data get call
const getTimelineMessages = () => {
  const { data: items } = useAuthLazyFetch(
    AppConfig.getFaceBookTimelineUrl,getOptions
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
