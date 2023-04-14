<template>
  <div class="w-full overflow-x-hidden h-screen">
    <div>
      <div class="flex">
        <div v-if="openPostView" class="mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div class="sm:px-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:px-8">
                    
                    <div class="mt-4">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                      >
                      <ul role="list">
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border"> <div class="font-semibold text-lg">Posts</div>
  <div class="ml-[9rem]"><ArrowPathIcon class="h-5 w-5"/></div><div><MagnifyingGlassIcon class="h-5 w-5"/></div><div><TrashIcon class="h-5 w-5"/></div><div><EllipsisVerticalIcon class="h-5 w-5"/></div></div>
      <li v-for="message in postMessages" :key="message.email" >
       
        <div class="pl-2 border mt-2 mb-2 ml-2 mr-2">
          <div class="flex mt-1"><div><img class="h-8 w-8" :src="message.from.picture.data.url"/></div><div class="ml-2">{{message.from.name}}</div></div>
          <div class="mt-1">{{ message.message }}</div>
      <div class="flex"><div><HandThumbUpIcon class="h-5 w-5 mt-3 mb-2"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2 "/></div>
      <div class="ml-[8rem] mt-3">{{ (message.updated_time).substring(0,10) }}</div> </div></div>
      </li> 
    </li>
  </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="openPostView" class="mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div class="sm:px-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:px-8">
                    
                    <div class="mt-4">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                      >
                    fes
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
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import { CheckIcon, ChevronUpDownIcon,PlusCircleIcon,ArrowPathIcon,MagnifyingGlassIcon,TrashIcon,EllipsisVerticalIcon,XMarkIcon,AdjustmentsHorizontalIcon,
  AtSymbolIcon,CalendarDaysIcon,PhotoIcon,UserCircleIcon,HandThumbUpIcon,ChatBubbleLeftIcon} from '@heroicons/vue/24/outline';
  import {  PlusIcon } from '@heroicons/vue/20/solid'
  
 const props=defineProps({openPostView:Boolean,postMessages:Array,openMentionView:Boolean,Mentions:Array,openTimelineView:Boolean,Timeline:Array,
  openEventsView:Boolean, Events:Array})
</script>
