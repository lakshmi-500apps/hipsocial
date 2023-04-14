<template>
  <div class="flex flex-col lg:pl-64">
    <main class="flex-1">
      <div class="border pb-2">
        <div
          class="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        >
          <span class="font-semibold text-2xl"
            >{{ heading
            }}<span class="ml-2 text-xs text-gray-600">{{
              headingDescription
            }}</span></span
          >
        </div>
       
      </div>

      <div class="mt-6 px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between">
          <div><span class="font-semibold text-2xl">STREAMS</span></div>
          <div>
       
            <Listbox as="div" v-model="selected" >
  
    <div class="relative mt-2">
      <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <span class="block truncate"  >{{ selected.name }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="option in options" :key="option.id" :value="option" v-slot="{ active, selected }" >
            <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ option.name }}</span>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
          </div>
        </div>
        <div>
          <span class="text-xs text-gray-600"
            >Customize your stream by selecting relevant topics and accounts to
            stay up-to-date with the latest news and trends</span
          >
        </div>
      </div>
     
      <div class="ml-[79rem]">  <button @click="open=true" type="button" class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    <PlusCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
   Add Stream
  </button></div>
     <CollectionFaceBook :postMessages="messages" />
    </main>
    <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">


      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="border px-4 sm:px-6">
                    <div class=" flex items-start justify-between">
                      <DialogTitle class=" text-base font-semibold leading-6 text-gray-900">Add a Stream</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="open = false">
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                  <Listbox as="div" v-model="selectedFacebookOption">

    <div class="relative mt-2">
      <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <span class="block truncate"><div class="flex"><div><UserCircleIcon class="h-10 w-10"/></div><div class="text-2xl ml-1">Mantra</div><div class="ml-[-4.9rem] mt-[1.8rem] text-gray-500 text-xs">Facebook</div></div></span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="option in integratedAccounts" :key="option.id" :value="option" v-slot="{ active, selectedFacebookOption }">
            <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <span :class="[selectedFacebookOption ? 'font-semibold' : 'font-normal', 'block truncate']">
              <div class="flex">  <div><component :is="option.icon" :class="['text-dark-400 group-hover:text-dark-500', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" /></div>
                <div>{{ option.name }}</div></div></span>

            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot  } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon,PlusCircleIcon,ArrowPathIcon,MagnifyingGlassIcon,TrashIcon,EllipsisVerticalIcon,XMarkIcon,AdjustmentsHorizontalIcon,
  AtSymbolIcon,CalendarDaysIcon,PhotoIcon,UserCircleIcon,HandThumbUpIcon,ChatBubbleLeftIcon} from '@heroicons/vue/20/solid'

const props = defineProps({ heading: String, headingDescription: String,messages:Array });
const emit=defineEmits(['selectedAccount'])
const options = [
  { id: 1, name: 'View All' },
  { id: 2, name: 'Facebook' },
  { id: 3, name: 'LinkedIn' },
  { id: 4, name: 'Instagram' },
 
]

const selected = ref(options[0])
const selectedValue =()=>{
emit('selectedAccount',selected.value)
}


const integratedAccounts = [
  {id:0,name:'Mantra',icon:UserCircleIcon},
  { id: 1, name: 'Timeline',icon: AdjustmentsHorizontalIcon},
  { id: 2, name: 'Mentions',icon: AtSymbolIcon},
  { id: 3, name: 'Events' ,icon:CalendarDaysIcon},
  { id: 4, name: 'Posts',icon: PhotoIcon}
  
]

const selectedFacebookOption = ref(integratedAccounts[0])
const open = ref(false);


</script>
