<template>
    <div class="developer-element-small" v-if="mainData">
        <div class="developer-element-small__top">

            <div class="developer-element-small__header">

                <NuxtLink class="developer-element-small__header-img-wrapper" :to="'/zastroishchiki/' + mainData.slug">
                    <img 
                    :src="mainData.acf.ikonki_dlya_obekta.url" 
                    :alt="mainData.acf.ikonki_dlya_obekta.alt" 
                    class="developer-element-small__header-img">
                </NuxtLink>

                <div class="developer-element-small__header-data">
                    <p class="developer-element-small__header-title">
                        <NuxtLink :to="'/zastroishchiki/' + mainData.slug">
                            {{ mainData.title.rendered }}
                        </NuxtLink>
                    </p>
                    <div class="developer-element-small__header-location">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00033 1.3335C5.06699 1.3335 2.66699 3.7335 2.66699 6.66683C2.66699 10.2668 7.33366 14.3335 7.53366 14.5335C7.66699 14.6002 7.86699 14.6668 8.00033 14.6668C8.13366 14.6668 8.33366 14.6002 8.46699 14.5335C8.66699 14.3335 13.3337 10.2668 13.3337 6.66683C13.3337 3.7335 10.9337 1.3335 8.00033 1.3335ZM8.00033 13.1335C6.60033 11.8002 4.00033 8.9335 4.00033 6.66683C4.00033 4.46683 5.80033 2.66683 8.00033 2.66683C10.2003 2.66683 12.0003 4.46683 12.0003 6.66683C12.0003 8.86683 9.40032 11.8002 8.00033 13.1335ZM8.00033 4.00016C6.53366 4.00016 5.33366 5.20016 5.33366 6.66683C5.33366 8.1335 6.53366 9.3335 8.00033 9.3335C9.46699 9.3335 10.667 8.1335 10.667 6.66683C10.667 5.20016 9.46699 4.00016 8.00033 4.00016ZM8.00033 8.00016C7.26699 8.00016 6.66699 7.40016 6.66699 6.66683C6.66699 5.9335 7.26699 5.3335 8.00033 5.3335C8.73366 5.3335 9.33366 5.9335 9.33366 6.66683C9.33366 7.40016 8.73366 8.00016 8.00033 8.00016Z" fill="#1C274C" fill-opacity="0.6"/>
                        </svg>

                        <p class="developer-element-small__header-location-text">{{ mainData.acf.adres_registraczii_yur_licza }}</p>
                    </div>
                </div>
            </div>

            <div class="developer-element-small__body">
                <div class="developer-element-small__stats-row">
                    <div class="developer-element__stats-element" v-if="mainData.acf.god_osnovaniya">
                        <p class="developer-element__stats-title">Год основания</p>
                        <p class="developer-element__stats-value">{{mainData.acf.god_osnovaniya}}</p>
                    </div>

                    <div class="developer-element__stats-element" v-if="mainData.acf.domov_sdano">
                        <p class="developer-element__stats-title">Сдано домов</p>
                        <p class="developer-element__stats-value">{{mainData.acf.domov_sdano}}</p>
                    </div>

                    <div class="developer-element__stats-element" v-if="mainData.acf.domov_stroitsya">
                        <p class="developer-element__stats-title">Строится домов</p>
                        <p class="developer-element__stats-value">{{mainData.acf.domov_stroitsya}}</p>
                    </div>
                </div>
                
                <div class="developer-element-small__description" v-html="mainData.acf.kratkoe_opisanie">
                </div>
            </div>
            

        </div>

        <div class="developer-element-small__footer">
            <div class="developer-element-small__footer-row">
                <div class="developer-element-small__footer-element" v-if="mainData.acf.inn">
                    <p class="developer-element-small__footer-element-title">ИНН</p>
                    <p class="developer-element-small__footer-element-subtitle">{{mainData.acf.inn}}</p>
                </div>

                <div class="developer-element-small__footer-element" v-if="mainData.acf.ogrn">
                    <p class="developer-element-small__footer-element-title">ОГРН</p>
                    <p class="developer-element-small__footer-element-subtitle">{{mainData.acf.ogrn}}</p>
                </div>
            </div>

            <NuxtLink class="developer-element-small__footer-link" :to="'/zastroishchiki/' + mainData.slug">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z" fill="white"/>
                </svg>
            </NuxtLink>

        </div>
        
    </div>

    
</template>

<script setup>
//IMPORT STORE
// import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';




 // props
 const props = defineProps({
    mainData: Object,
//    currentClass: Object,
})



//DATA




//METHODS 




//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll
  
  
});

onBeforeUnmount(() => {

});




</script>




