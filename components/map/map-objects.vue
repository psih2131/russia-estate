<template>

   <div class="map-objects">

        <div class="map-objects__filtr-list">
            <item__map_select :regions="regionList" />
        </div>
        
   </div>
    
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import item__map_select from '@/components/map/map-location-list.vue'

//DATA
// const currentSearchType = ref('personPhone')



 // props
 const props = defineProps({
  regionList: Object,
//   currentClass: Object,
  
  })


//METHODS 







//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});




</script>