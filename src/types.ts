export type Recipe = {
    prepTime?: number,
    instructions?: string,
    id: string,
    name: string,
    description: string,
    image?: string,
    ingredients?: string[]
}