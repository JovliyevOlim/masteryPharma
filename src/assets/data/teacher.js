import i18next from 'i18next';
import team1 from '../img/teacher1.png'
import team2 from '../img/teacher2.png'
import team3 from '../img/teacher3.png'
import team4 from '../img/teacher4.png'

const teachers = [
    {
        id: 1,
        img: team1,
    },
    {
        id: 2,
        img: team2,
    },
    {
        id: 3,
        img: team3,
    },
    {
        id: 4,
        img: team4,
    }
]

export function getTeachersById(id) {
    const teacher = teachers.find((teacher) => teacher.id == id)
    return teacher
}