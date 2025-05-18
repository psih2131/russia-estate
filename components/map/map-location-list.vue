<template>

<div class="map-location-list" :class="{'map-location-list_activ': openStatus }">
    <div class="map-location-list__header" @click="openList()">
        <p class="map-location-list__header-title" v-if="current">{{current.name}}</p>
        <p class="map-location-list__header-title" v-else>Все города</p>
        <div class="map-location-list__ar">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.52876 6.19526C3.78911 5.93491 4.21122 5.93491 4.47157 6.19526L8.00016 9.72386L11.5288 6.19526C11.7891 5.93491 12.2112 5.93491 12.4716 6.19526C12.7319 6.45561 12.7319 6.87772 12.4716 7.13807L8.47157 11.1381C8.21122 11.3984 7.78911 11.3984 7.52876 11.1381L3.52876 7.13807C3.26841 6.87772 3.26841 6.45561 3.52876 6.19526Z" fill="#1C274C" fill-opacity="0.61"/>
            </svg>
        </div>
    </div>
    <div class="map-location-list__body">
        <ul class="map-location-list__body-ul">
            <li class="map-location-list__body-li">
                <NuxtLink class="map-location-list__body-link" to="/novostroyki">Все города</NuxtLink>
            </li>
            <li class="map-location-list__body-li" v-for="item in regions" :key="item">
                <NuxtLink class="map-location-list__body-link" :to="`/novostroyki/region/` + item.slug">{{item.name}}</NuxtLink>
            </li>
        </ul>
    </div>
</div>
    
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


//DATA
const openStatus = ref(false)

 // props
 const props = defineProps({
     regions: Object, 
     current: Object, 
  })


//METHODS 

function openList(){
    openStatus.value = !openStatus.value
}


//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});




</script>