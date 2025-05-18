import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
    const router = useRouter();

    const serverUrlDomainRequest = ref('http://gearsdpz.beget.tech')

    const currentIdForOpenObjectOnMap = ref(null)

    const objectViewSwitch = ref(0)

    // const doubleCount = computed(() => count.value * 2)
    function changeCurrentIdForOpenObjectOnMap(newValue) {
        currentIdForOpenObjectOnMap.value = newValue
        console.log('object open on map', currentIdForOpenObjectOnMap.value)
    }


    //change view object switch
    function changeObjectViewSwitch(newValue) {
        objectViewSwitch.value = newValue
        console.log('objectViewSwitch', objectViewSwitch.value)
    }





    // doubleCount, increment 
    return {
        currentIdForOpenObjectOnMap,
        serverUrlDomainRequest,
        objectViewSwitch,

        changeCurrentIdForOpenObjectOnMap,
        changeObjectViewSwitch
    }
})
