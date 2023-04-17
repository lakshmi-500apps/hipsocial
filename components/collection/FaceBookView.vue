<template>
  <div class="w-full overflow-x-hidden h-screen">
    <div>
      <div class="flex">
       
        <div v-if="openPostView" class="mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div >
                    
                    <div class="mt-4">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                      >
                      <ul role="list" >
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border"> <div class="font-semibold text-lg">Posts</div>
  <div class="ml-[9rem]"><ArrowPathIcon class="h-5 w-5"/></div><div><MagnifyingGlassIcon class="h-5 w-5"/></div><div><TrashIcon class="h-5 w-5"/></div><div><EllipsisVerticalIcon class="h-5 w-5"/></div></div>
      <li v-if="postMessages.length>=1" v-for="message in postMessages" :key="message.id" >
       
        <div class="pl-2 border mt-2 mb-2 ml-2 mr-2 " v-if="message.message">
          <div class="mt-1" >{{ message.message }}</div>
         
      <div class="flex"><div><HandThumbUpIcon :class="`${fill_color} h-5 w-5 mt-3 mb-2`" @click="likePost(message.id)"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2 "/></div>
      <div class="ml-[7rem] mt-3">{{ (message.created_time).substring(0,10) }}</div> </div></div>
      </li> 
      <div v-if="postMessages.length ==0 ">  <div class="text-center">
   
   <h3 class="mt-5 text-sm font-semibold text-gray-900 mb-4">No Posts Found</h3>
 </div></div>
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
        <div v-if="openTimelineView" class="ml-3 mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div >
                    
                    <div class="mt-4 ">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                      >
                      <ul role="list" >
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border"> <div class="font-semibold text-lg">Timeline</div>
  <div class="ml-[9rem]"><ArrowPathIcon class="h-5 w-5"/></div><div><MagnifyingGlassIcon class="h-5 w-5"/></div><div><TrashIcon class="h-5 w-5"/></div><div><EllipsisVerticalIcon class="h-5 w-5"/></div></div>
      <li v-if="Timeline.length >=1 " v-for="message in Timeline" :key="message.id" >
       
        <div class="pl-2 border mt-2 mb-2 ml-2 mr-2" v-if="message.message">
         
          <div class="mt-1">{{ message.message }}</div>
         
      <div class="flex"><div><HandThumbUpIcon class="h-5 w-5 mt-3 mb-2" @click="likePost(message.id)"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2 "/></div>
      <div class="ml-[7rem] mt-3">{{ (message.created_time).substring(0,10) }}</div> </div></div>
      </li> 
      <div v-if="Timeline.length ==0 ">  <div class="text-center">
   
   <h3 class="mt-5 text-sm font-semibold text-gray-900 mb-4">Timeline Empty</h3>
 </div></div>
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
        <div v-if="openEventsView" class=" ml-3 mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div >
                    
                    <div class="mt-4 ">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                      >
                      <ul role="list" >
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border"> <div class="font-semibold text-lg">Events</div>
  <div class="ml-[9rem]"><ArrowPathIcon class="h-5 w-5"/></div><div><MagnifyingGlassIcon class="h-5 w-5"/></div><div><TrashIcon class="h-5 w-5"/></div><div><EllipsisVerticalIcon class="h-5 w-5"/></div></div>
      <li v-if="Events.length >=1 " v-for="message in Events" :key="message.id" >
      
        <div class="pl-2 border mt-2 mb-2 ml-2 mr-2" v-if="message.message">
         
          <div class="mt-1">{{ message.message }}</div>
         
      <div class="flex"><div><HandThumbUpIcon class="h-5 w-5 mt-3 mb-2" @click="likePost(message.id)"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2 "/></div>
      <div class="ml-[7rem] mt-3">{{ (message.created_time).substring(0,10) }}</div> </div></div>
      </li> 
      <div v-if="Events.length ==0 ">  <div class="text-center">
   
   <h3 class="mt-5 text-sm font-semibold text-gray-900 mb-4 ">No events Found</h3>
 </div></div>
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
        <div v-if="openMentionView" class=" ml-3 mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div >
                    
                    <div class="mt-4 ">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                      >
                      <ul role="list" >
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border"> <div class="font-semibold text-lg">Mentions</div>
  <div class="ml-[9rem]"><ArrowPathIcon class="h-5 w-5"/></div><div><MagnifyingGlassIcon class="h-5 w-5"/></div><div><TrashIcon class="h-5 w-5"/></div><div><EllipsisVerticalIcon class="h-5 w-5"/></div></div>
      <li v-if="Mentions.length >=1 " v-for="message in Mentions" :key="message.id" >
      
        <div class="pl-2 border mt-2 mb-2 ml-2 mr-2" v-if="message.message">
         
          <div class="mt-1">{{ message.message }}</div>
         
      <div class="flex"><div><HandThumbUpIcon class="h-5 w-5 mt-3 mb-2" @click="likePost(message.id)"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2 "/></div>
      <div class="ml-[7rem] mt-3">{{ (message.created_time).substring(0,10) }}</div> </div></div>
      </li> 
      <div v-if="Mentions.length ==0 ">  <div class="text-center">
   
   <h3 class="mt-5 text-sm font-semibold text-gray-900 mb-4">No Mentions Found</h3>
 </div></div>
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
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import { CheckIcon, ChevronUpDownIcon,PlusCircleIcon,ArrowPathIcon,MagnifyingGlassIcon,TrashIcon,EllipsisVerticalIcon,XMarkIcon,AdjustmentsHorizontalIcon,
  AtSymbolIcon,CalendarDaysIcon,PhotoIcon,UserCircleIcon,HandThumbUpIcon,ChatBubbleLeftIcon} from '@heroicons/vue/24/outline';
  import {  PlusIcon } from '@heroicons/vue/20/solid'
  import AppConfig from "@/app.config";

  let fill_color="fill-state-400";
  
 const props=defineProps({openPostView:Boolean,postMessages:Array,openMentionView:Boolean,Mentions:Array,openTimelineView:Boolean,Timeline:Array,
  openEventsView:Boolean, Events:Array})

  const likePost= (data:any)=>{
  fill_color= fill_color ==="fill-state-400"?"fill-current":"fill-state-400";
  console.log("fil--",fill_color);
  
       const postOptions = {
    body: {
       access_token: "EAAHjENyerYYBAEvykXyhToaBtPn6coJFkBcjzvB9rGQR06Hqf1tSRfl5yMUx6V33df4JWVFQlzlQs0ZAdhcVYX8fZCHudLZCsLOIvPoxhDn4te0qMXSrD4RoLZA1oZBjwD8vWKXCBj2IXeZAUAV1ZCaSa8IdUrIE0DkTTNuhZAoED8YD39zHkvP5sORXl2D630MZD",
       id: `${data}`},
  };
    const { data: items } = useAuthLazyFetchPost(AppConfig.likeFaceBookPost, postOptions); 
  }
</script>
