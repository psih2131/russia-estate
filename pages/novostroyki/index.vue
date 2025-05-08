<template>
    <main class="main">
       
        <section class="real-estate-catalog-sec">
            <div class="container">
                <div class="real-estate-catalog-sec__body">
                    <div class="real-estate-catalog-sec__header">
                        <h1 class="real-estate-catalog-sec__title">Новостройки Москвы</h1>
                        <div class="real-estate-catalog-sec__order units-order-wrapper">
                            <div class="units-order-element units-order-element_activ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 15.5C7 14.3954 6.10457 13.5 5 13.5C3.89543 13.5 3 14.3954 3 15.5C3 16.6046 3.89543 17.5 5 17.5C6.10457 17.5 7 16.6046 7 15.5Z" fill="#5D736E"/>
                                    <path d="M14 15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5C10 16.6046 10.8954 17.5 12 17.5C13.1046 17.5 14 16.6046 14 15.5Z" fill="#5D736E"/>
                                    <path d="M19 13.5C20.1046 13.5 21 14.3954 21 15.5C21 16.6046 20.1046 17.5 19 17.5C17.8954 17.5 17 16.6046 17 15.5C17 14.3954 17.8954 13.5 19 13.5Z" fill="#5D736E"/>
                                    <path d="M7 8.5C7 7.39543 6.10457 6.5 5 6.5C3.89543 6.5 3 7.39543 3 8.5C3 9.60457 3.89543 10.5 5 10.5C6.10457 10.5 7 9.60457 7 8.5Z" fill="#5D736E"/>
                                    <path d="M12 6.5C13.1046 6.5 14 7.39543 14 8.5C14 9.60457 13.1046 10.5 12 10.5C10.8954 10.5 10 9.60457 10 8.5C10 7.39543 10.8954 6.5 12 6.5Z" fill="#5D736E"/>
                                    <path d="M21 8.5C21 7.39543 20.1046 6.5 19 6.5C17.8954 6.5 17 7.39543 17 8.5C17 9.60457 17.8954 10.5 19 10.5C20.1046 10.5 21 9.60457 21 8.5Z" fill="#5D736E"/>
                                </svg>
                                    
                            </div>
                            <div class="units-order-element">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 10C4 9.44772 4.44772 9 5 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H5C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H5C4.44772 15 4 14.5523 4 14ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="#5D736E"/>
                                </svg>   
                            </div>
                        </div>
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
                    <div class="real-estate-catalog-sec__objects-container">

                        <component__object />

                        <component__object />

                        <component__object />

                        <component__object />

                        <component__object />
                        
                    </div>
                </div>

                <!-- object map -->
                <div class="real-estate-catalog-sec__map-wrapper estate-map"></div>
            </div>
        </section>
       
        
    </main>
    
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import component__object from '@/components/component__object.vue'
import component__objects_filtr from '@/components/component__objects-filtrs.vue'

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