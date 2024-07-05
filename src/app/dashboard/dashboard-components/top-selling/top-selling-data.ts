export interface Product {
    image: string,
    uname: string,
    gmail: string,
    injury: string,
    status: string,
    weeks: string,
    hours: string
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'Federico Garcia',
        gmail: 'hgover@gmail.com',
        injury: 'Rotula rota',
        status: 'Moderada -> Dificil',
        weeks: 'Me duele a la hora de caminar',
        hours: '10 min'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Martin Perez',
        gmail: 'hgover@gmail.com',
        injury: 'Fractura tibia',
        status: 'Principiante',
        weeks: '',
        hours: '40 min'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'Viviana sotelo',
        gmail: 'hgover@gmail.com',
        injury: 'Tunel carpeano',
        status: 'Moderada',
        weeks: '',
        hours: '13 min'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Enzo Garcia',
        gmail: 'hgover@gmail.com',
        injury: 'Artritis',
        status: 'Moderada -> Dificil',
        weeks: 'Esta semana no hice tiempo',
        hours: '31 min'
    },

]