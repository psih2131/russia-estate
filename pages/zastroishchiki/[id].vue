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

        
    </main>
    
</template>

<script setup>
//IMPORT
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, computed, watch,   } from 'vue';

import component__devloper_element from '@/components/component__developer-element.vue'

import component__object from '@/components/component__object.vue'

import component__map from '@/components/map/map-objects.vue'


//DATA

const route = useRoute()

const store = useCounterStore()

const developerObjectList = ref([])

const centerMapData = ({})

const { data: all_class } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/class_novostrojki`)

const { data: developer_data_single } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/zastroyshchiki?slug=${route.params.id}`,
  { key: `zastrojshchik-${route.params.id}` }
)

if (developer_data_single.value && developer_data_single.value[0]?.acf?.proekty_zastrojshhika?.length) {

  const slugs = developer_data_single.value[0].acf.proekty_zastrojshhika.map(obj => obj.post_name)

  const promises = slugs.map(slug =>
    useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/novostrojki?slug=${slug}`, {
      key: `novostrojka-${slug}`
    }).then(r => r.data.value?.[0] || null)
  )

  developerObjectList.value = await Promise.all(promises)
}


centerMapData.value = {
    'lat': developer_data_single.value[0].acf.czentrovka_karty_shirota,
    'lng': developer_data_single.value[0].acf.czentrovka_karty_dolgota,
}

console.log('developerObjectList.value', developerObjectList.value)

const openStatusText = ref(false)

const textEditor = ref(null)

const textEditorWrapper = ref(null)

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


//HOOKS
onMounted(async () => {

});


</script>

