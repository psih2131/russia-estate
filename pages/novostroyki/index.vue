<template>
    <main class="main">
       
        <section class="real-estate-catalog-sec">
            <div class="container">
                <div class="real-estate-catalog-sec__body">
                    <div class="real-estate-catalog-sec__header">
                        <h1 class="real-estate-catalog-sec__title">Новостройки России</h1>

                        <component__view_switch />

                    </div>


                    <!-- seo box -->
                    <div class="real-estate-catalog-sec__seo-text-wrapper">
                        <div class="real-estate-catalog-sec__seo-text">
                            <p>“Russia Estate” это многофункциональный сервис, на страницах нашего портала вы сможете проверить как строиться интересующий вас комплекс на текущий момент, не является ли стройка проблемной, коих ...
                            </p>
                        </div>
                        <div class="real-estate-catalog-sec__seo-text-wrapper-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z" fill="#1C274C" fill-opacity="0.61"/>
                            </svg>    
                        </div>
                    </div>

                    <!-- objects filtr -->
                    <component__objects_filtr />

                    <!-- objects list -->
                    <div class="real-estate-catalog-sec__objects-container" :class="{'real-estate-catalog-sec__objects-container_table-view': objectViewStatus == 1}">
                    
                        <component__object v-for="(item,index) in all_object" :key="index" :objectData="item" :currentClass="all_class"/>

                    </div>

                </div>

                <!-- object map -->
                <div class="real-estate-catalog-sec__map-wrapper estate-map" >
                    <component__map   :mapObjectsList="all_object" :regionList="all_locations" />
                </div>
            </div>
        </section>
       
        
    </main>
    
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import component__object from '@/components/component__object.vue'
import component__objects_filtr from '@/components/component__objects-filtrs.vue'
import component__map from '@/components/map/map-objects.vue'
import component__view_switch from '@/components/small-items/object-view-swith.vue'


//DATA
const store = useCounterStore()

const objectViewStatus = computed(()=> store.objectViewSwitch)

const { data: all_object } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/novostrojki`)

const { data: all_class } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/class_novostrojki`)

const { data: all_locations } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/region`)


console.log('objects',all_object)

console.log('add_class',all_class)

console.log('all_locations',all_locations)

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