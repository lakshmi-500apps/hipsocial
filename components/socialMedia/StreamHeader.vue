<template>
  <div class="ml-[9rem]"><ArrowPathIcon class="h-5 w-5" /></div>
  <div><MagnifyingGlassIcon class="h-5 w-5" /></div>
  <div><TrashIcon class="h-5 w-5" @click="deleteGridster()"/></div>
  <div> <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">

        <EllipsisVerticalIcon class="fill-current h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
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
  </Menu></div>
</template>
<script setup lang="ts">
import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
  TrashIcon,EllipsisVerticalIcon
} from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'


const emits=defineEmits(['deleteGridster'])

const deleteGridster=()=>{ emits('deleteGridster')}
</script>
