<script lang="ts">
	import { months } from "../declarations"
	import type { Topic } from "../types"

	export let link: string, image: string, name: string, topic: Topic, date: string

	const postDate = new Date(date)
</script>

<a href={link} class="max-w-[400px] bg-slate-200 rounded-[12px] md:m-auto">
	<div class="relative">
		{#if image}
			<img
				src={image}
				alt={`Article ${name}`}
				class="rounded-tr-[12px] rounded-tl-[12px] w-full h-[300px] object-cover"
			/>
		{/if}
		<strong class="py-[3px] px-[10px] bg-yellow-400 uppercase absolute bottom-[5px] right-[5px]"
			>{topic}</strong
		>
	</div>
	<div class="p-[1em]">
		<h3 class="text-[20px] font-bold mb-[20px]">{name}</h3>
		<p class="mt-[20px] text-gray-500">
			{postDate.getDate()}
			{" " + months[postDate.getMonth()]}
			{" del " + postDate.getFullYear()}
		</p>
	</div>
</a>
