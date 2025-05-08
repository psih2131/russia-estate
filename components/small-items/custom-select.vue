<template>
    <div class="form__inp-wrapper-select form-custom-select" ref="dropdown">
        <p v-if="selectTitleElement" class="form__inp-title">{{ selectTitleElement}}</p>

        <div class="form-custom-select__wrapper">
          <div class="form-custom-select__current-value" @click="changeSelectStatus()" >
            <input type="text" readonly placeholder="Select Version" :value="currentValue" >
            <div class="form-custom-select__ar-wrapper" :class="{'form-custom-select__ar-wrapper_activ': openStatusSelect}">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#697586" stroke-width="1.66667" stroke-linecap="square"/>
              </svg>                    
            </div>
          </div>
          
 
            <div class="form-custom-select__value-list" >
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


<script>


export default {
    data() {
        return {
            activeIndex: null,
            currentValue: '',
            openStatusSelect: false,
            open: false,

            optionList: [
                {'text': 'name value 1'},
                {'text': 'name value 2'},
                {'text': 'name value 3'},
                {'text': 'name value 4'},
                {'text': 'name value 1'},
                {'text': 'name value 2'},
                {'text': 'name value 3'},
                {'text': 'name value 4'},
                {'text': 'name value 1'},
                {'text': 'name value 2'},
                {'text': 'name value 3'},
                {'text': 'name value 4'},
            ]
        }
    },

    props:{
        selectTitleElement: String,
        translateText: String,
        // optionList: Object,
        valueList: Object,
    },

    components: {
  
    },

    methods: {
      changeSelectStatus(){
        this.openStatusSelect = !this.openStatusSelect

        if(this.openStatusSelect == true){
          this.handleClickOutside()
        }
      },
        selectValue(item, index){
            this.currentValue = item
            this.activeIndex = index
            this.$emit('selectDataSend', this.currentValue)
        },

        handleClickOutside(event) {
          const dropdown = this.$refs.dropdown;
          if (dropdown && !dropdown.contains(event.target)) {
            this.openStatusSelect = false;
          }
        },
    },

    computed: {

    },

    watch: {

    },

    mounted(){
      if(this.valueList && this.valueList.length > 1){
          this.optionList = this.valueList
      }

      document.addEventListener("click", this.handleClickOutside);
    },

    beforeUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    },

}
</script>
