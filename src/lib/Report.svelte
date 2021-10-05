<script lang="ts">
    import Jeremy from '../assets/image-jeremy.png'
    import ReportButton from './ReportButton.svelte';

    export let timeframe: string;
</script>

<div 
    class="main-div grid-$area bg-blue-600"
    border="rounded-15px"
    flex="~ col"
>
    <div 
        class="w-full h-3/4 bg-blue-300"
        flex="~ row lg:col"
        space="-lg:x-20px lg:y-43px"
        p="x-32px y-37px"
        border="rounded-15px"
    >
        <img class="w-78px h-78px" src={Jeremy} alt="">

        <div class="font-rubik space-y-3px self-center">
            <h1 text="15px [#BBC0FF]">Report for</h1>
            <h2 font="light" text="24px md:40px white">Jeremy Robson</h2>
        </div>
    </div>

    <div 
        class="h-1/3"
        flex="~ row lg:col"
        space="lg:y-21px"
        justify="-lg:around"
        font="rubik" 
        text="18px blue-100"
        p="x-32px lg:y-26px" 
    >
        <ReportButton bind:timeframe value={"daily"}  />
        <ReportButton bind:timeframe value={"weekly"} />
        <ReportButton bind:timeframe value={"monthly"}/>
    </div>
</div>

<style lang="scss">
    .main-div {
        animation: tiptap 0.5s;
    }

    @keyframes tiptap {
        0% {
            transform: translateY(-200%);
        }

        60% {
            transform: translateY(0%);
        }

        70% {
            transform: translateY(0%) rotate(10deg);
        }

        85% {
            transform: translateY(0%) rotate(-10deg);
        }

        100% {
            transform: translateY(0%) rotate(0deg);
        }
    }
</style>