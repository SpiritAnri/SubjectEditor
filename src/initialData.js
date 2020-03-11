const initialData ={
    subjects: {
        subject1: {id: 'subject1', content: 'Русский язык'},
        subject2: {id: 'subject2', content: 'Информатика'},
        subject3: {id: 'subject3', content: 'Литература'}
    },
    columns: {
        '10A': {
            id: '10A',
            title: '10A',
            subjectIds: ['subject1', 'subject2', 'subject3']
        },
        '10Б': {
            id: '10Б',
            title: '10Б',
            subjectIds: []
        },
        '11A': {
            id: '11A',
            title: '11A',
            subjectIds: []
        },
        '11Б': {
            id: '11Б',
            title: '11Б',
            subjectIds: []
        }   
    },
    columnOrder: ['10A', '10Б', '11A', '11Б'],
}

export default initialData