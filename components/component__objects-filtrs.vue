<template>
   <div class="object-filtr-row">
    <div class="object-filtr-row__fields-container">
      <div class="object-filtr-row__element object-filtr-row__el-1">
        <item__select ref="classRef" :selectTitleElement="`Класс`" :translateText="`Класс`" :valueList="filtrClass" @selectDataSend="getCurrentClass"/>
      </div>

      <div class="object-filtr-row__element object-filtr-row__el-2">
        <item__select ref="statusRef" :selectTitleElement="`Статус`" :translateText="`Статус`" :valueList="filtrStatus" @selectDataSend="getCurrentStatus"/>
      </div>

      <div class="object-filtr-row__element object-filtr-row__el-3">
        <item__select ref="roomsRef" :selectTitleElement="`Комнат`" :translateText="`Комнат`" :valueList="filtrRooms" @selectDataSend="getCurrentRooms"/>
      </div>

      <div class="object-filtr-row__element object-filtr-row__el-4">
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
import item__price_range from '@/components/small-items/price-range.vue'
// import component__object from '@/components/component__objects-filtrs.vue'

//DATA
const filtrClass = ref([
    {'text': 'Класс'},
    {'text': 'Премиум'},
    {'text': 'Бизнесс'},
    {'text': 'Комфорт'},
    {'text': 'Эконом'},
])

const filtrStatus = ref([
    {'text': 'Статус'},
    {'text': 'Дом сдан'},
    {'text': 'Строится'},
    {'text': 'Проектирование'},
])

const filtrRooms = ref([
    {'text': 'Комнат'},
    {'text': '1 комната'},
    {'text': '2 комнаты'},
    {'text': '3 комнаты'},
    {'text': '4 комнаты'},
    {'text': '5 комнат'},
    {'text': '5+ комнат'},
])

let filtrObject = ref({
  'class': null,
  'status': null,
  'rooms': null,
  'price': null,
})


const classRef = ref(null)
const statusRef = ref(null)
const roomsRef = ref(null)
const priceRef = ref(null)

const emit = defineEmits(['emitStartFiltr']);


//METHODS 
function getCurrentClass(data){
  console.log('filtr data class:',data)
  filtrObject.value.class = data
  startFiltr()
}

function getCurrentStatus(data){
  console.log('filtr data status:',data)
  filtrObject.value.status = data
  startFiltr()
}

function getCurrentRooms(data){
  console.log('filtr data rooms:',data)
  filtrObject.value.rooms = data
  startFiltr()
}

function getCurrentPrice(data){
  console.log('filtr data price:',data)
  filtrObject.value.price = data
  startFiltr()
}

function startFiltr(){
  let filtrEmitData = filtrObject.value
  console.log('filtr object:', filtrEmitData)
  emit('sendPricaToFiltr', filtrEmitData);
}

//clear filtr
function clearFiltr(){

  classRef.value.clearValue()
  statusRef.value.clearValue()
  roomsRef.value.clearValue()
  priceRef.value.clearValue()


  filtrObject.value = {
    'class': null,
    'status': null,
    'rooms': null,
    'price': null,
  }

  startFiltr()
 
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