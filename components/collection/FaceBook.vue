<!-- <template>
    <div class="mt-8 hidden sm:block">
        <div
          class="inline-block min-w-full border-b border-gray-200 align-middle"
        ><ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border"><div><PlusCircleIcon class="h-6 w-5"/></div> <div>Posts</div>
  <div class="ml-[19rem]"><ArrowPathIcon class="h-5 w-5"/></div><div><MagnifyingGlassIcon class="h-5 w-5"/></div><div><TrashIcon class="h-5 w-5"/></div><div><EllipsisVerticalIcon class="h-5 w-5"/></div></div>
      <li v-for="message in postMessages" :key="message.email" ><div class="pl-2 border mt-2 mb-2 ml-2 mr-2">{{ message.message }}
      <div class="flex"><div><HandThumbUpIcon class="h-5 w-5 mt-3 mb-2"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2 "/></div>
      <div class="ml-[18rem] mt-3">{{ (message.updated_time).substring(0,10) }}</div> </div></div>
      </li> 
    </li>
  </ul></div>
      </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import { CheckIcon, ChevronUpDownIcon,PlusCircleIcon,ArrowPathIcon,MagnifyingGlassIcon,TrashIcon,EllipsisVerticalIcon,XMarkIcon,AdjustmentsHorizontalIcon,
  AtSymbolIcon,CalendarDaysIcon,PhotoIcon,UserCircleIcon,HandThumbUpIcon,ChatBubbleLeftIcon} from '@heroicons/vue/20/solid';

  
 const props=defineProps({postMessages:Array,Mentions:Array,Timeline:Array,Events:Array})
</script> -->




<template>
  <div class="w-full overflow-x-hidden h-screen">
      <div>
          <div >      
              <div class="py-8">             
                  <div class="hidden sm:block">              
                      <div>
                          <div class="min-h-full">
                              <div class="py-10">
                                  <!-- grid section -->
                                  <div class="sm:px-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:px-8">
                                      <!-- first column list -->
                                      <div class="mt-4">
                                          <div class="flex items-center justify-between mb-2">
                                            

                                              <PlusIcon class="w-6 h-6 text-indigo-600 rounded" />
                                          </div>
                                          <ul role="list" class="space-y-4 mb-6">
                                              <!-- list loop card -->
                                              
                                          </ul>
                                          <div class="p-4 bg-white shadow sm:rounded border border-gray-100 mb-6">
                                              <div>
                                                  <div class="flex space-x-3">
                                                      <div class="min-w-0 flex-1">
                                                          <h2 class="leading-[1.5] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mr-2">User should receive a daily digest email</h2>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="mt-2 text-[14px] truncate text-gray-600">Dedicated form for a category of users that will perform actions.</div>
                                              <div class="flex justify-between pt-5">
                                                  <div class="overflow-hidden">
                                                      <button
                                                          type="button"
                                                          class="rounded-full p-1 text-indigo-600 shadow-sm border-gray-400 hover:border-gray-300 border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                      >
                                                          <PlusIcon class="h-5 w-5" aria-hidden="true" />
                                                      </button>
                                                  </div>

                                                  <div class="flex items-center">
                                                      <div class="flex items-center">
                                                          <div class="flex items-center mr-2">
                                                              <CalendarIcon class="h-5 w-5 text-yellow-600 mr-1" aria-hidden="true" />
                                                              <p class="text-sm text-yellow-600">Mar 27</p>
                                                          </div>
                                                          <div class="flex items-center mr-2">
                                                              <ChatBubbleOvalLeftIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                              <p class="text-sm text-gray-400">7</p>
                                                          </div>
                                                          <LinkIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="p-4 bg-white shadow sm:rounded border border-gray-100">
                                              <div>
                                                  <div class="flex space-x-3">
                                                      <div class="min-w-0 flex-1">
                                                          <h2 class="leading-[1.5] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mr-2">
                                                              Change license and remove references to products
                                                          </h2>
                                                      </div>
                                                  </div>
                                              </div>

                                              <div class="flex justify-between pt-5">
                                                  <div class="overflow-hidden">
                                                      <ul role="list" class="">
                                                          <li v-for="position in positions" :key="position.id">
                                                              <div class="mt-4 flex-shrink-0 sm:mt-0">
                                                                  <div class="flex -space-x-1 overflow-hidden">
                                                                      <img
                                                                          v-for="applicant in position.applicants"
                                                                          :key="applicant.email"
                                                                          class="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                                                                          :src="applicant.imageUrl"
                                                                          :alt="applicant.name"
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>

                                                  <div class="flex items-center">
                                                      <div class="flex items-center">
                                                          <div class="flex items-center mr-2">
                                                              <HeartIcon class="h-5 w-5 text-gray-500 mr-1" aria-hidden="true" />
                                                              <p class="text-sm text-gray-400">4</p>
                                                          </div>
                                                          <div class="flex items-center mr-2">
                                                              <ChatBubbleOvalLeftIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                              <p class="text-sm text-gray-400">7</p>
                                                          </div>
                                                          <LinkIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="mt-4">
                                          <div class="flex items-center justify-between mb-2">
                                              <h4 class="leading-[1.5] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mr-2">In Progress Ã¢Å“Å’Ã¯Â¸Â</h4>

                                              <PlusIcon class="w-6 h-6 text-indigo-600 rounded" />
                                          </div>
                                          <ul role="list" class="space-y-4 mb-6">
                                          
                                              <li v-for="question in questions" :key="question.id" class="bg-white shadow sm:rounded border border-gray-100">
                                                 
                                                  <div class="p-4">
                                                      <div>
                                                          <div class="flex space-x-3">
                                                              <div class="min-w-0 flex-1">
                                                                  <h2 class="leading-[1.5] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mr-2">Managing teams (book)</h2>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="mt-2 text-[14px] truncate text-gray-600">#7764 created by <b class="text-gray-800">markus-james</b></div>
                                                      <div class="flex justify-between pt-5 border-b border-gray-200 py-4">
                                                          <div class="overflow-hidden">
                                                              <ul role="list" class="">
                                                                  <li v-for="position in positions" :key="position.id">
                                                                      <div class="mt-4 flex-shrink-0 sm:mt-0">
                                                                          <div class="flex -space-x-1 overflow-hidden">
                                                                              <img
                                                                                  v-for="applicant in position.applicants"
                                                                                  :key="applicant.email"
                                                                                  class="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                                                                                  :src="applicant.imageUrl"
                                                                                  :alt="applicant.name"
                                                                              />
                                                                          </div>
                                                                      </div>
                                                                  </li>
                                                              </ul>
                                                          </div>

                                                          <div class="flex items-center">
                                                              <div class="flex items-center">
                                                                  <div class="flex items-center mr-2">
                                                                      <BoltIcon class="h-5 w-5 text-gray-500 mr-1" aria-hidden="true" />
                                                                      <p class="text-sm text-gray-400">4</p>
                                                                  </div>

                                                                  <LinkIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="flex items-center py-3 border-b border-gray-200">
                                                          <CheckIcon class="w-5 h-5 text-green-600 mr-2" />
                                                          <p class="text-sm text-gray-400 line-through">Implement new designs</p>
                                                      </div>
                                                      <div class="flex items-center py-3 border-b border-gray-200">
                                                          <CheckIcon class="w-5 h-5 text-gray-500 mr-2" />
                                                          <p class="text-sm text-gray-500">Implement new designs</p>
                                                      </div>
                                                      <div class="flex items-center pt-3">
                                                          <CheckIcon class="w-5 h-5 text-gray-500 mr-2" />
                                                          <p class="text-sm text-gray-500">Implement new designs</p>
                                                      </div>
                                                  </div>
                                                  <!-- card footer section -->
                                              </li>
                                          </ul>
                                          <div class="p-4 bg-white shadow sm:rounded border border-gray-100 mb-6">
                                              <div>
                                                  <div class="flex space-x-3">
                                                      <div class="min-w-0 flex-1">
                                                          <h2 class="leading-[1.5] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mr-2">User should receive a daily digest email</h2>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="mt-2 text-[14px] truncate text-gray-600">Dedicated form for a category of users that will perform actions.</div>
                                              <img src="https://preview.cruip.com/mosaic/images/task-image-01.jpg" width="400" class="pt-3" />
                                              <div class="flex justify-between pt-5">
                                                  <div class="overflow-hidden">
                                                      <ul role="list" class="">
                                                          <li v-for="position in positions" :key="position.id">
                                                              <div class="mt-4 flex-shrink-0 sm:mt-0">
                                                                  <div class="flex -space-x-1 overflow-hidden">
                                                                      <img
                                                                          v-for="applicant in position.applicants"
                                                                          :key="applicant.email"
                                                                          class="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                                                                          :src="applicant.imageUrl"
                                                                          :alt="applicant.name"
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>

                                                  <div class="flex items-center">
                                                      <div class="flex items-center">
                                                          <div class="flex items-center mr-2">
                                                              <CalendarIcon class="h-5 w-5 text-yellow-600 mr-1" aria-hidden="true" />
                                                              <p class="text-sm text-yellow-600">Mar 27</p>
                                                          </div>

                                                          <LinkIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="p-4 bg-white shadow sm:rounded border border-gray-100">
                                              <div>
                                                  <div class="flex space-x-3">
                                                      <div class="min-w-0 flex-1">
                                                          <h2 class="leading-[1.5] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mr-2">
                                                              Change license and remove references to products
                                                          </h2>
                                                      </div>
                                                  </div>
                                              </div>

                                              <div class="flex justify-between pt-5">
                                                  <div class="overflow-hidden">
                                                      <ul role="list" class="">
                                                          <li v-for="position in positions" :key="position.id">
                                                              <div class="mt-4 flex-shrink-0 sm:mt-0">
                                                                  <div class="flex -space-x-1 overflow-hidden">
                                                                      <img
                                                                          v-for="applicant in position.applicants"
                                                                          :key="applicant.email"
                                                                          class="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                                                                          :src="applicant.imageUrl"
                                                                          :alt="applicant.name"
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>

                                                  <div class="flex items-center">
                                                      <div class="flex items-center">
                                                          <div class="flex items-center mr-2">
                                                              <HeartIcon class="h-5 w-5 text-gray-500 mr-1" aria-hidden="true" />
                                                              <p class="text-sm text-gray-400">4</p>
                                                          </div>
                                                          <div class="flex items-center mr-2">
                                                              <ChatBubbleOvalLeftIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                              <p class="text-sm text-gray-400">7</p>
                                                          </div>
                                                          <LinkIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="mt-4">
                                          <div class="flex items-center justify-between mb-2">
                                              <h4 class="leading-[1.5] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mr-2">Completed Ã°Å¸Å½â€°</h4>

                                              <PlusIcon class="w-6 h-6 text-indigo-600 rounded" />
                                          </div>
                                          <ul role="list" class="space-y-4 mb-6">
                                              <!-- list loop card -->
                                              <li v-for="question in questions" :key="question.id" class="bg-white shadow sm:rounded border border-gray-100">
                                                  <!-- card body section -->
                                                  <div class="p-4">
                                                      <div>
                                                          <div class="flex space-x-3">
                                                              <div class="min-w-0 flex-1">
                                                                  <h2 class="leading-[1.5] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mr-2">Managing teams (book)</h2>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="mt-2 text-[14px] truncate text-gray-600">#7764 created by <b class="text-gray-800">markus-james</b></div>
                                                      <div class="flex justify-between pt-5">
                                                          <div class="overflow-hidden">
                                                              <ul role="list" class="">
                                                                  <li v-for="position in positions" :key="position.id">
                                                                      <div class="mt-4 flex-shrink-0 sm:mt-0">
                                                                          <div class="flex -space-x-1 overflow-hidden">
                                                                              <img
                                                                                  v-for="applicant in position.applicants"
                                                                                  :key="applicant.email"
                                                                                  class="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                                                                                  :src="applicant.imageUrl"
                                                                                  :alt="applicant.name"
                                                                              />
                                                                          </div>
                                                                      </div>
                                                                  </li>
                                                              </ul>
                                                          </div>

                                                          <div class="flex items-center">
                                                              <div class="flex items-center">
                                                                  <div class="flex items-center mr-2">
                                                                      <HeartIcon class="h-5 w-5 text-gray-500 mr-1" aria-hidden="true" />
                                                                      <p class="text-sm text-gray-400">4</p>
                                                                  </div>
                                                                  <div class="flex items-center mr-2">
                                                                      <ChatBubbleOvalLeftIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                                      <p class="text-sm text-gray-400">7</p>
                                                                  </div>
                                                                  <LinkIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <!-- card footer section -->
                                              </li>
                                              <div class="p-4 bg-white shadow sm:rounded border border-gray-100">
                                                  <div>
                                                      <div class="flex space-x-3">
                                                          <div class="min-w-0 flex-1">
                                                              <h2 class="leading-[1.5] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mr-2">Managing teams (book)</h2>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="mt-2 text-[14px] truncate text-gray-600">#7764 created by <b class="text-gray-800">markus-james</b></div>
                                                  <div class="flex justify-between pt-5 border-b border-gray-200 py-4">
                                                      <div class="overflow-hidden">
                                                          <ul role="list" class="">
                                                              <li v-for="position in positions" :key="position.id">
                                                                  <div class="mt-4 flex-shrink-0 sm:mt-0">
                                                                      <div class="flex -space-x-1 overflow-hidden">
                                                                          <img
                                                                              v-for="applicant in position.applicants"
                                                                              :key="applicant.email"
                                                                              class="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                                                                              :src="applicant.imageUrl"
                                                                              :alt="applicant.name"
                                                                          />
                                                                      </div>
                                                                  </div>
                                                              </li>
                                                          </ul>
                                                      </div>

                                                      <div class="flex items-center">
                                                          <div class="flex items-center">
                                                              <div class="flex items-center mr-2">
                                                                  <BoltIcon class="h-5 w-5 text-gray-500 mr-1" aria-hidden="true" />
                                                                  <p class="text-sm text-gray-400">4</p>
                                                              </div>

                                                              <LinkIcon class="h-5 w-5 text-gray-500 mr-1" />
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="flex items-center py-3 border-b border-gray-200">
                                                      <CheckIcon class="w-5 h-5 text-green-600 mr-2" />
                                                      <p class="text-sm text-gray-400 line-through">Implement new designs</p>
                                                  </div>
                                                  <div class="flex items-center pt-3">
                                                      <CheckIcon class="w-5 h-5 text-gray-500 mr-2" />
                                                      <p class="text-sm text-gray-500 line-through">Implement new designs</p>
                                                  </div>
                                              </div>
                                          </ul>
                                      </div>
                            
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChatBubbleLeftEllipsisIcon, CodeBracketIcon, EllipsisVerticalIcon, EyeIcon, FlagIcon, MagnifyingGlassIcon, PlusIcon, ShareIcon, StarIcon } from '@heroicons/vue/20/solid'
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
  SparklesIcon,
  PencilIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  LinkIcon,
  CalendarIcon,
  BoltIcon,
  CheckIcon,
} from '@heroicons/vue/24/outline'


</script>


