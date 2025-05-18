<template>
    <main class="main">
       
        <section class="real-estate-catalog-sec">
            <div class="container">
               single object ({{ route.params.id }})<br><br>
               <template v-if="object_data_single">{{ object_data_single[0].title.rendered }}</template>
            </div>
        </section>
        
    </main>
    
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';



const route = useRoute()

const store = useCounterStore()

console.log(route.params.id)

const { data: object_data_single } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/novostrojki?slug=${route.params.id}`)

console.log(object_data_single)

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