<template>
   <div class="object-filtr-row">
        <item__select :selectTitleElement="`Класс`" :translateText="`Класс`" :valueList="filtrClass"/>
   </div>
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import item__select from '@/components/small-items/custom-select.vue'
// import component__object from '@/components/component__objects-filtrs.vue'

//DATA
const currentSearchType = ref('personPhone')
const filtrClass = ref([
    {'text': 'Премиум'},
    {'text': 'Бизнесс'},
    {'text': 'Комфорт'},
    {'text': 'Эконом'},
])



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