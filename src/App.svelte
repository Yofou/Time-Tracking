<script lang="ts">
  import WorkIcon from './assets/icon-work.svg'
  import PlayIcon from './assets/icon-play.svg'
  import StudyIcon from './assets/icon-study.svg'
  import SocialIcon from './assets/icon-social.svg'
  import SelfCareIcon from './assets/icon-self-care.svg'
  import ExerciseIcon from './assets/icon-exercise.svg'
  import { fade } from 'svelte/transition'


  import Data from './lib/data.json'
  const ExtraDataInfo = {
    "Work": {
      icon: WorkIcon,
      background: '#FF8B64'
    },
    "Play": { 
      icon: PlayIcon,
      background: '#55C2E6' 
    },
    "Study": { 
      icon: StudyIcon,
      background: '#FF5E7D'
    },
    "Social": { 
      icon: SocialIcon,
      background: '#7335D2'
    },
    "Self Care": {
      icon: SelfCareIcon,
      background: '#F1C75B'
    },
    "Exercise" : {
      icon: ExerciseIcon,
      background: '#4BCF82'
    },
  }

  import Report from "./lib/Report.svelte";
  import Card from './lib/Card.svelte'

  let timeframe = "weekly"

  const DelayFunc = (index: number, length: number) => {
    const INITAL_DELAY = 500
    const ADDITIONAL_DELAY = 50
    const TOTAL_DURATION = INITAL_DELAY + (ADDITIONAL_DELAY * (length - 1))

    if (index < ((length - 1) / 2)) {
      return INITAL_DELAY + (ADDITIONAL_DELAY * index)
    } else {
      return TOTAL_DURATION - (ADDITIONAL_DELAY * (index - (length/2)))
    }
  }
</script>

<svelte:head>
  <title>Time-Tracker</title>
</svelte:head>

<main class="w-screen min-h-screen bg-blue-900 grid" p="x-5 <lg:y-81px">
  
  <section 
    class="grid dashboard-layout gap-30px" 
    w="full max-1100px"
    place="self-center"
  >

    <Report bind:timeframe --area="report" />

    {#each Data as item, index (item.title)}
      <div in:fade={{ delay: DelayFunc(index, Data.length) }}>        
        <Card 
          category={item.title}
          hours={item.timeframes[timeframe].current}
          lastWeekHours={item.timeframes[timeframe].previous}
          --area={item.title.toLowerCase().replace(' ', '-')} 
          --bg-colour={ExtraDataInfo[item.title].background}
          --bg-image="url('{ExtraDataInfo[item.title].icon}')"
        />
      </div>
    {/each}
  </section>

</main>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

  .dashboard-layout {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 202px repeat(6, 160px);
    grid-template-areas: 
      "report"
      "work" 
      "play" 
      "study"
      "exercise" 
      "social" 
      "self-care";

    @screen md {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
      grid-template-rows: repeat(3, 244px);
      grid-template-areas: 
        "report report report"
        "work play study"
        "exercise social self-care";
    }
  
    @screen lg {
      grid-template-columns: repeat(4, minmax(200px, 255px));
      grid-template-rows: repeat(2, 244px);
      grid-template-areas: 
        "report work play study"
        "report exercise social self-care";
    }  
  }
</style>