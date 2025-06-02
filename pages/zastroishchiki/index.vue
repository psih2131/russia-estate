<template>
    <main class="main">
       
       <section class="developer-sec">
        <div class="developer-container">


          <nav class="single-object-front-sec__breadcrumbs object-breadcrumbs" aria-label="breadcrumb">
              <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="object-breadcrumbs__list">
                  
                  <li itemprop="itemListElement" class="object-breadcrumbs__item" itemscope itemtype="https://schema.org/ListItem">
                      <NuxtLink itemprop="item" to="/">
                          <span itemprop="name">Главная -</span>
                      </NuxtLink>
                      <meta itemprop="position" content="1" />
                  </li>

                  <li itemprop="itemListElement" class="object-breadcrumbs__item object-breadcrumbs__item_current" itemscope itemtype="https://schema.org/ListItem">
                      <span itemprop="name">Застройщики</span>
                      <meta itemprop="position" content="2" />
                  </li>
              </ol>
          </nav>

          <div class="developer-container__header">
            <h1 class="developer-sec__title">Застройщики России</h1>
          </div>
          
          <div class="developer-sec__text">
            <p>
              ГК МИЦ — один из лидеров строительной отрасли в Московском регионе, девелопер работает на рынке с 2001 года. В 2019 году компания стала первой, полностью перешедшей на проектное финансирование, тогда же вошла в рейтинг Forbes как одна из самых надежных российских девелоперских компаний.
            </p>
          </div>


          <!-- developers filtrs -->
          <div class="developer-sec__filtrs-wrapper" v-if="regions">
            <component__devlopers_filtrs :regionsList="regions" @sendDataToParent="startFiltrScript" />
          </div>

          <!-- developer list -->
          <div class="developer-sec__elements-container">
            <component__devloper_element v-for="(item, index) in all_dev_filtr" :key="index"  :mainData="item"/>
          </div>
          

        </div>
       </section>
        
    </main>
    
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import component__devlopers_filtrs from '@/components/component__developers-filtrs.vue'
import component__devloper_element from '~/components/component__developer-element.vue'



//DATA
const store = useCounterStore()

const all_dev_filtr = ref([])

const { data: all_developers } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/zastroyshchiki`)

if (all_developers.value) {
  all_dev_filtr.value = [...all_developers.value] // или просто all_object.value
}

const { data: regions } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/region-business`)

console.log('all_developers', all_developers.value)

console.log('regions', regions.value)



//METHODS 

function getCurrentRegion(item){
    let currentItem = item
    let currentValue
    if(currentItem){
        let res = regions.value.filter(function(elem) {
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

function startFiltrScript(data){  

    let filtrParametrs = data

    console.log('filtrParametrs:',filtrParametrs)

    let nevArray = all_developers.value.filter(item => {

        let inReady
        let inProgress
        let inRegion


        if(filtrParametrs.ready && filtrParametrs.ready != '' && filtrParametrs.ready != 'Сдано домов'){

          let getCurrentValueMin 
          let getCurrentValueMax  

          if(filtrParametrs.ready == '0 - 10'){
            getCurrentValueMin = 0
            getCurrentValueMax = 10
          }
          if(filtrParametrs.ready == '10 - 30'){
            getCurrentValueMin = 10
            getCurrentValueMax = 30
          }
          if(filtrParametrs.ready == '30 - 50'){
            getCurrentValueMin = 30
            getCurrentValueMax = 50
          }
          if(filtrParametrs.ready == '50 - 100'){
            getCurrentValueMin = 50
            getCurrentValueMax = 100
          }
          if(filtrParametrs.ready == '100+'){
            getCurrentValueMin = 100
            getCurrentValueMax = 10000
          }

          if(item.acf.domov_sdano && +item.acf.domov_sdano > 0 && +item.acf.domov_sdano >= +getCurrentValueMin && +item.acf.domov_sdano <+ +getCurrentValueMax){
              inReady = true
          }
          else{
              inReady = false
          }
        }
        else{
            inReady = true
        }



        if(filtrParametrs.progress && filtrParametrs.progress != '' && filtrParametrs.progress != 'Домов строится'){

          let getCurrentValueMin 
          let getCurrentValueMax  

          if(filtrParametrs.progress == '0 - 10'){
            getCurrentValueMin = 0
            getCurrentValueMax = 10
          }
          if(filtrParametrs.progress == '10 - 30'){
            getCurrentValueMin = 10
            getCurrentValueMax = 30
          }
          if(filtrParametrs.progress == '30 - 50'){
            getCurrentValueMin = 30
            getCurrentValueMax = 50
          }
          if(filtrParametrs.progress == '50 - 100'){
            getCurrentValueMin = 50
            getCurrentValueMax = 100
          }
          if(filtrParametrs.progress == '100+'){
            getCurrentValueMin = 100
            getCurrentValueMax = 10000
          }

          if(item.acf.domov_stroitsya && +item.acf.domov_stroitsya > 0 && +item.acf.domov_stroitsya >= +getCurrentValueMin && +item.acf.domov_stroitsya <+ +getCurrentValueMax){
              inProgress = true
          }
          else{
              inProgress = false
          }
        }
        else{
            inProgress = true
        }



        if(filtrParametrs.region && filtrParametrs.region != '' && filtrParametrs.region != 'Регион деятельности'){

          let regionStatus = false
          let regionItemList = item["region-business"]
          for(let i = 0; i < regionItemList.length; i++){
            if(getCurrentRegion(regionItemList[i]) == filtrParametrs.region ){
              regionStatus = true
            }
          }

          if(regionStatus == true){
            inRegion = true
          }
          else{
            inRegion = false
          }
      
        }
        else{
            inRegion = true
        }

        return inReady && inProgress && inRegion
 
    })
    console.log('nevArray',nevArray)
    all_dev_filtr.value = nevArray
   

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