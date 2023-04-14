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
        <nav class="mt-6 px-3">
          <div class="space-y-1">
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
            <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
              {{ item.name }}
              <component :is="item.dropdown" :class="[item.current ? 'text-dark-500' : 'text-dark-400 group-hover:text-dark-500', 'ml-8 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </div>
   <CollectionList :heading="heading" :headingDescription="headingDescription" :messages="messages" />
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
import {
  RectangleGroupIcon,
  ChevronDownIcon
} from "@heroicons/vue/24/outline";

const messages=ref([])
const props=defineProps({heading:String,headingDescription:String})

const projects = [
  { name: "SignUp", href: "#" ,dropdown:ChevronDownIcon},
  { name: "Home", href: "#" },
  { name: "Website  Builder", href: "#" },
  { name: "SEO", href: "#" },
  { name: "Blogs and Content", href: "#" },
  { name: "Social+", href: "#",dropdown:ChevronDownIcon },
  { name: "SEM", href: "#" },
  { name: "Projects", href: "#",dropdown:ChevronDownIcon },
  { name: "Demo1", href: "#" },
  { name: "Streams", href: "#" },
  { name: "Posts", href: "#" },
  { name: "Calendar", href: "#" },
  { name: "Network", href: "#" ,icon: RectangleGroupIcon},
];


onMounted (async () => { await setTimeout(() => {
  getPostMessages();
        }, 2000);})

const getPostMessages=() =>{
  const {data:items} = useAuthLazyFetch('https://my.ap1.500apps.com/pcors?url=https%3A%2F%2Fapi.ap1.500apps.com%2Fhipsocial%2Fv1%2Ffacebook%2F33024%2Fconnections%2Fme%2Fposts%3Faccess_token%3DEAAHjENyerYYBAIGAIKXD10o4jC9qVRgKv0ykfOWXsMitJ9ZBfZAANEVfhMVOD6w2D3U6Km6tF1Om9Vy6dduRiIt9qiLaZAklOw3DQgx2p0J6vOuq5leVisms0kxykRQvTjCWlsXKzYVE600xoKMN2gYbub0A4luAa3BCax1OhdxNe8NyZAtr%26fields%3Dmessage%252Cfrom%257Bpicture%252Cname%257D%252Cupdated_time%252Cfull_picture%252Clikes.summary(1)%257Bid%252Ccan_post%252Cname%252Cpicture%252Cusername%257D%252Ccomments.limit(10).summary(1).order(reverse_chronological)%257Bcomment_count%252Clike_count%252Cmessage%252Cfrom%257Bname%252Cpicture%257D%252Ccreated_time%252Ccomments%257Bmessage%252Cname%252Cfrom%257Bname%252Cpicture%257D%257D%257D%252Cshares%252Cattachments','')
  messages.value=items?.value.data

}

</script>
