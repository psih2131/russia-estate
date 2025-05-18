import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
    const router = useRouter();

    const serverUrlDomainRequest = ref('http://gearsdpz.beget.tech')

    const currentIdForOpenObjectOnMap = ref(null)

    // const doubleCount = computed(() => count.value * 2)
    function changeCurrentIdForOpenObjectOnMap(newValue) {
        currentIdForOpenObjectOnMap.value = newValue
        console.log('object open on map', currentIdForOpenObjectOnMap.value)
    }





    // doubleCount, increment 
    return {
        currentIdForOpenObjectOnMap,
        serverUrlDomainRequest,

        changeCurrentIdForOpenObjectOnMap,
    }
})
