<template>
    <div class="developer-element" v-if="mainData">
        <div class="developer-element__logo-wrapper">
            <img v-if="mainData && mainData.acf.logo_dlya_kartochki && mainData.acf.logo_dlya_kartochki.url"
            :src="mainData.acf.logo_dlya_kartochki.url" 
            :alt="mainData.acf.logo_dlya_kartochki.alt" 
            class="developer-element__logo-img" >
        </div>

        <div class="developer-element__body-wrapper">
            <div class="developer-element__title">
                <NuxtLink class="developer-element__title-link" :to="'/zastroishchiki/' + mainData.slug">
                        {{mainData.title.rendered}}
                </NuxtLink>       
            </div>

            <div class="developer-element__adress" v-if="mainData.acf.adres_registraczii_yur_licza">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99967 1.66663C6.33301 1.66663 3.33301 4.66663 3.33301 8.33329C3.33301 12.8333 9.16634 17.9166 9.41634 18.1666C9.58301 18.25 9.83301 18.3333 9.99967 18.3333C10.1663 18.3333 10.4163 18.25 10.583 18.1666C10.833 17.9166 16.6663 12.8333 16.6663 8.33329C16.6663 4.66663 13.6663 1.66663 9.99967 1.66663ZM9.99967 16.4166C8.24967 14.75 4.99967 11.1666 4.99967 8.33329C4.99967 5.58329 7.24967 3.33329 9.99967 3.33329C12.7497 3.33329 14.9997 5.58329 14.9997 8.33329C14.9997 11.0833 11.7497 14.75 9.99967 16.4166ZM9.99967 4.99996C8.16634 4.99996 6.66634 6.49996 6.66634 8.33329C6.66634 10.1666 8.16634 11.6666 9.99967 11.6666C11.833 11.6666 13.333 10.1666 13.333 8.33329C13.333 6.49996 11.833 4.99996 9.99967 4.99996ZM9.99967 9.99996C9.08301 9.99996 8.33301 9.24996 8.33301 8.33329C8.33301 7.41663 9.08301 6.66663 9.99967 6.66663C10.9163 6.66663 11.6663 7.41663 11.6663 8.33329C11.6663 9.24996 10.9163 9.99996 9.99967 9.99996Z" fill="#1C274C" fill-opacity="0.6"/>
                </svg>

                <p class="developer-element__adress-text">{{mainData.acf.adres_registraczii_yur_licza}}</p>
            </div>

            <div class="developer-element__stats-row">
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

                <div class="developer-element__stats-element" v-if="mainData.acf.sdano_vovremya">
                    <p class="developer-element__stats-title">Сданов вовремя</p>
                    <p class="developer-element__stats-value">{{mainData.acf.sdano_vovremya}}%</p>
                </div>
            </div>
            <p class="developer-element__shorw-description">
                {{mainData.acf.kratkoe_opisanie}}
            </p>
        </div>

        <div class="developer-element__sub-info-wrapper">
            <div class="developer-element__sub-info-top">
                <div class="developer-element__sub-info-inn-box" v-if="mainData.acf.inn">
                    <p class="developer-element__sub-info-inn-box-title">ИНН</p>
                    <p class="developer-element__sub-info-inn-box-value">{{mainData.acf.inn}}</p>
                </div>
                <div class="developer-element__sub-info-inn-box" v-if="mainData.acf.ogrn">
                    <p class="developer-element__sub-info-inn-box-title">ОГРН</p>
                    <p class="developer-element__sub-info-inn-box-value">{{mainData.acf.ogrn}}</p>
                </div>
            </div>
            <div class="developer-element__sub-info-down">
                <NuxtLink class="btn-v1" :to="'/zastroishchiki/' + mainData.slug">
                        Читать подробнее
                </NuxtLink> 
            </div>
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




