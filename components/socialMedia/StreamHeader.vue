<template>
  <div class="flex border w-[22.333333%] ml-[1.6rem] justify-center pt-2">
      <div class="font-semibold">Stream</div>
      <div class="ml-[10.6rem]">
          <Menu as="div" class="relative inline-block text-left">
              <div>
                  <MenuButton
                      class="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  >
                      <ArrowPathIcon class="h-5 w-5 text-black" />
                  </MenuButton>
              </div>

              <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
              >
                  <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div v-for="refresh in refreshOptions" :key="refresh.name" class="py-1">
                          <MenuItem v-slot="{ active }">
                              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" @click="refreshItem(refresh.value)">{{ refresh.name }}</a>
                          </MenuItem>
                      </div>
                  </MenuItems>
              </transition>
          </Menu>
      </div>
      <div><MagnifyingGlassIcon class="h-5 w-5" /></div>
      <div><TrashIcon class="h-5 w-5" /></div>
      <div>
          <Menu as="div" class="relative inline-block text-left">
              <div>
                  <MenuButton
                      class="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  >
                      <EllipsisVerticalIcon class="text-black h-5 w-5" aria-hidden="true" />
                  </MenuButton>
              </div>

              <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
              >
                  <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div class="py-1">
                          <MenuItem v-slot="{ active }">
                              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Text Only</a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Text and Media</a>
                          </MenuItem>
                      </div>
                  </MenuItems>
              </transition>
          </Menu>
      </div>
  </div>
</template>
<script setup lang="ts">
import { MagnifyingGlassIcon, TrashIcon, ArrowPathIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const refreshOptions = [
  { name: 'Every 2 Mins', value: 2 },
  { name: 'Every 5 Mins', value: 5 },
  { name: 'Every 10 Mins', value: 10 },
  { name: 'Every 15 Mins', value: 15 },
  { name: 'Every 30 Mins', value: 30 },
]

const refreshItem = (data: any) => {
  console.log('here', data)
}

const deleteStream=()=>{

}
</script>