<script lang="ts">
    import Options from '../assets/icon-ellipsis.svg'
    import { spring } from 'svelte/motion'

    const _hours = spring(0)
    const _lastWeekHours = spring(0)

    export let category: string
    export let hours: number
    export let lastWeekHours: number
    
    $: $_hours = hours
    $: $_lastWeekHours = lastWeekHours
</script>

<div 
    grid="~"
    border="rounded-15px"
    class="grid-$area w-full h-full bg-$bg-colour background-$image bg-no-repeat"
>
    <div 
        class="grid -md:gap-y-6px card-layout w-full h-76/100 md:h-81/100"
        bg="blue-600 hover:[#33397A]"
        place="self-end" 
        border="rounded-10px"
        p="30px"
        font="rubik"
        text="white"
        transition="~ colors duration-150"
    >
        <h1 
            class="grid-area-category selection:bg-$bg-colour"
            text="capitalize 18px"
        >{category}</h1>
        <img 
            class="grid-area-options selection:bg-$bg-colour" 
            justify="self-end"
            align="self-center"
            src={Options} 
            alt=""
        >

        <h2 
            class="grid-area-current selection:bg-$bg-colour font-light" 
            text="32px md:56px truncate"
            m="t-8px md:t-24px"
        >{$_hours.toFixed()}hrs</h2>
        <p 
            class="grid-area-last-week selection:bg-$bg-colour" 
            m="t-8px md:t-8px"
            text="15px [#BBC0FF]" 
            align="self-center" 
            justify="-sm:self-end"
        >Last Week - {$_lastWeekHours.toFixed()}hrs</p>
    </div>
</div>

<style lang="scss">
    .background-\$image {
        background-image: var(--bg-image);
        background-position: 95% -5%;
    }

    .card-layout {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, max-content);
        grid-template-areas: 
            "category options"
            "current last-week";

        @screen md {
            grid-template-rows: repeat(3, max-content);
            grid-template-areas: 
                "category options"
                "current current"
                "last-week last-week";
        }
    }
</style>