<template>
    <main class="main" v-if="developer_data_single && developer_data_single.length > 0">

        <section class="developer-hero-sec">
            <div class="developer-container">

                <nav class="single-object-front-sec__breadcrumbs object-breadcrumbs" aria-label="breadcrumb">
                    <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="object-breadcrumbs__list">
                        
                        <li itemprop="itemListElement" class="object-breadcrumbs__item" itemscope itemtype="https://schema.org/ListItem">
                            <NuxtLink itemprop="item" to="/">
                                <span itemprop="name">Главная -</span>
                            </NuxtLink>
                            <meta itemprop="position" content="1" />
                        </li>

                        <li itemprop="itemListElement" class="object-breadcrumbs__item" itemscope itemtype="https://schema.org/ListItem">
                            <NuxtLink itemprop="item" to="/zastroishchiki">
                                <span itemprop="name">Застройщики -</span>
                            </NuxtLink>
                            <meta itemprop="position" content="2" />
                        </li>

                        <li itemprop="itemListElement" class="object-breadcrumbs__item object-breadcrumbs__item_current" itemscope itemtype="https://schema.org/ListItem">
                            <span itemprop="name">{{ developer_data_single[0].title.rendered }}</span>
                            <meta itemprop="position" content="3" />
                        </li>
                    </ol>
                </nav>

                 <component__devloper_element  :mainData="developer_data_single[0]"/>
            </div>
        </section>


        
       <section class="developer-about-sec">
        <div class="developer-container">
          <h2 class="developer-about-sec__title">О застройщике “{{ developer_data_single[0].title.rendered }}”</h2>

          <div class="single-object-description-sec__text" 
            ref="textEditorWrapper"
            :class="{'single-object-description-sec__text_activ': openStatusText}">
                <div class="single-object-description-sec__text-editor wp-editor" ref="textEditor" v-html="developer_data_single[0].acf.osnovnoe_opisanie">
                    
                </div>
            </div>
            
            <div class="single-object-description-sec__text-btn-row">
                <button class="btn-v1 single-object-description-sec__text-btn" 
                :class="{'single-object-description-sec__text-btn_activ': openStatusText}" 
                @click="openText">
                    Читать подробнее
                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.23013 0.21967C0.536971 -0.0732233 1.03446 -0.0732233 1.3413 0.21967L5.5 4.18934L9.6587 0.21967C9.96554 -0.0732233 10.463 -0.0732233 10.7699 0.21967C11.0767 0.512563 11.0767 0.987437 10.7699 1.28033L6.05558 5.78033C5.74874 6.07322 5.25126 6.07322 4.94442 5.78033L0.23013 1.28033C-0.0767101 0.987437 -0.0767101 0.512563 0.23013 0.21967Z" fill="white"/>
                    </svg>

                </button>
            </div>

        </div>
       </section>

       <section class="developer-objects-sec" v-if="developer_data_single[0].acf.proekty_zastrojshhika && developer_data_single[0].acf.proekty_zastrojshhika.length > 0">
         <div class="developer-container">
            <h2 class="developer-objects-sec__title">Проекты застройшика <span>({{developer_data_single[0].acf.proekty_zastrojshhika.length}})</span></h2>
            <div class="developer-objects-sec__wrapper">
                <component__object v-for="(item,index) in developerObjectList" :key="index" :objectData="item" :currentClass="all_class" :cuurentDeveloperData="developer_data_single[0]" />
            </div>
         </div>
       </section>

       <section class="developer-map-sec">
        <div class="developer-container">
            <h3 class="developer-map-sec__title">Обьекты на карте</h3>

            <div class="developer-map-sec__y-map-wrapper">
                <ClientOnly>
                    <component__map  :mapObjectsList="developerObjectList" :centeredMap="centerMapData" />
                </ClientOnly>
            </div>
        </div>
       </section>


       <section class="developer-dop-info">
        <div class="developer-container">
            <h3 class="developer-dop-info__title">Дополнительная информация</h3>
            <div class="developer-dop-info__wrapper">
                <ul class="developer-dop-info__header-row">

                    <li class="developer-dop-info__header-element"
                    :class="{'developer-dop-info__header-element--activ': currentDopInfoIndex == 1}" 
                    @click="currentDopInfoIndex = 1">Учередители</li>

                    <li class="developer-dop-info__header-element"
                    :class="{'developer-dop-info__header-element--activ': currentDopInfoIndex == 2}"
                    @click="currentDopInfoIndex = 2">Данные банка</li>

                    <li class="developer-dop-info__header-element"
                    :class="{'developer-dop-info__header-element--activ': currentDopInfoIndex == 3}"
                    @click="currentDopInfoIndex = 3">Документы</li>

                </ul>
                <div class="developer-dop-info__body">
                    <div class="developer-dop-info__body-element" v-if="currentDopInfoIndex == 1">
                        <div class="developer-dop-info__body-element-row" v-for="item in developer_data_single[0].acf['dop_informacziya_-_uchirediteli']" :key="item">
                            <p class="developer-dop-info__body-element-row-title">{{item.nazvanie}}</p>
                            <p class="developer-dop-info__body-element-row-value">{{item.znachenie}}</p>
                        </div>
                    </div>

                    <div class="developer-dop-info__body-element" v-if="currentDopInfoIndex == 2">
                        <div class="developer-dop-info__body-element-row" v-for="item in developer_data_single[0].acf['dop_informacziya_-_bank']" :key="item">
                            <p class="developer-dop-info__body-element-row-title">{{item.nazvanie}}</p>
                            <p class="developer-dop-info__body-element-row-value">{{item.znachenie}}</p>
                        </div>
                    </div>

                    <div class="developer-dop-info__body-element" v-if="currentDopInfoIndex == 3">
                        <div class="developer-dop-info__body-element-row" v-for="item in developer_data_single[0].acf['dop_informacziya_-_dokumenty']" :key="item">
                            <p class="developer-dop-info__body-element-row-title">{{item.nazvanie}}</p>
                            <p class="developer-dop-info__body-element-row-value">
                                <a :href="item.fajl.url" download="">{{item.fajl.title}}.{{item.fajl.subtype}}</a>
                                ({{ toMB(item.fajl.filesize) }})
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>

        <section class="developer-reccomends">
            <div class="developer-container">
                <h3 class="developer-reccomends__title">Другие застройщики</h3>

                <div class="developer-reccomends__slider-wrapper">
                    
                    <!-- render only for client -->
                    <!-- <ClientOnly> -->
                    <swiper-container 
                    ref="recomendRef" 
                    class="recomend-slider-developers"
                    :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }"
                    >

                        <swiper-slide v-for="item in recomendDevelopersList" :key="item">

                            <div class="recomend-slider-developers__wrapper" ref="itemWrappers">
                               
                                <componentDeveloperSmall :mainData="item" />
                            </div>
                            
                        </swiper-slide>

                        <swiper-slide v-for="item in recomendDevelopersList" :key="item">

                            <div class="recomend-slider-developers__wrapper" ref="itemWrappers">
                               
                                <componentDeveloperSmall :mainData="item" />
                            </div>
                            
                        </swiper-slide>


                    </swiper-container>
                    <!-- </ClientOnly> -->

                    <div class="recomend-developers__wrapper-button-prev custom-nav" @click="swiperRecomend.prev()">
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.15429 13.7071C8.53841 13.3166 8.53841 12.6834 8.15429 12.2929L2.94817 7L8.15429 1.70711C8.53841 1.31658 8.53841 0.683417 8.15429 0.292893C7.77017 -0.0976315 7.14738 -0.0976315 6.76326 0.292893L0.861622 6.29289C0.4775 6.68342 0.4775 7.31658 0.861622 7.70711L6.76326 13.7071C7.14738 14.0976 7.77017 14.0976 8.15429 13.7071Z" fill="#5D736E"/>
                        </svg>
                    </div>
                    <div class="recomend-developers__wrapper-button-next custom-nav" @click="swiperRecomend.next()">
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.845709 13.7071C0.461587 13.3166 0.461587 12.6834 0.845709 12.2929L6.05183 7L0.845708 1.70711C0.461586 1.31658 0.461586 0.683417 0.845708 0.292893C1.22983 -0.0976315 1.85262 -0.0976315 2.23674 0.292893L8.13838 6.29289C8.5225 6.68342 8.5225 7.31658 8.13838 7.70711L2.23674 13.7071C1.85262 14.0976 1.22983 14.0976 0.845709 13.7071Z" fill="#5D736E"/>
                        </svg>
                    </div>
                   
                </div>

            </div>
        </section>

        
    </main>
    
</template>

<script setup>
//IMPORT
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, computed, watch,   } from 'vue';

import component__devloper_element from '@/components/component__developer-element.vue'

import component__object from '@/components/component__object.vue'

import component__map from '@/components/map/map-objects.vue'

import componentDeveloperSmall from '@/components/component__developer-element-small.vue'



//DATA

const route = useRoute()

const store = useCounterStore()

const developerObjectList = ref([])

const recomendDevelopersList = ref([])

const centerMapData = ({})

const { data: all_class } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/class_novostrojki`)

const { data: developer_data_single } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/zastroyshchiki?slug=${route.params.id}`,
  { key: `zastrojshchik-${route.params.id}` }
)

//get object for current developer
if (developer_data_single.value && developer_data_single.value[0]?.acf?.proekty_zastrojshhika?.length) {

  const slugs = developer_data_single.value[0].acf.proekty_zastrojshhika.map(obj => obj.post_name)

  const promises = slugs.map(slug =>
    useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/novostrojki?slug=${slug}`, {
      key: `novostrojka-${slug}`
    }).then(r => r.data.value?.[0] || null)
  )

  developerObjectList.value = await Promise.all(promises)
}


//get recomend developers list
if (developer_data_single.value && developer_data_single.value[0]?.acf?.rekomenduemye_zastrojshhiki?.length) {

  const slugs = developer_data_single.value[0].acf.rekomenduemye_zastrojshhiki.map(obj => obj.post_name)

  const promises = slugs.map(slug =>
    useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/zastroyshchiki?slug=${slug}`, {
      key: `zastroyshchik-${slug}`
    }).then(r => r.data.value?.[0] || null)
  )

  recomendDevelopersList.value = await Promise.all(promises)
}


centerMapData.value = {
    'lat': developer_data_single.value[0].acf.czentrovka_karty_shirota,
    'lng': developer_data_single.value[0].acf.czentrovka_karty_dolgota,
}

console.log('developerObjectList.value', developerObjectList.value)

const openStatusText = ref(false)

const textEditor = ref(null)

const textEditorWrapper = ref(null)

const currentDopInfoIndex = ref(1)

const recomendRef = ref(null)

const itemWrappers = ref([])

console.log(route.params.id)

console.log('developer_data_single', developer_data_single.value)




//METHODS
//open full text wrapper
function openText(){
    openStatusText.value = !openStatusText.value
    
    let textHeight = textEditor.value.offsetHeight
    console.log(textHeight)

    if(openStatusText.value == true){
        textEditorWrapper.value.style.height = +textHeight + 'px'
    }
    else{
        textEditorWrapper.value.style.height = '220px'
    }
}

function toMB(bytes) {
  return (bytes / 1048576).toFixed(2) + ' MB'
}

//recomend gallery
const  swiperRecomend  = useSwiper(recomendRef, {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 0,   
   speed: 700,
})


//HOOKS
//HOOKS
onMounted(async () => {
  await nextTick(); // Ждём полной отрисовки DOM

  // Сбросим текущие высоты (если нужно повторно вызывать)
  itemWrappers.value.forEach((el) => {
    el.style.height = 'auto';
  });

  // Найдём максимальную высоту
  const maxHeight = Math.max(...itemWrappers.value.map(el => el.offsetHeight));

  // Установим всем одинаковую высоту
  itemWrappers.value.forEach((el) => {
    el.style.height = `${maxHeight}px`;
  });

});



</script>

