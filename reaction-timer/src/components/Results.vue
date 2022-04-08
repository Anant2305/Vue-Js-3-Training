<template>
    <div>
        <p>Reaction time - {{ score }} ms</p>
        <p class="rank">{{ rank }}</p>
    </div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if(this.score < 250) {
            this.rank = 'Ninjs Fingers'
        } else if ( this.score < 400) {
            this.rank = 'Rapid Reflexes'   
        } else {
            this.rank = "Snail Pace..."
        }
    }
}
</script>

<style scoped>
.rank {
    font-size: 1.4em;
    color: #4faf87;
    font-weight: bold;
}
</style>