<template>
    <div class="form__inp-wrapper-select form-custom-select" ref="dropdown">
        <!-- <p v-if="selectTitleElement" class="form__inp-title">{{ selectTitleElement}}</p> -->

        <div class="form-custom-select__wrapper" v-if="selectTitleElement">
          <div class="form-custom-select__current-value" @click="changeSelectStatus()" >
            <input type="text" readonly :placeholder="selectTitleElement" :value="currentValue" >
            <div class="form-custom-select__ar-wrapper" :class="{'form-custom-select__ar-wrapper_activ': openStatusSelect}">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#697586" stroke-width="1.66667" stroke-linecap="square"/>
              </svg>                    
            </div>
          </div>

 
            <div class="form-custom-select__value-list" :class="{'form-custom-select__value-list_activ': openStatusSelect}">
                <ul class="form-custom-select__ul-value-list">

                  <li class="form-custom-select__vvalue-list-element" v-for="(item, index) in optionList" :key="index" 
                    @click="selectValue(item.text, index), openStatusSelect = false"
                    :class="{'form-custom-select__vvalue-list-element_active': activeIndex == index}">
                    {{ item.text }}
                  </li>

                </ul>
            </div>
         
        </div>

    </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount, watch, defineExpose  } from 'vue'

// Props
const props = defineProps({
  selectTitleElement: String,
  translateText: String,
  valueList: Object,
})

// Emits
const emit = defineEmits(['selectDataSend'])

// State
const activeIndex = ref(null)
const currentValue = ref('')
const openStatusSelect = ref(false)
const dropdown = ref(null)

const optionList = ref([
  { text: 'name value 1' },

])

// Methods
function changeSelectStatus() {
  openStatusSelect.value = !openStatusSelect.value

  if (openStatusSelect.value) {
    document.addEventListener('click', handleClickOutside)
  }
}

function selectValue(item, index) {
  currentValue.value = item
  activeIndex.value = index
  emit('selectDataSend', currentValue.value)
}

function handleClickOutside(event) {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    openStatusSelect.value = false
    document.removeEventListener('click', handleClickOutside)
  }
}

function clearValue(){
  selectValue(optionList.value[0].text, 0)
  console.log('clear select')
}

//доступ к функциям из вне
defineExpose({
  clearValue
})
// Lifecycle
onMounted(() => {
  if (props.valueList && props.valueList.length > 1) {
    optionList.value = props.valueList
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
