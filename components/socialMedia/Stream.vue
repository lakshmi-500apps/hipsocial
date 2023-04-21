<template>
  <!-- <component :is="is" /> -->
  <div class="">
    <div v-if="(showPosts) || (showTimeline) || (showMentions)">
      <SocialMediaFacebookStatus :showPosts="showPosts" :showTimeline="showTimeline" :showMentions="showMentions" />
    </div>
    <div v-if="(showEvents)"><SocialMediaFacebookEvents :showEvents="showEvents" /></div>
  </div>
  <SocialMediaStreamFooter />
</template>
<script setup lang="ts">

interface Props {
  showPosts: boolean;
  showEvents: boolean;
  showTimeline: boolean;
  showMentions: boolean;
}
// Define Props
const props = withDefaults(defineProps<Props>(), {
  showPosts: false,
  showEvents: false,
  showTimeline: false,
  showMentions: false,
});
</script>
