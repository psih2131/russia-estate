<template>
    <div class="real-estate-catalog-sec__order units-order-wrapper">
        <div class="units-order-element" :class="{'units-order-element_activ': switchStatus == 1}" @click="changeSwitchStatus(1)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 15.5C7 14.3954 6.10457 13.5 5 13.5C3.89543 13.5 3 14.3954 3 15.5C3 16.6046 3.89543 17.5 5 17.5C6.10457 17.5 7 16.6046 7 15.5Z" fill="#5D736E"/>
                <path d="M14 15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5C10 16.6046 10.8954 17.5 12 17.5C13.1046 17.5 14 16.6046 14 15.5Z" fill="#5D736E"/>
                <path d="M19 13.5C20.1046 13.5 21 14.3954 21 15.5C21 16.6046 20.1046 17.5 19 17.5C17.8954 17.5 17 16.6046 17 15.5C17 14.3954 17.8954 13.5 19 13.5Z" fill="#5D736E"/>
                <path d="M7 8.5C7 7.39543 6.10457 6.5 5 6.5C3.89543 6.5 3 7.39543 3 8.5C3 9.60457 3.89543 10.5 5 10.5C6.10457 10.5 7 9.60457 7 8.5Z" fill="#5D736E"/>
                <path d="M12 6.5C13.1046 6.5 14 7.39543 14 8.5C14 9.60457 13.1046 10.5 12 10.5C10.8954 10.5 10 9.60457 10 8.5C10 7.39543 10.8954 6.5 12 6.5Z" fill="#5D736E"/>
                <path d="M21 8.5C21 7.39543 20.1046 6.5 19 6.5C17.8954 6.5 17 7.39543 17 8.5C17 9.60457 17.8954 10.5 19 10.5C20.1046 10.5 21 9.60457 21 8.5Z" fill="#5D736E"/>
            </svg>
                
        </div>
        <div class="units-order-element" :class="{'units-order-element_activ': switchStatus == 0}" @click="changeSwitchStatus(0)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 10C4 9.44772 4.44772 9 5 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H5C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H5C4.44772 15 4 14.5523 4 14ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="#5D736E"/>
            </svg>   
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';



//DATA
const store = useCounterStore()

const switchStatus = computed(()=>store.objectViewSwitch)


//METHODS 
function changeSwitchStatus(newValue){
    store.changeObjectViewSwitch(newValue)
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