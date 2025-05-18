<template>

    <div class="object-element">
        <div class="object-element__img-wrapper">


             <!-- <ClientOnly> -->
                <swiper-container 
                ref="containerRef" 
                class="object-element__slider"
                :pagination="{
                dynamicBullets: true,
                clickable: true
                }"
                >

                    <swiper-slide v-for="item in objectData.acf.galereya_izobrazhenij" :key="item">
                        <img :src="item.img.url" :alt="item.img.alt" class="object-element__img">
                    </swiper-slide>

                </swiper-container>
            <!-- </ClientOnly> -->

            
            <div class="object-element__like">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6062 4.56796C8.7025 2.8623 5.77489 2.92418 3.94548 4.75358C2.05203 6.64704 2.05203 9.71693 3.94548 11.6104L9.4634 17.1283C10.0946 17.7594 11.1178 17.7594 11.749 17.1283L17.2669 11.6104C19.1604 9.71693 19.1604 6.64704 17.2669 4.75358C15.4375 2.92418 12.5099 2.8623 10.6062 4.56796ZM9.65947 5.89638L10.0348 6.27171C10.3504 6.58728 10.862 6.58728 11.1776 6.27171L11.5529 5.89638C12.8152 4.63408 14.8618 4.63408 16.1241 5.89638C17.3864 7.15868 17.3864 9.20528 16.1241 10.4676L10.6062 15.9855L5.08828 10.4676C3.82598 9.20528 3.82598 7.15868 5.08828 5.89638C6.35058 4.63408 8.39717 4.63408 9.65947 5.89638Z" fill="#5D736E"/>
                </svg>    
            </div>
        </div>
        <div class="object-element__body">
            <div class="object-element__body-top">
                <p class="object-element__title">
                    <NuxtLink class="object-element__title-link" :to="'/novostroyki/objects/' + objectData.slug">{{objectData.title.rendered}}</NuxtLink>
                </p>
                <div class="object-element__location-row">
                    <div class="object-element__location">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 1.25C4.75 1.25 2.5 3.5 2.5 6.25C2.5 9.625 6.875 13.4375 7.0625 13.625C7.1875 13.6875 7.375 13.75 7.5 13.75C7.625 13.75 7.8125 13.6875 7.9375 13.625C8.125 13.4375 12.5 9.625 12.5 6.25C12.5 3.5 10.25 1.25 7.5 1.25ZM7.5 12.3125C6.1875 11.0625 3.75 8.375 3.75 6.25C3.75 4.1875 5.4375 2.5 7.5 2.5C9.5625 2.5 11.25 4.1875 11.25 6.25C11.25 8.3125 8.8125 11.0625 7.5 12.3125ZM7.5 3.75C6.125 3.75 5 4.875 5 6.25C5 7.625 6.125 8.75 7.5 8.75C8.875 8.75 10 7.625 10 6.25C10 4.875 8.875 3.75 7.5 3.75ZM7.5 7.5C6.8125 7.5 6.25 6.9375 6.25 6.25C6.25 5.5625 6.8125 5 7.5 5C8.1875 5 8.75 5.5625 8.75 6.25C8.75 6.9375 8.1875 7.5 7.5 7.5Z" fill="#1C274C" fill-opacity="0.6"/>
                        </svg>
                            
                        <p class="object-element__location-text">{{cutText(objectData.acf.adres)}}</p>
                    </div>

                    <button class="object-element__location-btn btn-v1-small" @click="showObjectOnMap()">Показать на карте</button>
                </div>

                <p class="object-element__short-description">{{objectData.acf.korotkoe_opisanie}}</p>

                <div class="object-element__developer-table-view">
                    <a href="" class="object-element__developer-big-card" v-for="item in objectData.acf.zastrojshhik" :key="item">
                        <img src="@/assets/images/developer.png" alt="">
                        <!-- {{ item.post_title }} -->
                    </a>
                </div>
                
            </div>

            <div class="object-element__body-down">
                <div class="object-element__info-row">
                    <div class="object-element__info-element">
                        от <b>{{objectData.acf.stoimost_kvartir_ot}} <span>₽</span></b>
                    </div>

                    <div class="object-element__info-element">
                        от <b>{{objectData.acf.kvadratura_kvartir_ot}}</b> кв<span>²</span> до <b>{{objectData.acf.kvadratura_kvartir_do}}</b> кв<span>²</span>
                    </div>

                    <div class="object-element__info-element">
                        класс: <b>{{getCurrentClass(objectData.class_novostrojki)}}</b>
                    </div>
                </div>
                <div class="object-element__button-row">
                    <NuxtLink class="object-element__btn-view-object btn-v1" :to="'/novostroyki/objects/' + objectData.slug">Ознакомиться с обьектом</NuxtLink>

                    <a href="" class="object-element__developer-big-card" v-for="item in objectData.acf.zastrojshhik" :key="item">
                        <img src="@/assets/images/developer.png" alt="">
                        {{ item.post_title }}
                    </a>
                </div>
            </div>
            
            
        </div>
    </div>
    
</template>

<script setup>
//IMPORT STORE
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


//DATA

// access the `store` variable anywhere in the component ✨
const store = useCounterStore()

const containerRef = ref(null)


 // props
 const props = defineProps({
  objectData: Object,
  currentClass: Object,
  
  })


//METHODS 

const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef, {
   
})

function getCurrentClass(item){
    let currentItem = item[0]
    let currentValue
    if(currentItem){
        let res = props.currentClass.filter(function(elem) {
            if (elem.id == +currentItem) {
                return true;
            } else {
                return false;
            }
        });
        currentValue = res[0].name
    }
    else{
        currentValue = null
    }

    return currentValue;
}



//show object on map request
function showObjectOnMap(){
    store.changeCurrentIdForOpenObjectOnMap(null)
    store.changeCurrentIdForOpenObjectOnMap(props.objectData.id)
}

//cut location string
function cutText(text) {
  const limit = 50
  if (!text) return ''
  return text.length > limit ? text.slice(0, limit) + '...' : text
}




//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll
    console.log(swiper.instance)
  
});

onBeforeUnmount(() => {

});




</script>


<style >

swiper-container::part(pagination) {
  bottom: 10px; /* если нужно сместить пагинацию */
}

swiper-container::part(bullet) {
  background-color:rgba(255, 255, 255, 0.67);
  opacity: 1;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  transition: background-color 0.3s;
  cursor: pointer;
}

swiper-container::part(bullet-active) {
  background-color: #fff;
  width: 10px;
  height: 10px;
}

</style>

