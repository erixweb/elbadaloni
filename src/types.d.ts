export type Topic = "política" | "cultura" | "actualitat" | "clima"

export type Post = {
    title: string
    date: string
    image: string
    href: string
    topic: Topic
}