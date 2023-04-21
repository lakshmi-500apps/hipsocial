<template>
  <div
    class="w-[22.333333%] ml-[1.6rem] mt-1 pl-1"
    v-for="stream in streamData"
    :key="stream.id"
  >
    <div v-for="data in stream" :key="data.id" class="border p-2 mt-1">
      <div class="flex">
        <div>
          <h5 class="mt-0 mb-1 small" v-if="data.name">
            <span class="font-semibold">{{ "Title" }}:</span> {{ data.name }}
          </h5>
          <h5 class="mt-0 mb-0 small lineheight-12" v-if="data.description">
            <span class="font-semibold">Description: </span>
            {{ data.description }}
          </h5>
        </div>
      </div>
      <div class="mt-1">
        <p class="mb-0 small">
          <span v-if="data.start_time && data.end_time"
            ><span class="font-semibold">{{ "Event Date" }} :</span>
            {{ data.start_time.substring(0, 10) }} -
            {{ data.end_time.substring(0, 10) }}</span
          >
        </p>
        <p class="mb-2 small" v-if="data.place">
          <span class="font-semibold">{{ "Place of Event" }} :</span>
          {{ data.place.name ? `${data.place.name}` : ""
          }}{{
            data.place.location && data.place.location.city
              ? `,${data.place.location.city}`
              : ""
          }}{{
            data.place.location && data.place.location.country
              ? `,${data.place.location.country}`
              : ""
          }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppConfig from "@/app.config";

interface Props {
  showEvents: boolean;
}
// Define Props
const props = withDefaults(defineProps<Props>(), {
  showEvents: false,
});

const streamData = ref([]);
// Call each method to get data of integrated facebook account data
onMounted(async () => {
  await setTimeout(() => {
    if (props.showEvents) getEvents();
  }, 2000);
});

// Get Facebook Events Data
const getEvents = () => {
  console.log("here in eevv called");
  const { data: items } = useAuthLazyFetch(AppConfig.getFaceBookEventsUrl, "");
  streamData.value.push(items.value.data);
};
</script>
