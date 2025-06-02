<template>
    <main class="main">
       
        <section class="real-estate-catalog-sec">
            <div class="container">
                <div class="real-estate-catalog-sec__body">
                    <div class="real-estate-catalog-sec__header" v-if="current_region">
                        <h1 class="real-estate-catalog-sec__title">{{current_region[0].acf.seo_zagolovok}}</h1>
                        
                        <component__view_switch />

                    </div>


                    <!-- seo box -->
                    <div class="real-estate-catalog-sec__seo-text-wrapper" v-if="current_region">
                        <div class="real-estate-catalog-sec__seo-text" v-html="current_region[0].acf.seo_opisanie">
                          
                        </div>
                        <div class="real-estate-catalog-sec__seo-text-wrapper-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z" fill="#1C274C" fill-opacity="0.61"/>
                            </svg>    
                        </div>
                    </div>

                    <!-- objects filtr -->
                    <component__objects_filtr @sendPricaToFiltr="startFiltrScript" />

                    <!-- objects list -->
                    <div class="real-estate-catalog-sec__objects-container" :class="{'real-estate-catalog-sec__objects-container_table-view': objectViewStatus == 1}">
                    
                        <component__object v-for="(item,index) in all_object_filtr" :key="index" :objectData="item" :currentClass="all_class" :cuurentDeveloperData="getCurrentDeveloper(item)"/>

                    </div>

                </div>

                <!-- object map -->
                <div class="real-estate-catalog-sec__map-wrapper estate-map">
                    <component__map   :mapObjectsList="all_object_filtr" :regionList="all_locations" :regionCurrentTitle="current_region[0]" />
                </div>

            </div>
        </section>
       
        
    </main>
    
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import component__map from '@/components/map/map-objects.vue'
import component__object from '@/components/component__object.vue'
import component__objects_filtr from '@/components/component__objects-filtrs.vue'
import component__view_switch from '@/components/small-items/object-view-swith.vue'


//DATA
const route = useRoute()

const store = useCounterStore()

const objectViewStatus = computed(()=> store.objectViewSwitch)

const all_object_filtr = ref([])

const { data: current_region } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/region?slug=${route.params.id}`)

const { data: all_object } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/novostrojki?region=${current_region.value[0].id}`)

if (all_object.value) {
  all_object_filtr.value = [...all_object.value] // или просто all_object.value
}

const { data: all_class } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/class_novostrojki`)

const { data: all_locations } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/region`)

const { data: all_developers } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/zastroyshchiki`)

console.log('objects',all_object)

console.log('add_class',all_class)

console.log('current_region',current_region)

console.log('router',route.params.id)

console.log('all_developers',all_developers)


//METHODS 
function getCurrentClass(item){
    let currentItem = item[0]
    let currentValue
    if(currentItem){
        let res = all_class.value.filter(function(elem) {
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



function getCurrentDeveloper(item){
    let currentItem = item.acf.zastrojshhik[0]
    console.log('currentItem',currentItem)
    
    let currentValue
    if(currentItem){
        for(let i = 0; i < all_developers.value.length; i++){
            if(+currentItem.ID == +all_developers.value[i].id){
                currentValue = all_developers.value[i]
             
            }
        } 
    }
    else{
        currentValue = null
    }

    return currentValue;
}


function startFiltrScript(data){
    let filtrParametrs = data

    console.log('filtrParametrs:',filtrParametrs)

    let nevArray = all_object.value.filter(item => {

        let inClass
        let inStatus
        let inRooms
        let inPrice

        if(filtrParametrs.class && filtrParametrs.class != '' && filtrParametrs.class != 'Класс'){
            if(item.class_novostrojki && item.class_novostrojki.length > 0 && getCurrentClass(item.class_novostrojki) == filtrParametrs.class){
                inClass = true
            }
            else{
                inClass = false
            }
        }
        else{
            inClass = true
        }


        if(filtrParametrs.status && filtrParametrs.status != '' && filtrParametrs.status != 'Статус'){
            if(item.acf && item.acf.status_doma && item.acf.status_doma == filtrParametrs.status){
                inStatus = true
            }
            else{
                inStatus = false
            }
        }
        else{
            inStatus = true
        }


        if(filtrParametrs.rooms && filtrParametrs.rooms != '' && filtrParametrs.rooms != 'Комнат'){
            if(item.acf && item.acf.status_doma && item.acf.dostupnye_kvartiry.length > 0 && item.acf.dostupnye_kvartiry.includes(filtrParametrs.rooms)){
                inRooms = true
            }
            else{
                inRooms = false
            }
        }
        else{
            inRooms = true
        }


        if (
            !filtrParametrs.price ||
            (
                (!filtrParametrs.price.min && filtrParametrs.price.min !== 0) &&
                (!filtrParametrs.price.max && filtrParametrs.price.max !== 0)
            )
            ) {
            // если price вообще не задан или оба поля пустые — фильтр не применяется
            inPrice = true
            } else {
            if (item.acf && item.acf.stoimost_kvartiry_ot_dlya_filtra) {
                const itemPrice = +item.acf.stoimost_kvartiry_ot_dlya_filtra
                const min = filtrParametrs.price.min !== '' && filtrParametrs.price.min != null ? +filtrParametrs.price.min : 0
                const max = filtrParametrs.price.max !== '' && filtrParametrs.price.max != null ? +filtrParametrs.price.max : Infinity

                inPrice = itemPrice >= min && itemPrice <= max
            } else {
                inPrice = false
            }
        }

        return inClass && inStatus && inRooms && inPrice
    })

    all_object_filtr.value = nevArray
   
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