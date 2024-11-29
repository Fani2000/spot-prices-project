import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Spot } from '@/models/SpotModels'

export const useSpotPriceStore= defineStore('spotPricesStore', () => {
    const spotPrices = ref<Spot[]>([])

    const initializeSpotPrices = async () => {
        const response = await fetch('https://api.sharenet.co.za/api/v1/px2/spots')
        const data = await response.json()
        console.log("Spot prices: ", data)
        spotPrices.value = handleFormatSpotData(data.spots)
    }
    
    const handleFormatSpotData = (data:Spot[]) : any[] => {
        return data.map((x:any) => ({
            ...data,
            "fullName": x.fullName,
            "price": Number(x.price).toFixed(2),
            "move": Number(x.move).toFixed(2),
            "pmove": (Number(x.pmove)).toFixed(2),
            "tickerId": x.tickerId,
            "datetime": x.datetime,
        }));
    }
    
    return { spotPrices, initializeSpotPrices }
})
