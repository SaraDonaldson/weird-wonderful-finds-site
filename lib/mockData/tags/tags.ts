import { MovementTag } from "@/types/tags"

export const mockMovements: MovementTag []=[
    {
            name: "Art Nouveau",
            decades: [1900, 1910, 1920, 1930 ],
            themes: [
                {name: "leaf"},
                {name: "flowingMotifs"},
                {name: "ornate"},
                {name: "nature"}
            ],
    }
]





export const exploreSections = {
            movements: mockMovements,
            makers:[],
            people:[],
            topics:[],
            eras: []
}

