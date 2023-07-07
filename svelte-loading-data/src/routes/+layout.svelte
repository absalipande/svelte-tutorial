<script>
	import { page } from '$app/stores';
	export let data;
	const { username } = data;
</script>

{#if $page.data.notifcation}
	<p>{$page.data.notifcation}</p>
{/if}

<div>Welcome, {username}</div>
<slot />
