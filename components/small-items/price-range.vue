<template>
    <div class="price-range">
        <div class="price-range__field-wrapper price-range__field-wrapper-min">
            <p class="price-range__field-title">От:</p>
            <input type="text" class="price-range__input" placeholder="2500000 ₽" 
            v-model="minPrice" 
            @input="validPriceMin()"
            @change="checkValue()">
        </div>

        
        <div class="price-range__field-wrapper price-range__field-wrapper-max">
            <p class="price-range__field-title">До:</p>
            <input type="text" class="price-range__input" placeholder="100000000 ₽" 
            v-model="maxPrice" @input="validPriceMax()" 
            @change="checkValue()">
        </div>

        <p v-if="errorStatus" class="price-range__error">проверьте правильно ли указаны значение</p>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch, defineEmits   } from 'vue';



//DATA
const store = useCounterStore()
const minPrice = ref(null)
const maxPrice = ref(null)
const errorStatus = ref(false)

const emit = defineEmits(['sendPricaToFiltr']);

// const switchStatus = computed(()=>store.objectViewSwitch)


//METHODS 
function validPriceMin(){
    minPrice.value = minPrice.value.replace(/\D/g, '')
    console.log(minPrice.value)
}

function validPriceMax(){
    maxPrice.value = maxPrice.value.replace(/\D/g, '')
    console.log(maxPrice.value)
}

function checkValue(){
    if(minPrice.value && +minPrice.value >  +maxPrice.value && maxPrice.value && maxPrice.value != ''){
        errorStatus.value = true
    }
    else{
        errorStatus.value = false
        let priceForFiltr = {
            'min': minPrice.value,
            'max': maxPrice.value
        }
        emit('sendPricaToFiltr', priceForFiltr);
    }
}


function clearValue(){
    minPrice.value = null
    maxPrice.value = null
    checkValue()
    console.log('clear price')
}




//доступ к функциям из вне
defineExpose({
  clearValue
})


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