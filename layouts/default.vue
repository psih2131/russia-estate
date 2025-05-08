<template>
    <div class="app-wrapper">
        <component__header />
        
        <slot/>
    
        <component__footer />
    </div>
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import component__header from '@/components/header.vue'

//DATA
const currentSearchType = ref('personPhone')



//METHODS 



function validSearch(){
  
   
}







//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});



 // props
 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })
</script>