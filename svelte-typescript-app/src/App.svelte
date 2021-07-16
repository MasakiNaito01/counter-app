<script lang="ts">
	let count = 0;
	function incrementCount() {
		count += 1;
	} 
	function decrementCount() {
		count -= 1;
	} 
	function returnZero() {
		count = 0;
	} 
	function handleClick() {
		;
	}
</script>

<main>
	<h1>Multiple Counter</h1>
	<dev class="box">
	<input type="text">
		{count}
		<button on:click={incrementCount}>
			<p>+</p> 
		</button>
		<button on:click={decrementCount}>
			<p>-</p> 
		</button>
		<button on:click={returnZero}>
			<p>リセット</p> 
		</button>
	</dev>
	<br>
	<button on:click={handleClick}>
		<p>new counter</p>
	</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>