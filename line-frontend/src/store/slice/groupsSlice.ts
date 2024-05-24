import { createSlice } from "@reduxjs/toolkit";

export interface GroupType {
    id: number;
    name: string;
    memberCount: number;
    profilePicture: string;
}

const groupsSlice = createSlice({
    name: 'groupList',
    initialState: {
        groupList: [ //Initial value for testing replace with api later
            {
                id: 1,
                name: 'Cat group 1',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 2,
                name: 'Cat group 2',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 3,
                name: 'Cat group 3',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 4,
                name: 'Cat group 4',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 5,
                name: 'Cat group 5',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 6,
                name: 'Cat group 6',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 7,
                name: 'Cat group 7',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 8,
                name: 'Cat group 8',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 9,
                name: 'Cat group 9',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 10,
                name: 'Cat group 10',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 11,
                name: 'Cat group 11',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 12,
                name: 'Cat group 12',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 13,
                name: 'Cat group 13',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 14,
                name: 'Cat group 14',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 15,
                name: 'Cat group 15',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 16,
                name: 'Cat group 16',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 17,
                name: 'Cat group 17',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 18,
                name: 'Cat group 18',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 19,
                name: 'Cat group 19',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
            {
                id: 20,
                name: 'Cat group 20',
                memberCount: 10,
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            },
        ] as GroupType[],
    },
    reducers: {
    }
})

export const groupsReducer = groupsSlice.reducer;