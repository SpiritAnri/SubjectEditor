const initialData ={
    subjects: {
        subject1: {id: 'subject1', content: 'Русский язык'},
        subject2: {id: 'subject2', content: 'Информатика'},
        subject3: {id: 'subject3', content: 'Литература'}
    },
    columns: {
        '10Б': {
            id: '10Б',
            title: '10Б',
            subjectIds: ['subject1', 'subject2', 'subject3']
        }  
    },
    columnOrder: ['10Б'],
}

export default initialData