<template>
  <div class="flex">
    <div
      class="w-[22.333333%] ml-[1.6rem] mt-1 pl-1"
      v-for="stream in streamData"
      :key="stream.id"
    >
      <div v-for="data in stream" :key="data.id" class="border p-1">
        <div class="flex mt-1">
          <div>
            <img class="h-7 w-8 pl-1" :src="data.from.picture.data.url" />
          </div>
          <div class="ml-2">{{ data.from.name }}</div>
        </div>
        <div class="mt-1 pl-2">{{ data.message }}</div>
        <div v-if="data.full_picture">
          <img class="h-15 w-15" :src="data.full_picture" />
        </div>
        <div class="flex">
          <div>
            <HandThumbUpIcon
              :class="`h-5 w-5 mt-3 mb-2 ${fill_color}`"
              @click="likePost(message.id)"
            />
          </div>
          <div><ChatBubbleLeftIcon class="h-5 w-5 mt-3 mb-2 ml-2" /></div>
        </div>
        <div class="ml-[13rem]">{{ data.updated_time.substring(0, 10) }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppConfig from "@/app.config";
import { HandThumbUpIcon, ChatBubbleLeftIcon } from "@heroicons/vue/24/outline";

const streamData = ref([]);

interface Props {
  showPosts: boolean;
  showTimeline: boolean;
  showMentions: boolean;
}
// Define Props
const props = withDefaults(defineProps<Props>(), {
  showPosts: false,
  showTimeline: false,
  showMentions: false,
});

const getOptions = {
  params: {
    fields:
      "message,from{picture,name},updated_time,full_picture,likes.summary(1){id,can_post,name,picture,username},comments.limit(10).summary(1).order(reverse_chronological){comment_count,like_count,message,from{name,picture},created_time,comments{message,name,from{name,picture}}},shares,attachments",
  },
};

// Call each method to get data of integrated facebook account data
onMounted(async () => {
  await setTimeout(() => {
    if (props.showPosts) getPostMessages();
    if (props.showTimeline) getTimeline();
    if (props.showMentions) getMentions();
  }, 2000);
});

watch(props, (newToken) => {
  if (newToken.showPosts) getPostMessages();
  if (newToken.showTimeline) getTimeline();
  if (newToken.showMentions) getMentions();
});

// To get Facebook Posts Data
const getPostMessages = () => {
  const { data: items } = useAuthLazyFetch(
    AppConfig.getFaceBookPostsUrl,
    getOptions
  );
  streamData.value.push(items.value.data);
};

// Facebook Timeline Data get call
const getTimeline = () => {
   const { data: items } = useAuthLazyFetch(
    AppConfig.getFaceBookTimelineUrl,
    getOptions
  );
  streamData.value.push(items.value.data);
};

// Get FaceBook Mentions Data
const getMentions = () => {
  const { data: items } = useAuthLazyFetch(
    AppConfig.getFaceBookMentionsUrl,
    ""
  );
  streamData.value.push(items.value.data);
};
</script>
