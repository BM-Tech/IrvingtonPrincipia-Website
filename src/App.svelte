<script>
	import HeroHead from './components/HeroHead.svelte';
	import Overview from './components/Overview.svelte';
	import Join from './components/Join.svelte';
	import About from './components/About.svelte';
	import Resources from './components/Resources.svelte';
	import { slide, fade } from 'svelte/transition'
 
	let tab = "Overview";
</script>

<svelte:head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="images/icon-03.png" type="image/x-icon">
    <title>Irvington Principia</title>
    <script src="https://kit.fontawesome.com/15181efa86.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
</svelte:head>

<HeroHead bind:current={tab}/>

<section class="blog-posts">
    <div class="container">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="columns featured-post is-multiline">
			{#if tab == "Overview"}
			<div transition:slide>
				<Overview/>
			</div>
			{:else if tab == "Join"}
			<div transition:slide>
				<Join/>
			</div>
			{:else if tab == "About"}
			<div transition:slide>
				<About/>
			</div>
			{:else if tab == "Resources"}
			<div transition:slide>
				<Resources/>
			</div>
			{/if}
		  </div>
		</div>
	  </div>
	</div>
</section>

<footer class="footer">
    <div class="content has-text-centered">
      <p>
        &copy; <strong>Principia</strong> 2022 
        <br> principia@ihsvikings.org
        <br> developed by <a href="http://google.com">BM Tech</a>
      </p>
    </div>
</footer>