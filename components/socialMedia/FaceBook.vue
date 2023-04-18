<template>
  <div class="w-full overflow-x-hidden h-screen">
    <div>
      <div class="flex">
         <!-- Gridster View of Streams Starts here -->
         <!-- On click of Posts we display Facebook Posts Data
           Posts View Starts Here -->
        <div v-if="openPostView" class="mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div >
                    
                    <div class="mt-4">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                        id="posts" >
                      <ul role="list" >
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border" > <div class="font-semibold text-lg"  >Posts</div>
   <SocialMediaStreamHeader @deleteGridster="deleteGridster('posts')"/></div>
     
  <li v-if="postMessages.length>=1" v-for="message in postMessages" :key="message.id" >
       
        <div class="pl-2 border mt-2 mb-2 ml-2 mr-2 " v-if="message.message">
          <div class="flex mt-1"><div><img class="h-6 w-6" :src="message.from.picture.data.url"/></div><div class="ml-2 mt-1">{{message.from.name}}</div></div>
          <div class="mt-1" >{{ message.message }}</div>
          <div v-if="message.full_picture"><img class="h-12 w-12"  :src="message.full_picture"/></div>
      <div class="flex"><div><HandThumbUpIcon :class="`h-5 w-5 mt-3 mb-2 ${fill_color}`" @click="likePost(message.id)"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2" @click="enablecomment(message)"/></div>
      <div v-for="input in commentArray" :key="input"><input class="border ml-2 mt-3 pl-2" v-if="input"  v-model="comment" placeholder="Add Comment" @blur="addComment(message.id)"/></div>
      <div class="ml-[7rem] mt-3">{{ (message.updated_time).substring(0,10) }}</div> </div></div>
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
        <!-- Posts View Ends Here -->

        <!-- On click of Timeline button in Add Stream Sidebar we will display Timeline Data
        TimeLine View Starts Here -->
        <div v-if="openTimelineView" class="ml-3 mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div >
                    
                    <div class="mt-4 ">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                        id="timeline"
                      >
                      <ul role="list" >
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border"> <div class="font-semibold text-lg">Timeline</div>
   <SocialMediaStreamHeader @deleteGridster="deleteGridster('timeline')"/></div>      <li v-if="Timeline.length >=1 " v-for="message in Timeline" :key="message.id" >
       
        <div class="pl-2 border mt-2 mb-2 ml-2 mr-2" v-if="message.message">
          <div class="flex mt-1"><div><img class="h-6 w-6" :src="message.from.picture.data.url"/></div><div class="ml-2 mt-1">{{message.from.name}}</div></div>
          <div class="mt-1">{{ message.message }}</div>
          <div v-if="message.full_picture"><img class="h-12 w-12"  :src="message.full_picture"/></div>
      <div class="flex"><div><HandThumbUpIcon class="h-5 w-5 mt-3 mb-2" @click="likePost(message.id)"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2 " @click="enableCommentInput=true"/></div>
      <div><input class="border ml-2 mt-3 pl-2" v-if="enableCommentInput" v-model="comment" placeholder="Add Comment" @blur="addComment(message.id)"/></div>

      <div class="ml-[7rem] mt-3">{{ (message.updated_time).substring(0,10) }}</div> </div></div>
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
        <!-- TimeLine View Ends Here -->

        <!-- Events View Starts Here -->
        <div v-if="openEventsView" class=" ml-3 mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div >
                    
                    <div class="mt-4 ">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                        id="events"
                      >
                      <ul role="list" >
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border"> <div class="font-semibold text-lg">Events</div>
   <SocialMediaStreamHeader @deleteGridster="deleteGridster('events')"/></div>         <li v-if="Events.length >=1 " v-for="message in Events" :key="message.id" >
      
        <div class="pl-2 border mt-2 mb-2 ml-2 mr-2" v-if="message.message">
         
          <div class="mt-1">{{ message.message }}</div>
         
      <div class="flex"><div><HandThumbUpIcon class="h-5 w-5 mt-3 mb-2" @click="likePost(message.id)"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2 " @click="enableCommentInput=true"/></div>
      <div><input class="border ml-2 mt-3 pl-2" v-if="enableCommentInput" v-model="comment" placeholder="Add Comment" @blur="addComment(message.id)"/></div>

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
         <!-- Events View Ends Here -->

         <!-- Mentions View Starts Here -->
        <div v-if="openMentionView" class=" ml-3 mt-[-2.75rem]">
          <div class="hidden sm:block">
            <div>
              <div class="min-h-full">
                <div class="py-10">
                  <div >
                    
                    <div class="mt-4 ">
                    
                      <div
                        class="p-4 bg-white shadow sm:rounded border border-gray-100"
                        id="mentions"
                      >
                      <ul role="list" >
    <li  class="border ml-2 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
   <div class="pl-2 pt-1 pb-1 flex border"> <div class="font-semibold text-lg">Mentions</div>
   <SocialMediaStreamHeader @deleteGridster="deleteGridster('mentions')"/></div>         <li v-if="Mentions.length >=1 " v-for="message in Mentions" :key="message.id" >
      
        <div class="pl-2 border mt-2 mb-2 ml-2 mr-2" v-if="message.message">
         
          <div class="mt-1">{{ message.message }}</div>
         
      <div class="flex"><div><HandThumbUpIcon class="h-5 w-5 mt-3 mb-2" @click="likePost(message.id)"/></div><div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2 " @click="enableCommentInput=true"/></div>
      <div><input class="border ml-2 mt-3 pl-2" v-if="enableCommentInput" v-model="comment" placeholder="Add Comment" @blur="addComment(message.id)"/></div>

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
         <!-- Mentions View Ends Here -->
      </div>
    </div>
     <!-- Gridster View of Streams Ends here -->
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import { CheckIcon, ChevronUpDownIcon,PlusCircleIcon,ArrowPathIcon,MagnifyingGlassIcon,TrashIcon,EllipsisVerticalIcon,XMarkIcon,AdjustmentsHorizontalIcon,
  AtSymbolIcon,CalendarDaysIcon,PhotoIcon,UserCircleIcon,HandThumbUpIcon,ChatBubbleLeftIcon} from '@heroicons/vue/24/outline';
  import {  PlusIcon } from '@heroicons/vue/20/solid'
  import AppConfig from "@/app.config";

let fill_color="fill-state-400";
const comment=ref('');
const enableCommentInput=ref(false);
  
// Define Props
const props=defineProps({openPostView:Boolean,postMessages:Array,openMentionView:Boolean,Mentions:Array,openTimelineView:Boolean,Timeline:Array,
  openEventsView:Boolean, Events:Array})


//  On click of Like button we are updating status by liking the post
const likePost= (data:any)=>{
  fill_color= fill_color ==="fill-state-400"?"fill-current":"fill-state-400";
  
       const postOptions = {
    body: {
       access_token: "EAAHjENyerYYBALIRdIQzBvtp78f3OpnPjkPiKZB96CCiubU9zCxeIhKGhWAhkoRmJSubcixZAZBxZCPELVyweZATu32loikOrJCkZAS1atnyTLP3ns8zHnMOfmHuznJxmxqp4ulHNMlTXqjSRIfjQj5pNpI5lznAbAQwE2UG7O7EA6baUnXiBp",
       id: `${data}`},
  };
    const { data: items } = useAuthLazyFetchPost(AppConfig.likeFaceBookPost, postOptions); 
  }

// Add Comment 
  const addComment =(data:any)=>{
    const postOptions={
      body:{
 access_token: "EAAHjENyerYYBALIRdIQzBvtp78f3OpnPjkPiKZB96CCiubU9zCxeIhKGhWAhkoRmJSubcixZAZBxZCPELVyweZATu32loikOrJCkZAS1atnyTLP3ns8zHnMOfmHuznJxmxqp4ulHNMlTXqjSRIfjQj5pNpI5lznAbAQwE2UG7O7EA6baUnXiBp",
  message: comment.value
      }
    }
    const { data: items } = useAuthLazyFetchPost(`${AppConfig.addFaceBookComment}/${data}`, postOptions); 
    comment.value='';
    enableCommentInput.value=false
  }

  const enablecomment=(data:any) =>{
 const commentArray=  (props.postMessages?.map((comment) => comment.id === data.id ?  enableCommentInput.value = true :false )) ;

  }

  const deleteGridster =(data:any) =>{
    const element = document.getElementById(data);
   element.remove();
  }
</script>
