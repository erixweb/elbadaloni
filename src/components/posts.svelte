<script lang="js">
	import ArticleCard from "./article-card.svelte"

	export let posts
</script>

{#each posts as post}
	<ArticleCard
		link={"article/"+post.frontmatter.href}
		name={post.frontmatter.title}
		image={post.frontmatter.image}
		date={post.frontmatter.date}
		topic={post.frontmatter.topic}
	/>
{/each}
