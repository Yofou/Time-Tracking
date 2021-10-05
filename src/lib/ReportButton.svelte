<script lang="ts">
    export let value: string;
    export let timeframe: string
    const select = (value) => () => timeframe = value
</script>

<button 
    class="w-max text-left focus:outline-none hover:text-white capitalize" 
    class:text-white={timeframe == value}
    transition="~ colors duration-150"
    on:click={select(value)}
>
    {value}
</button>