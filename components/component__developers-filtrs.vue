<template>
   <div class="object-filtr-row developer-filtr-row" v-if="statusLoadRegions">
    <div class="object-filtr-row__fields-container">
      <div class="object-filtr-row__element developer-filtr-row__el-1">
        <item__select ref="classRef" :selectTitleElement="`Сдано домов`" :translateText="`Сдано домов`" :valueList="filtrReadyObjects" @selectDataSend="getCurrentReadyObjects"/>
      </div>

      <div class="object-filtr-row__element developer-filtr-row__el-2">
        <item__select ref="statusRef" :selectTitleElement="`Домов строится`" :translateText="`Домов строится`" :valueList="filtrProgressObjects" @selectDataSend="getCurrentInProgressObjects"/>
      </div>

      <div class="object-filtr-row__element developer-filtr-row__el-3">
        <item__select ref="roomsRef" :selectTitleElement="`Регион деятельности`" :translateText="`Регион деятельности`" :valueList="filtrRegion" @selectDataSend="getCurrentRegion"/>
      </div>

      <div class="object-filtr-row__element developer-filtr-row__el-4">
        <item__price_range ref="priceRef" @sendPricaToFiltr="getCurrentPrice" />
      </div>
    </div>

    <div class="filtr-cancel" v-if="filtrObject.class || filtrObject.status || filtrObject.rooms || filtrObject.price" @click="clearFiltr">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="white"/>
    </svg>

    </div>
    
        
   </div>
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch, defineEmits  } from 'vue';
import item__select from '@/components/small-items/custom-select.vue'


//DATA
const filtrReadyObjects = ref([
    {'text': 'Сдано домов'},
    {'text': '0 - 10'},
    {'text': '10 - 30'},
    {'text': '30 - 50'},
    {'text': '50 - 100'},
    {'text': '100+'},
])

const filtrProgressObjects = ref([
    {'text': 'Домов строится'},
    {'text': '0 - 10'},
    {'text': '10 - 30'},
    {'text': '30 - 50'},
    {'text': '50 - 100'},
    {'text': '100+'},
])

const filtrRegion = ref([
    {'text': 'Регион деятельности'},
])

let filtrObject = ref({
  'ready': null,
  'progress': null,
  'region': null,
})

const statusLoadRegions = ref(false)
const classRef = ref(null)
const statusRef = ref(null)
const roomsRef = ref(null)
const priceRef = ref(null)

const emit = defineEmits(['emitStartFiltr']);


//METHODS 
function getCurrentReadyObjects(data){
  console.log('filtr data ready:',data)
  filtrObject.value.ready = data
  startFiltr()
}

function getCurrentInProgressObjects(data){
  console.log('filtr data progress:',data)
  filtrObject.value.progress = data
  startFiltr()
}

function getCurrentRegion(data){
  console.log('filtr data region:',data)
  filtrObject.value.region = data
  startFiltr()
}


function startFiltr(){
  let filtrEmitData = filtrObject.value
  console.log('filtr object:', filtrEmitData)
  emit('sendDataToParent', filtrEmitData);
}

//clear filtr
function clearFiltr(){

  classRef.value.clearValue()
  statusRef.value.clearValue()
  roomsRef.value.clearValue()

  filtrObject.value = {
    'ready': null,
    'progress': null,
    'region': null,
  }

  startFiltr()
 
}



//HOOKS
onMounted(() => {
  
  if(props.regionsList){
    for(let i = 0; i < props.regionsList.length; i++){
    let arrayElement = {'text': props.regionsList[i].name, 'id': props.regionsList[i].id}
    filtrRegion.value.push(arrayElement)
  }

    console.log(filtrRegion.value)
    statusLoadRegions.value = true
  }
  
  
});

onBeforeUnmount(() => {

});


 // props
 const props = defineProps({
    regionsList: Object,

})



</script>