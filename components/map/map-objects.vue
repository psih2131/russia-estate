<template>

   <div class="map-objects">

        <div class="map-objects__filtr-list" v-if="regionList">
            <item__map_select :regions="regionList" :current="regionCurrentTitle"/>
        </div>

        <div class="map-objects__yandex-container">
          <item__map_yandex  :yMapObjetList="mapObjectsList" :yMapStartLocation="regionCurrentTitle" :mapCenterCurrent="centeredMap"/>
        </div>
        
   </div>
    
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import item__map_select from '@/components/map/map-location-list.vue'
import item__map_yandex from '@/components/map/map-yandex.vue'

//DATA




 // props
const props = defineProps({
  regionList: Object,
  mapObjectsList: Object,
  regionCurrentTitle: Object,
  centeredMap: Object,
});


//METHODS 







//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});




</script>