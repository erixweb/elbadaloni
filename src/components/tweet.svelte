<script>
	export let picture
	export let displayName
	export let username
	export let date
	export let tweetUrl
</script>

<article class="bg-slate-200 rounded-[12px] p-[12px] max-w-[580px] m-auto mt-[20px] mb-[20px]">
	<a href={tweetUrl} rel="nofollow noindex" target="_blank" class="relative text-black decoration-transparent">
        <div class="absolute top-0 right-0 bg-zinc-800 text-white font-semibold rounded-full px-[12px] py-[2px] hover:bg-zinc-600 duration-[250ms]">Veure en twitter</div>
		<div class="flex gap-[20px]">
			<img
				src={picture}
				alt={`Perfil de ${displayName}`}
				class="rounded-full w-[45px] h-[45px] object-cover mt-0"
			/>
			<div>
				<h3 class="font-semibold">
					{displayName}
				</h3>
				<small class="text-gray-600">
					@{username}
				</small>
				<p>
					<slot />
				</p>
				<small class="text-gray-600">
					{date}
				</small>
			</div>
		</div>
	</a>
</article>
