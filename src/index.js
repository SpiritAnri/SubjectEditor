import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initialData'
import Column from './components/Column'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`

class App extends React.Component{
    state = initialData

    onDragEnd = result => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]

        if (start === finish) {
            const newSubjectIds = Array.from(start.subjectIds)
            newSubjectIds.splice(source.index, 1)
            newSubjectIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...start,
                subjectIds: newSubjectIds
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            }
            this.setState(newState)
            return
        }

        //Moving from one list to another
        const startSubjeckIds = Array.from(start.subjectIds)
        startSubjeckIds.splice(source.index, 1)
        const newStart = {
            ...start,
            subjectIds: startSubjeckIds,
        }

        const finishSubjeckIds = Array.from(finish.subjectIds)
        finishSubjeckIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            subjectIds: finishSubjeckIds,
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        }
        this.setState(newState)
    }
    
    render(){
        return (
            <Container>
                <DragDropContext 
                    onDragEnd={this.onDragEnd}
                >
                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId]
                        const subjects = column.subjectIds.map(subjectId => this.state.subjects[subjectId])
                        return <Column key={column.id} column={column} subjects={subjects} />
                    }
                    )
                    }
                </DragDropContext>
            </Container>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
